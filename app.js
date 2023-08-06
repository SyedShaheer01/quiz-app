var questions=[
    {
    question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        option4: '<list>',
        correctOption: "<ol>"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        option4: '<dl>',
        correctOption: "<ul>"
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        option1: '<img alt="MyImage">image.gif</img>',
        option2: '<img href="image.gif" alt="MyImage">',
        option3: '<img src="image.gif" alt="MyImage">',
        option4: '<image src="image.gif" alt="MyImage">',
        correctOption: '<img src="image.gif" alt="MyImage">'
    },
    ]
    
    var ques=document.getElementById("quiz");
    var option1=document.getElementById("option1");
    var option2=document.getElementById("option2");
    var option3=document.getElementById("option3");
    var btn=document.getElementById("btn")
    var marks=document.getElementById("marks")
   
    var std=document.getElementById("wrap")
    var pass=document.getElementById("pass")
    var index=0;
    ques.innerText=questions[index].question
option1.innerText=questions[index].option1
option2.innerText=questions[index].option2
option3.innerText=questions[index].option3
var score=0


function nextQuestion(){
    
    // console.log(option)
    var options=document.getElementsByName("answer")
    for(var i=0; i<options.length;i++){
        if(options[i].checked){
            var selected=options[i].value
            var userAnswer=questions[index-1][`option${selected}`]
            var correctAnswer=questions[index-1].correctOption;
            // console.log(correctAnswer)
            if(userAnswer===correctAnswer){
                score++;
            }
            
            
        }
        
        
        options[i].checked=false
        btn.disabled=true;
        
        
    }
    
    if(index>questions.length-1){
        console.log(score)
        // console.log( Math.round( score / questions.length*100)+"%" )
        ques.style.display="none"
        option1.style.display="none"
        option2.style.display="none"
        option3.style.display="none"
        btn.style.display="none"
        time.style.display="none"
        std.style.display="none"
        // marks.style.border="2px solid green"
        // marks.style.boxShadow= "0px 0px 10px 5px green"
         var total= Math.round( score / questions.length*100)
        marks.innerHTML=total+"%"
        console.log(total)
        
        
        
        
        if(total < 50){
            marks.style.border="2px solid red"
            marks.style.boxShadow= "0px 0px 10px 5px red"
                pass.innerHTML="fail"
                pass.style.color="rgb(160, 9, 9)"
                
            }
            else{
                marks.style.border="2px solid green"
                marks.style.boxShadow= "0px 0px 10px 5px green"
                pass.innerHTML="pass"
                pass.style.textShadow="5px 5px 10px"
                pass.style.color= "rgb(4, 86, 4)"
                
                
            }
    }   
    
    else{
        ques.innerText=questions[index].question
        option1.innerText=questions[index].option1
        option2.innerText=questions[index].option2
        option3.innerText=questions[index].option3
        index++;
        
        
        
        
        // time.innerHTML=`${min}:${sec}`
        
    }

    
    
    
}

nextQuestion()




function enableBtn(){
    btn.disabled=false
    
    
    
    
}
var time=document.getElementById("timer")

var min="00"
var sec=59
var interval=setInterval(function(){
    time.innerHTML=`${min}:${sec}`

    if(sec === 0){
        sec=59
        min="00"
        nextQuestion()
        // sec=59
        // min="00"
        // sec--
    }
    else{
        
        time.innerHTML=`${min}:${sec}`
        
        sec--
    }
    
    
       
},1000)
    
    
    
window.addEventListener("blur", function(){
    console.log("user gone")
})