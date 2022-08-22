// This fiile will collect data about the user and use later on in the app
// Data provided here are dummy data and will change for each user
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const UserInfo = {
  name: "Koms sparrow",
  slang: "@koms_gh",
  task: "admin",
  teams: 2000,
  tokens: 9,
  avatarImage:
    "https://cdnb.artstation.com/p/assets/images/images/034/457/389/large/shin-min-jeong-.jpg?1612345145",
};

const Teams = [
  {
    id: 1,
    name: "Slabs Data Center",
    category: "jazz",
    admin: "Me",
    dateJoined: "06/01/2019",
    members: ["Tesla", "joe", "Dnabrea"],
    data:{
      features:['name', 'age', 'school'],
      content:[['kwame', 23, 'UG'],["Aseda light", 9, 'sl preparatory'],['jams kus', 19,'yale']]
    }
  },
  {
    id: 2,
    name: "Code reapers",
    category: "science",
    admin: "Kwasi",
    dateJoined: "06/01/2019",
    members: ["Tesla", "joe", "Dnabrea"],
    data:{
      features:['name', 'age', 'school'],
      content:[['kwame', 23, 'UG'],["Aseda light", 9, 'sl preparatory'],['jams kus', 19,'yale']]
    }
  },
  {
    id: 3,
    name: "Twi teachers",
    admin: "Light",
    dateJoined: "06/01/2019",
    category: "health",
    members: ["Tesla", "joe", "Dnabrea"],
    data:{
      features:['name', 'age', 'school'],
      content:[['kwame', 23, 'UG'],["Aseda light", 9, 'sl preparatory'],['jams kus', 19,'yale']]
    }
  },
  {
    id: 4,
    name: "Math teachers",
    category: "jazz",
    admin: "Light",
    dateJoined: "06/01/2019",
    members: ["Tesla", "joe", "Dnabrea", "Donewell"],
    data:{
      features:['name', 'age', 'school'],
      content:[['kwame', 23, 'UG'],["Aseda light", 9, 'sl preparatory'],['jams kus', 19,'yale']]
    }
  },
  {
    id: 5,
    name: "Math teachers",
    category: "health",
    admin: "Light",
    dateJoined: "06/01/2019",
    members: ["Tesla", "joe", "Dnabrea", "Donewell"],
    data:{
      features:['name', 'age', 'school'],
      content:[['kwame', 23, 'UG'],["Aseda light", 9, 'sl preparatory'],['jams kus', 19,'yale']]
    }
  },
  {
    id: 6,
    category: "jazz",
    name: "Math teachers",
    admin: "Light",
    dateJoined: "06/01/2019",
    members: ["Tesla", "joe", "Dnabrea", "Donewell"],
    data:{
      features:['name', 'age', 'school'],
      content:[['kwame', 23, 'UG'],["Aseda light", 9, 'sl preparatory'],['jams kus', 19,'yale']]
    }
  },
  {
    id: 7,
    category: "health",
    name: "Math teachers",
    admin: "Light",
    dateJoined: "06/01/2019",
    members: ["Tesla", "joe", "Dnabrea", "Donewell"],
    data:{
      features:['name', 'age', 'school'],
      content:[['kwame', 23, 'UG'],["Aseda light", 9, 'sl preparatory'],['jams kus', 19,'yale']]
    }
  },
];

export { UserInfo, Teams };
