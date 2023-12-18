_Question 1_

From: marissa@startup.com  
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,  
Marissa

# Response to Question 1

Subject: Re: Bad design

Hi Marissa,

Thank you for taking the time to share your feedback with us. We truly appreciate your honesty, and I apologize for any inconvenience you've experienced with the new dashboard design. Your input is invaluable as we continuously strive to enhance our user experience.

The Algolia service is quite powerful and continuously evolving so the Product team has to balance how to surface the right level of information. I would love to hear more about your current needs in case we can propose a change to the team.

If you are comfortable with our API you can use some methods like index.delete() to perform frequent deletions as well.

Perhaps we can cover this challenge in our next call to explore how you are using the dashboard and if using the API is an option.

Thank you for your understanding, and we appreciate your continued support as we work to make Algolia even better.

Best regards,

Jorge Verdera Customer Solutions Engineer Algolia

--

_Question 2_:

From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

# Response to Question 2

Subject: Re: URGENT ISSUE WITH PRODUCTION!!!!

Hi Carrie,

I hope this email finds you well, although I understand the urgency of the situation you're currently facing. I sincerely apologize for the inconvenience this issue has caused for your users.

In order to provide the best performance, Algolia limits the size of individual records. You could explore a tier with a bigger maximum record size or reduce the size of the records since you mentioned not all metadata is needed for search.

This article may give you some ideas on how to reduce the record size: https://support.algolia.com/hc/en-us/articles/4406981897617-Is-there-a-size-limit-for-my-index-records-

Please let me know if you run into any issues or you need help while simplifying your record structure or splitting the records into smaller chunks.

Best regards,

Jorge Verdera Customer Solutions Engineer Algolia

--

_Question 3_:

From: marc@hotmail.com  
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

# Response to Question 3

Subject: Re: Error on website

Hi Marc,

Based on the error message, you may be having an issue importing searchkit.

Can you double check that the library is properly imported in your project? I would need to know more about your environment, but for example in React you import libraries using this format: `import Searchkit from "searchkit";`

You could also check the order in which your scripts are loaded, init methods, or updating/downgrading the SearchKit version.

This issue may be unrelated to Algolia and someone else in your team that uses a similar setup may be able to provide a more accurate troubleshooting process.

Please let me know if you are still struggling with this issue after trying the suggestions listed above.

Best regards,

Jorge Verdera Customer Solutions Engineer Algolia
