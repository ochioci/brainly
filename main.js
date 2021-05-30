const { BrainlyAPI, Server } = require('brainly-api');
console.log('init!!')

BrainlyAPI.startWorker({ experimental: true, server: Server.PH }, async brainly => {
  // find question
    test(await brainly.findQuestion('An online company lets you download songs for $0.99 each after you have paid a $5 membership fee. Which domain would be most appropriate to calculate the cost to download songs?'))
});

function test (questions) {
    console.log(Object.keys(questions))
    let questionDetails = questions._questionDetails
    for (let i = 0; i < questionDetails.length; i++) {
        console.log(questionDetails[i])
    }
}