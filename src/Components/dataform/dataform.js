import React, { useEffect ,useState} from 'react'
import Footer from '../footer/footer';
import "./dataform.css"
function Dataform() {
    const [email, setEmail] = useState("");
    const [orgname, setOrgname] = useState("");
    const [user,setUser]=useState("");
    const [schoname,setSchoname] = useState("");
    const [about,setAbout] = useState("");
    const [mob,setMob] = useState("");
    const [address,setAddress] = useState("");
    const [eli,setEli] = useState("");
    const [bene,setBene] = useState("");
    const [spbf,setSpbf] = useState("");
    const [proce,setProce] = useState("");
    const [comment,setComment] = useState("");
    const [date,setDate] = useState("");


  return (
    <div>

    <div class="container bg-purple m-auto my-4">
    <div className='row'>
    <div className='col-md-12 text-center '>
    <div className='yel'><h2 >
    Short &amp; Sweet</h2></div>
    
   <div className='subb'> <p>After Receiving your data form response we will shortly connected through Contact provided by you so make sure you entered correct contact details.</p> 
   <p>We would like to hear more on your Program to understand complety and our legal advisor team give us indication then we will go ahead as to provide 100% correct data to our user.</p>
   <p>Hope You understand @Scholar privacy@policy.</p>
  </div> </div></div></div>
   
    <div class="memberformcontainer">


    <div class="form">
        <h1 id="form-title">Data-Form For Organization</h1>
        <h3 class="form-below">Fields marked with an <span class="redd">*</span> are required</h3>
        <form action="./mem.php" method="post">
            <div class="box">
                <label for="Oname" class="form-below labell">Organization Name <span class="redd">*</span></label>
                <br/>
                <input type="text" value={orgname} onChange={(e) => setOrgname(e.target.value)} name="Oname" class="form-input" placeholder="Enter Your Organization Name" required/>
            </div>

            <div class="box">
                <label for="lname" class="form-below labell">Your Name <span class="redd">*</span></label>
                <br/>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} name="lname" class="form-input" placeholder="Enter Your Data provider Name" required/>
            </div>

            <div class="box">
                <label for="State" class="form-below labell">Head office Location <span class="redd">*</span> </label>
                <br/>
                <select name="State" id="State" class="form-input" required>
                    <option value="Select State">Select State</option>
                    <option value="Ahmedabad">Gujarat</option>
                    <option value="Anand">Mumbai</option>
                    <option value="Gandhinagar">Rajsthan</option>
                    <option value="Surat">MadhyaPradesh</option>
                    <option value="Bharuch">Delhi</option>
                    <option value="vadodara">Kolkata</option>
                    <option value="Valsad">Ahmedabad</option>
                    <option value="Rajkot">Banglore</option>
                    <option value="Rajkot">Surat</option>
                    <option value="Rajkot">UttarPradesh</option>
                    <option value="Rajkot">Pune</option>
                    <option value="Rajkot">Noida</option>
                </select>
            </div>
          
            <div class="box">
                <label for="con-email" class="form-below labell">Confirm Email <span class="redd">*</span></label>
                <br/>
                <input type="text" name="con-email" class="form-input" value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="Confirm Your Organization Email ID" required/>
            </div>

            <div class="box">
                <label for="sname" class="form-below labell">Your Scholarship/Program Name <span class="redd">*</span></label>
                <br/>
                <input type="text" value={schoname}
                onChange={(e) => setSchoname(e.target.value)} name="sname" class="form-input" placeholder="Enter Your Scholarship/Program Name" required/>
            </div>

            <div class="box">
            <label for="abt" class="form-below labell">About Your Scholarship <span class="redd">*</span></label>
            <br/>
            <textarea name="abt" value={about}
            onChange={(e) => setAbout(e.target.value)} id="f-textarea" cols="30" rows="10" required></textarea>
        </div>

            <div class="box">
            <label for="bef" class="form-below labell">Is your scholarship program is directly beneficial to anyone?  <span class="redd">*</span></label>
            <br/>
            <input type="text" value={spbf}
            onChange={(e) => setSpbf(e.target.value)}  name="bef" class="form-input" placeholder="Like For Ex-militiry's Childern / To Handicept etc" required/>
        </div>

        <div class="box">
        <label for="eli" class="form-below labell">Your Scholarship/Program Eligibility <span class="redd">*</span></label>
        <br/>
        <input type="text" value={eli}
        onChange={(e) => setEli(e.target.value)}  name="eli" class="form-input" placeholder="Enter Your Scholarship/Program Eligibility" required/>
    </div>

    <div class="box">
        <label for="bene" class="form-below labell">Your Scholarship/Program Benefits <span class="redd">*</span></label>
        <br/>
        <input type="text" value={bene}
        onChange={(e) => setBene(e.target.value)}  name="bene" class="form-input" placeholder="Enter Your Scholarship/Program Benefits" required/>
    </div>

    <div class="box">
        <label for="proc" class="form-below labell">Processor of Your Program <span class="redd">*</span></label>
        <br/>
        <input type="text" value={proce}
        onChange={(e) => setProce(e.target.value)} name="proc" class="form-input" placeholder="Expaline how to apply for your program?" required/>
    </div>

    

            

            <div class="box">
                <label for="joiningDate" class="form-below labell">Deadline Of  Your Scholarship <span
                        class="redd">*</span></label>
                <br/>
                <input type="date" value={date}
                onChange={(e) => setDate(e.target.value)} name="date" class="form-input" required/>
            </div>

            <div class="box">
                <label for="mobileno" class="form-below labell">Enter Your Mobile number <span
                        class="redd">*</span></label>
                <br/>
                <input type="text" value={mob}
                onChange={(e) => setMob(e.target.value)} name="mobileno" class="form-input" placeholder="Enter Your mobile number" required/>
            </div>

            <div class="box">
                <label for="skill" class="form-below labell">Do you had use this platform before for providing scholarship? <span class="redd">*</span></label>
                <br/>
                <input type="radio" value="yes" name="skills" class="f-radio"/>
                <label for="yes" class="form-below labell" id="con">YES</label><br/>
                <input type="radio" value="no" name="skills" class="f-radio"/>
                <label for="yes" class="form-below labell" id="con">NO</label>
            </div>

            <div class="box">
                <label for="address" class="form-below labell">Enter Your Organization Address<span
                        class="redd">*</span></label>
                <br/>
                <input type="text" value={address}
                onChange={(e) => setAddress(e.target.value)} name="address" class="form-input" placeholder="Enter Your Organization Address"
                    required/>
            </div>



            <div class="box">
                <label for="time" class="form-below labell"> For which category student you would like to provide scholarships ? <span
                        class="redd">*</span> </label>
                <br/>
                <select name="time" id="stime" class="form-input" required>
                    <option value="Select time">Select category</option>
                    <option value="1 hour">General</option>
                    <option value="2 hour">OBC/SC/ST</option>
                    <option value="3 hour">ALL</option>
                    <option value="3 hour">OBC</option>
                    <option value="4 hour">SC/ST</option>
                </select>
            </div>

            <div class="box">
                <label for="comment" class="form-below labell">Do you have any comments or questions? <span
                        class="redd">*</span></label>
                <br/>
                <textarea name="comment" value={comment}
                onChange={(e) => setComment(e.target.value)} id="f-textarea" cols="30" rows="10" required></textarea>
            </div>

            <div class="box">
                <input type="submit" value="submit" class="  button2 ml-3" />
            </div>
        </form>
        <h3 class="form-below"> <span class="redd"> Please correct errors before submitting this form.</span></h3>

    </div>
</div>

<Footer/>

    </div>
  )
}

export default Dataform