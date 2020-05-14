# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Asana.detroy_all

User.create({username: 'Allan',email: 'allan@gmail.com',password: '%$yuijc'})
User.create({username: 'Lucy',email: 'lucy@gmail.com',password: '##@@lccgyy'})
englishasanas = ['Warrior1','Warrior2','Warrior3','Pigeon','Forward Bend',
                 'Mountain','Half Way Bend','Chair','Downward Dog','Upward Dog',
                 'High Lunge','Low Lunge','Wide Stance Fold','Cobra','Triangle',
                  'Revolved Triangle','Childs Pose','Pyramid Pose','Sun Salutations A',
                   'Classical Sun Salutations','Sun Salutations B','Moon Salutations',
                   'Staff','Happy Babby','Plough','Shoulder Stand','HeadStand','Ear to Knee',
                   'Corpse','Crossed Legged Seat','Extended Side Angle','Revolved Extended Side Angle',
                   'Half Moon','Cat','Cow','Table']
sanskritasanas = ['Virabhadrasana A','Virabhadrasana B','Virabhadrasana C',]
yogapics = []
asanacategories=['seated','standing','restorative','prone','Beginnier','Intermediate','Advanced']
