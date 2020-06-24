use bookings;
db.dropDatabase();

db.guests.insertMany([
  {
  name: "Tino Ritchie",
  email: "tino@tino.com",
  booked: false
},
{
  name: 'Ash Oldham',
  email: "ash@ash.com",
  booked: true
},
{
  name: "Dave McShades",
  email: "dave@dave.com",
  booked: true
}
]);
