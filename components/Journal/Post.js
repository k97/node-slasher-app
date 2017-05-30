import React from 'react';

class JournalPost extends React.Component {

  render() {
    return(
<article className="">

  <header className="center measure pt5 pb1 tc">
    <h1 className=" lh-title fw5 mt0 black-90">
      Requirement gathering
    </h1>
    <time className="f5 f6-l db fw5 ttu mb1 black-50">March 19, 2015</time>
  </header>

  <div className="ph3 ph4-m ph5-l black-80">
    <p className="f4 mb4 center measure lh-copy i black-50">
      The intricacies of requirement gathering using various tools in design & development of user interfaces
    </p>
   </div>
    <div className="measure db center f5 f4-ns lh-copy black-60">

     <p>Recently, I have been involved in the design and development of an airline servicing app as UI developer. My role also involves working closely with the designers to check with the feasibility of the designs they are producing and feed in the concerns (if any) before starting with the development. This process also works the other way around and it’s an interesting role to play, since the feedback I pass should be constructive for them to keep their work in a progressive path.</p>

    <p>At times, I found this is to be tricky, since critiquing a design was like threading a fine line which often trigger the designer’s ego or make me look like an absolute duffer, if a false alarm was set off. This meant, I had to be extra careful before passing any comment and also make sure the nature of the comment should be constructive and should help the designer rather than distract the entire process. I enjoyed doing it, since the designer side of me gets excited and usually this is where I get to exercise my design skills (at times, when I wanted to a mockup a flow or screen). Eventually, I took this up as a challenge to pass a feedback only if the particular design doesn’t solve the problem or if it doesn’t work in terms of interaction. After a while, this process also got trickier, passionate designers usually find it difficult to move away from their initial solution. I know this because, I have experienced this and have also heard designers share the same.</p>

    <p>Iteration is a key part in evolving a design and getting back to drawing board to reinitiate the whole process again in a fairly big team like ours was often a pain in the ass. I say that because, sometimes end-users have a sneak peak of the design and get stuck with it irrespective of the critique or there will strict deadlines to adhere.</p>

    <p>During one of these crits, a developer pointed out a designer’s habit, which I found it to be interesting. Collecting requirements in wireframe. It sounds a like a personal preference for anyone, even I can’t thoroughly deny doing it but I have not exercised it often to become a habit or preference. I say that because, my go-to tool for note taking in my workplace is Wunderlist (I have a huge number of lists going on in it and I would personally suggest it to anyone) or my primary code editor. Coming back to the topic, requirement gathering is an age-old task and people use tools like text editors or even a paper to do it. After giving it some thought, I realized how bad it is to gather requirements in wireframe.</p>
    </div>
</article>

    );
  }

}

export default JournalPost;
