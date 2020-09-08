const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity");

mongoose
  .connect('mongodb://localhost/celebrity', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const celebrities = [
 {
     name : "Angela Merkel",
     occupation: "Politican",
     catchPhrase: "Wir schaffen das",
 },
    {  name: "Kim Jong Un",
       occupation: "Politician",
       catchPhrase: "blabal",
},
   {  
       name: "Donald Trump",
       occupation: "Politican",
       catchPhrase: "its gonna be huge",
   },
  ]

  Celebrity.insertMany(celebrities)
  .then((data) => {
      console.log(`Success, Added ${data.length} celebrities to the database`)
      mongoose.connection.close()
  })
  .catch((err) => {
      console.log(err)
  })