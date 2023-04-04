import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import SpeedIcon from '@mui/icons-material/Speed';
import { UilDiary } from '@iconscout/react-unicons';
import Button from './smallComponents/Button';
import {ArrowDown2} from 'iconsax-react';
import Footer from './Footer';
import Header from './Header';


//import { faCoffeefaCoffee } from '@fortawesome/free-solid-svg-icons'


export function Home() {
    return ( <>
    <Header isLine={true}/>
      <main id='mainPage'>
            <p id='about'> 
            Clear Your Mind Is A Web Page Designed To Help Physiotherapy Patients Bridge The Time Till Their First Consultation
            </p>
            <div id="callToAction">Bridge The Time Till Your Consultation With Our 5 Step Model!</div>
            <div id="fourStepModel">
              <div className='card'> 
                <AssignmentIcon sx={{ color: "white", fontSize: "200px" }} />
                <div className='cardHeader'>
                  Diagnose    
                </div>
              </div>
              <div className='card'> 
                <LibraryBooksIcon sx={{ color: "white", fontSize: "200px" }}/>
                <div className='cardHeader'>
                  Learn
                </div>
              </div>
              <div className='card'>
                <PeopleIcon sx={{ color: "white", fontSize: "200px" }}  />
                <div className='cardHeader'>
                  Find Support
                </div>
              </div>
              <div className='card'>
                <SpeedIcon sx={{ color: "white", fontSize: "200px" }}/>
                <div className='cardHeader'>
                  Measure
                </div>
              </div>
              <div className='card'>
                <UilDiary size="200" color="white"/>
                <div className='cardHeader'>
                  Track
                </div>
              </div>
            </div>
            <div style={{width: "30%"}}> 
          <Button title={"Learn More"} inner={<ArrowDown2 size="32" backgroundColor="white" color="#337233"/>}/> 
          </div>
          <div className='valueProposition'> 
          <div className='iconWrapper'>
            <AssignmentIcon sx={{ color: "white", fontSize: "440px" }} />
          </div>
            <div className='textFieldRight'>
            <h2>DIAGNOSE</h2>
            <h4>Identify Your Underlying Problem By Filling Out Our Questionnaire</h4>
              <div className='desc'>
              Our questionnaire was designed by us with the help of our health 
              professionals to help you determine your exact condition and 
              its treatment 
              </div>
              <Button title="Questionnaire" route="/questionnaire"/> 
            </div>
          </div>
          {/*Learn Value proposition*/}
          <div className='valueProposition'> 
            <div className='textFieldRight'>
            <h2>LEARN</h2>
            <h4>Learn More About Your Condition By Using Our Content Section </h4>
              <div className='desc'>
              Our free content section is equipped with multiple articles and
               videous that are suited to your exact condition and were 
               validated and approved by our health proffessinals   
              </div>
              <Button title="Free Content"/> 
            </div>
            <div className='iconWrapper'>
            <LibraryBooksIcon sx={{ color: "white", fontSize: "440px" }} />
          </div>
          </div>
              {/*Find Support Value proposition*/}
          <div className='valueProposition'> 
          <div className='iconWrapper'>
            <PeopleIcon sx={{ color: "white", fontSize: "440px" }} />
          </div>
            <div className='textFieldRight'>
            <h2>FIND SUPPRORT</h2>
            <h4>Share Your Problem With Our Psychiatrists And Other Patients On Our Forum</h4>
              <div className='desc'>
              Our forum enables you to post a question concerning your condition 
              and get help from our health proffessionals and other patients  
              </div>
              <Button route="forum" title="Forum"/> 
            </div>
          </div>
              {/*Measure & track value proposition*/}
          <div className='valueProposition'> 
            <div className='textFieldRight'>
            <h2>MEASURE & TRACK</h2>
            <h4>Use Our Mood Tracker And Diary Function To Provide 
                Our Psychiatrists With Weekly 
                Insights Into Your Well-Being</h4>
              <div className='desc'>
              The diary  offers the patient the opportunity to write
              down anything he observes around his condition.
              </div>
              <div className='desc'>
              The mood tracker 
              is a weekly questionaire that is designed to evaluate the current
              severity of your condition.
              </div>
              <div className='desc'>
              Later the patient can 
              share these insights with the therapist to improve the quality and 
              potential benefits of his consultatiation  
              </div>
              <Button route="MTD" title="Mood Tracker & Diary Dashboard"/> 
            </div>
            <div className='iconWrapper2'>
            <SpeedIcon sx={{ color: "white", fontSize: "400px" }} />
            <UilDiary size="440" color="white"/>
          </div>
          </div>
      </main>
      <footer className='footer'>
      <Footer isLine={true}></Footer>
      </footer>
      



    </> );
}
