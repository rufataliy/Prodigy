import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import ModalComp from "./Modal"
import api from "../api/api.js"
import './style/main.scss'
import firebaseConfig from "../firebase/firebase-config"
import "firebase/firestore"
import firebase from "firebase/app"

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

class Schedule extends React.Component {
  
    calendarComponentRef = React.createRef();

    state = {
              modal:false,
              calendarWeekends: true,
              arg:"",
              events:null
    };
  
    componentDidMount(){
      (async () => {
        api.get("/events").then((response)=>{
          console.log(response.data);
            return response.data
        }).then((events)=>{
          this.setState({events})
        })
      })()
    }
    
    toggleModal = ()=>{
      this.setState({modal:!this.state.modal})
    }
    renderModal = ()=>{
      if(this.state.modal){
        return (
          <ModalComp 
          state={this.state.modal} 
          nonSubmit={this.cancel} 
          onSubmit={this.handleClick}
          />
        )
      }
    }
    handleClick=()=>{
      
      this.toggleModal()
      // api.post("/events",{title:"title",start:this.state.arg.date}).then(()=>{
      //   (async () => {
      //     api.get("/events").then((response)=>{
      //       console.log(response.data);
      //         return response.data
      //     }).then((events)=>{
      //       this.setState({events})
      //     })
      //   })()
      // })
        db.collection("cities").get()
      .then(function(doc) {
        console.log(doc.docs[0].id);
        
          console.log("Document successfully fetched!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      console.log("modal Clicked ok schedule");
      
      
    }
    cancel = ()=>{
      this.toggleModal()
      console.log("cancel clicked Schedule");
      
    }
    handleDateClick=(arg)=>{
     console.log("clicked");
     
      // this.setState({calendarEvents:[...this.state.calendarEvents, {title:title,start: arg.date}]})
      this.setState({modal:!this.state.modal,arg})      
    }

    render() {
      let modal = this.renderModal()
     
      return (
        <div>
          <FullCalendar 
            dateClick = {this.handleDateClick}
            defaultView="dayGridMonth" 
            plugins={[ dayGridPlugin, listPlugin, interactionPlugin,timeGridPlugin]}
            header={{
                    left: 'prev,next today',
                    center: 'Schedulee',
                    right: 'dayGridMonth,listWeek,timeGridWeek'
            }}
            events = {this.state.events}
            ref = {this.calendarComponentRef}
           />

           {modal}
        </div>
      )
    }
  }

export default Schedule