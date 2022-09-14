import React  from 'react';

function Contact () {
    return(
        <div>
            <h1>Let's Chat!</h1>
            <form>     
            <input name="name" type="text" class="feedback-input" placeholder="Name" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    )
}

export default Contact