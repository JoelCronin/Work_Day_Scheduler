# Work Day Scheduler

In this task I was asked by the client to create an interactive scheduler that could could be used to help them plan out the days events as they happen throughout the work day.

## Approach

The client specifically asked that each hour had its own timeblock and that these timeblocks would change colour based on whether it was in the past present or future. To achieve this I utilised 'Momentjs' to provide a time reference to compare against. I then used the .each() method to iterate through all the different timeblock containers and using the attr() method I compared their respective id's agaisnt the current hour and then ran this through an else if statement which assigned a different class to each container depending on whether it was in the past present or future. 

The client also wanted the ability to enter events into each timeblock and then save them so they persist even after a refresh. To achieve this I used local storage to store the event info alongside its relevant ID/ This was done using an event listener on the save buttons and the prev() method to capture the value in the save buttons preceding input element. The getItem would then retrieve this info on refreshing of the page.

As an extra, I added a set Interval on two functions so that the time in the header appears to count up every second and also so that the colours change automatically every hour without the need for a user refresh.

## Final Product

![Fullsize webpage](./Assets/images/final%20product.png)

## Link

To view the portfolio yourself please [click here](https://joelcronin.github.io/bookish-pancake/)




