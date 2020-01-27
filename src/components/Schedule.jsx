import React, { useContext, useEffect } from "react"
import { newClassForm } from "./_newClassTmp.jsx"
import Context from "../store/context"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import ModalComp from "./Modal.jsx"
import './style/main.scss'
import "./style/tooltip.scss"
import { FormikForm } from "./form.jsx"
import moment from "moment"
import Tooltip from "./tooltip.jsx"
import { SCHEDULE, MODAL, INITIAL_VALUES, FORM_CONFIG, COMP_UPDATE } from "../store/useGlobalState"
import FormModal from "./formModal.jsx"

const Schedule = () => {
    console.log("schedule rendered");
    const { modalState,
        scheduleState,
        initialValues,
        formConfig,
        tooltipState,
        compUpdate,
        appState,
        actions } = useContext(Context)

    useEffect(() => {
        const getEvents = async () => {
            const props = {
                collectionName: "classes",
                method: "get",
                author: appState.uid
            }
            const events = await newClassForm.dbPath(props)();
            actions({
                type: SCHEDULE,
                payload: { ...scheduleState, events: events }
            })
        }
        getEvents()
    }, [compUpdate]
    )
    const calendarComponentRef = React.createRef();
    const toggleModal = () => {
        actions({
            type: MODAL,
            payload: { ...modalState, modalVisibility: !modalState.modalVisibility }
        })
    }
    const renderModal = () => {
        return (
            <ModalComp
                isVisible={modalState.modalVisibility}
                nonSubmit={toggleModal}
                onSubmit={toggleModal}
                title={formConfig.title}
            >
                <FormikForm
                    formType={formConfig.formType}
                    collectionName={formConfig.collectionName}
                    docId={formConfig.docId}
                    method={formConfig.method}
                    handleDelete={handleDelete}
                />
            </ModalComp>
        )
    }
    const handleDelete = () => {
        newClassForm.dbPath({ ...formConfig, method: "delete" })().then(() => {
            actions({
                type: COMP_UPDATE,
                payload: {
                    compUpdate: !compUpdate
                }
            })
            toggleModal()
        })
    }
    const toggleTooltip = () => {
        actions({
            type: "setTooltipState",
            payload: { ...tooltipState, show: !tooltipState.show }
        })
    }
    const showTooltip = (info) => {
        const a = document.querySelector(".tooltip")
        const rect = info.el.getBoundingClientRect()
        console.log(rect);
        const scrollTop = window.scrollY
        const { title, publicId } = info.event._def
        const { start } = info.event
        const { classType, level, origin } = info.event._def.extendedProps
        a.innerHTML = `<div>
            <h3>${title}</h3>
            <p>${origin}</p>
            <p>${level}</p>
        </div>`
        a.style.width = `${rect.width}` + `px`
        a.style.display = "block"
        a.style.position = "absolute"
        a.style.top = `${rect.top + scrollTop - 70}px`
        a.style.left = `${rect.left}px`
    }
    const hideTooltip = (info) => {
        const a = document.querySelector(".tooltip")
        a.style.display = "none"
    }
    const handleEventClick = (info) => {
        console.log(info);
        const { title, publicId } = info.event._def
        scheduleState.events.forEach(event => {
            if (event.id == publicId) {
                actions({
                    type: INITIAL_VALUES,
                    payload: {
                        ...initialValues, newClass: {
                            ...event,
                            start: event.start,
                            end: event.end,
                            startTime: event.startTime,
                            endTime: event.endTime
                        }
                    }
                })
            }
        })

        actions({
            type: "setFormConfig",
            payload: {
                ...formConfig,
                title: `Update ${title}`,
                collectionName: "classes",
                formType: "newClass",
                docId: publicId,
                method: "update"
            }
        })
        toggleModal()
    }
    const handleDateClick = (arg) => {
        actions({
            type: FORM_CONFIG,
            payload: {
                ...formConfig,
                title: `Create new class`,
                collectionName: "classes",
                formType: "newClass",
                docId: "",
                method: "add"
            }
        })
        actions({
            type: INITIAL_VALUES,
            payload: {
                ...initialValues, newClass: {
                    title: "",
                    level: "",
                    origin: "",
                    classType: "Not Selected",
                    start: moment(arg.dateStr),
                    end: moment(arg.dateStr),
                    startTime: moment(arg.dateStr),
                    endTime: moment(arg.dateStr)

                }
            }
        })
        toggleModal()
    }

    return (
        <div className="calendarParent">
            <FullCalendar
                contentHeight={600}
                height={600}
                eventMouseEnter={showTooltip}
                eventMouseLeave={hideTooltip}
                eventClick={handleEventClick}
                dateClick={handleDateClick}
                defaultView="dayGridMonth"
                plugins={
                    [
                        dayGridPlugin,
                        listPlugin,
                        interactionPlugin,
                        timeGridPlugin
                    ]
                }
                header={
                    {
                        left: 'prev,next today',
                        center: 'Schedulee',
                        right: 'dayGridMonth,listWeek,timeGridWeek'
                    }
                }
                events={scheduleState.events}
                //eventRender={showTooltip}
                ref={calendarComponentRef}
            />
            {modalState.modalVisibility && <FormModal toggleModal={toggleModal} handleDelete={handleDelete} />}
            <Tooltip>
                {tooltipState.show && showTooltip()}
            </Tooltip>
        </div>
    )
}

export default Schedule