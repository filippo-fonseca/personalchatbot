const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

const msg = {
  to: "markmusic999@gmail.com",
  from: "zyndicatedevelopment@gmail.com",
  subject: "⚡️ Welcome to Zyndicate, Mark!",
  text: "and easy to do anywhere, even with Node.js",
  html: `<div style="font-family: sans-serif; color: #1f2225">

  <h2>🚀 You've made it, Mark. Welcome aboard!</h2
  <p style="font-size: 17px">Usually these emails would be written by a marketing team and mass-produced, but I wanted to personally welcome & onboard you to the platform.</p>
  
  <hr />
  
  <img height="60" width="60" src="https://cdn.spark.app/media/zyndicate1/icon/transparentz.png" />
  <br />
  <div style="font-size: 17px">
      <p>
      I'm Daniel, Customer Success Specialist at Zyndicate. I'm so thrilled you decided to sign up! We here at Zyndicate have a passion for building a platform & ecosystem that molds to your needs and allows you to <i>manage every aspect of your workflow in one place.</i> Whether this be your notes, documents, files, to-do items, goals, calendar events, ideas, writing, learning, etc., <strong>we've got you covered.</strong>
  </p>
  <p>My top priority is to make sure you have everything you need to make your experience with Zyndicate the best possible one to optimize your workflow and overall productive output in your life. For this reason, feel free to <strong>reply to this email</strong> and we'll be in touch directly!</p>
  
  <p>Over the next few days, you'll receive our starter email series, which will introduce you to the platform and allow you to maximize your experience as a productive individual on the platform.</p>
  
  <p>Just a few more things before I go:</p>
  
  <ul>
  <li><a href="" style="color: #15c; font-weight: blue; text-decoration: none">Join the Zyndicate communty on Slack</a> to share your thoughts & ideas, request features, receieve support, and much more
  <li>Remember to follow <a style="color: #15c; font-weight: blue; text-decoration: non">@ZyndicateHQ<a/> on Twitter for important updates, announcements, and more
  <li>Visit our dedicated <a style="color: #15c; font-weight: blue">help center</a> to learn more about how to optimize the way your workflow flows in the Zyndicate ecosystem</l>
  </ul>
  
  Best regards and happy productivity!
  
  <br />
  <br />
  Daniel
  </div>
  
  </div>`,
};

sgMail
  .send(msg)
  .then((response) => {
    console.log("Email sent!");
  })
  .catch((error) => {
    console.error(error);
  });
