let academyMembers = [
    {
      memID: 101,
      name: "Bob Brown",
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
      memID: 142,
      name: "Sallie Smith",
      films: ["A Good Day", "A Better Day"]
    },
    {
      memID: 187,
      name: "Fred Flanders",
      films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
      memID: 203,
      name: "Bobbie Boots",
      films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
  ];

  let memberID187 = academyMembers.find(member => member.memID === 187);
  console.log('Member with ID 187:');
  console.table([memberID187]);

  let membersin3Films = academyMembers.filter(member => member.films.length >= 3);
  console.log('Members in at least 3 films:');
  console.table(membersin3Films);

  let bobMembers = academyMembers.filter(member => member.name.includes('Bob') === 0);
  console.log('Members with name starting with "Bob":');
console.table(bobMembers);
