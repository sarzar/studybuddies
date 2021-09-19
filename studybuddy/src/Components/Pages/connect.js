import { Input } from 'semantic-ui-react'
import React from 'react';
import '../../connect.css';
import { Button } from 'semantic-ui-react'


function connect() {
    return (
        <div className="container-connect">
            <h1 className="titles">Start Studying!</h1>
            <div className="form">
                
                <div className="form-subject">
        
                    <select class="form-control" id="subject" placeholder="Pick a subject...">
                        <option value="math">Math</option>
                        <option value="chemestry">Chemistry</option>
                        <option value="biology">Biology</option>
                        <option value="physics">Physics</option>
                        <option value="english">English</option>
                        <option value="business">Business</option>
                        <option value="cs">Computer Science</option>
                        <option value="eng">Engineering - General</option>
                        <option value="art">Creative Arts and Design</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                        <option value="humanities">Humanities</option>
                        <option value="law">Law</option>
                        <option value="kin">Kineseology</option>
                        <option value="social">Social studies</option>
                        <option value="hospitality">Travel and hospitality</option>
                        <option value="politics">Politics</option>
                        <option value="crim">Criminology</option>
                        <option value="socialscience">Social Science</option>
                        <option value="agriculture">Agriculture</option>
                    </select>
                </div>
                <div className="form-year">
            
                    <select class="form-control" id="year" placeholder="Pick a year...">
                        <option value="g1">Grade: 1</option>
                        <option value="g2">Grade: 2</option>
                        <option value="g3">Grade: 3</option>
                        <option value="g4">Grade: 4</option>
                        <option value="g5">Grade: 5</option>
                        <option value="g6">Grade: 6</option>
                        <option value="g7">Grade: 7</option>
                        <option value="g8">Grade: 8</option>
                        <option value="g9">Grade: 9</option>
                        <option value="g10">Grade: 10</option>
                        <option value="g11">Grade: 11</option>
                        <option value="g12">Grade: 12</option>
                        <option value="ps1">Post-Secondary year: 1</option>
                        <option value="ps2">Post-Secondary year: 2</option>
                        <option value="ps3">Post-Secondary year: 3</option>
                        <option value="ps4">Post-Secondary year: 4</option>
                        <option value="gs">Graduate school</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <a href = "http://localhost:3030/">  
                <Button className = "joinbutton" size="massive" color='orange'> Start</Button>
                </a>
            </div>
        </div>
    );
}
export default connect;