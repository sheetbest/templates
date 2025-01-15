const testimonials = [
   {
      "content": "When you find a team that goes way beyond their support scope then you have found a fantastic company. I can not under value or over praise the support and assistance I have received from Daniel at Sheet Best. It has been outstanding. I will use sheet best for all my Google sheets integrations. Thanks Daniel you and Sheet Best deserve the all the success that’s ahead for you.",
      "author": {
         "name": "Danny Longhurst",
         "url": "https://siteshack.com.au/",
         "role": "",
         "image": null,
         "date": "2024-04-05"
      }
   },
   {
      "content": "I tried 10 different api services.<br /><br/>         Of these 10, 2 worked without problems, and sheet best was 1 of them that worked without any issues.<br /><br />         You are also the cheapest, which is why I choose you for my project at adalo.com.",
      "author": {
         "name": "Anders",
         "role": "",
         "image": null,
         "date": "2023-02-08"
      }
   },
   {
      "content": "For now I&#8217;m just using you guys to do some CRUD stuff for a Web3 app. Look forward to exploring more in the future.<br /><br />         PS: I really like your services. Very cool stuff and easy to work with.",
      "author": {
         "name": "Andre Vlok",
         "role": "User Experience & Interface Engineer",
         "image": null,
         "date": "2022-10-06"
      }
   },
   {
      "content": "I have been using Sheet Best now for about 4 months and I have to say I absolutely love it! Super straightforward and easy to use with great documentation. 5/5, definitely would recommend for anyone looking for a way to write out data to a google sheet.",
      "author": {
         "name": "Joe Consolino",
         "role": "",
         "image": null,
         "date": "2023-09-29"
      }
   },
   {
      "content": "We are using Sheet Best to power our Helpdesk function for a progressive web app-based training on advocacy for community health workers in low- and middle-income countries.<br /><br />        Before we started using Sheet Best, we relied primarily on WhatsApp to receive and deal with user-reported technical issues. This was overwhelming for our team and end users since it was challenging to track requests and notify users when their issue had presumably been resolved.<br /><br />        We were trying to streamline the receipt and management of user-reported technical issues.<br /><br />        We built a Helpdesk function into the PWA that allows users to submit an issue to our Admin team. The tickets are stored via Sheet Best where they can be assigned by our team and remediated.<br /><br />        What makes Sheet Best stand out is its price, integration with Google Sheets, simplicity.",
      "author": {
         "name": "Carey Westgate",
         "role": "Deputy Director at Community Health Impact Coalition",
         "image": null,
         "date": "2022-09-28"
      }
   },
   {
      "content": "I&#8217;m using it to prototype data models for back end integrations to our conversational AI. In other words, as I am a non-developer, Sheet Best helps me to mock up API-like structures using a consistent and reproducible data schema. And, I use that to describe a possible back end integration model to customers.",
      "author": {
         "name": "Chris Adomaitis",
         "role": "Director and Solutions Architect",
         "image": null,
         "date": "2022-10-10"
      }
   },
   {
      "content": "Before Sheet Best, our bots were basic bots without a connection to a data base like Google sheets. The Google sheets api are quite difficult to understand.<br /><br />        We wanted to connect our bots to Google sheets to send and get data.<br /><br />        Now with Sheet Best, all our bots are more intelligent. They can send and get data from Google sheets, this feature transform to a rich conversation with users.<br /><br />        What makes Sheet Best stand out is the documentation and the % of uptime. Few errors in years.",
      "author": {
         "name": "Jorge Cisneros",
         "role": "Executive Director and CEO at B4BCompany",
         "image": null,
         "date": "2022-07-14"
      }
   },
   {
      "content": "I would love to integrate this database system into many projects. The service was excellent.",
      "author": {
         "name": "Diener Orozco",
         "role": "Teacher at Sysem Plus",
         "image": null,
         "date": "2022-11-25"
      }
   }
];

// # for each testimonial in the array
// # print it out as csv format

testimonials.forEach((testimonial) => {
   console.log(testimonial.content);
   // console.log(`"${testimonial.content}","${testimonial.author.name}","${testimonial.author.role}","${testimonial.author.date}","${testimonial.author.url}"`)
})