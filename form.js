
        

        function dis1(){
          document.getElementById("stud-form").style.display="block";
          document.getElementById("mark-form").style.display="none";

        }
        function dis2(){
          document.getElementById("mark-form").style.display="block";
          document.getElementById("stud-form").style.display="none";

        }
        
        function display(event) {
            // const name1="Akhila"
            // const from="mtp"
            // console.log("my name is" + name1 +  "iam from" + from);
           event.preventDefault(); 

            const name = document.getElementById('student-name').value;
            const email = document.getElementById('student-email').value;
            const dob=document.getElementById('student-dob').value;
        
            const studentData = "Name: "+ name +  "<br>Email:" + email +  "<br>DOB:"+ dob;
            console.log(studentData);
            alert("check before submitting")

            document.getElementById('student-result').innerHTML = studentData;
        }

        function displayMark(event) {
           event.preventDefault();
            var tamil = parseInt(document.getElementById('marks-tamil').value),
             english = parseInt(document.getElementById('marks-english').value ),
             maths = parseInt(document.getElementById('marks-maths').value) ,
             science = parseInt(document.getElementById('marks-science').value),
             social = parseInt(document.getElementById('marks-social').value),

           total = tamil + english + maths + science + social;
           var marksData = "Tamil:"+tamil+ 
             "<br>English:" + english + "<br>Maths:" + maths +  "<br>Science:" +science+  "<br>Social:" + social + "<br>Total:" + total;
            console.log(marksData);
            alert("check before submitting")
            document.getElementById('marks-result').innerHTML = marksData;
        }
    