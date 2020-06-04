# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Asana.destroy_all
Category.destroy_all
Sequence.destroy_all
Asanacategory.destroy_all
Asanasequence.destroy_all


User1 = User.create({username: 'Allan',email: 'allan@gmail.com',password: '%$yuijc'})
User2 = User.create({username: 'Lucy',email: 'lucy@gmail.com',password: '##@@lccgyy'})
User3 = User.create({username: 'testuser',email: 'testuser@gmail.com', password: 'testuser'})
User4 = User.create({username: 'usertodelete',email:'usertodelete@gmail.com',password: 'usertodelete'})
User5 = User.create({username: 'usertochange',email:'usertochange@gmail.com',password: 'usertochange'})

                    
asanasarray = [
  ['Warrior1','Virabhadrasana A','yoga-30',1,'Take a wide stance and reach fingertips to the sky'],
  ['Warrior2','Virabhadrasana B','yoga-11',1,'Take a wide stance and reach for the front and back of room'],
  ['Warrior3','Virabhadrasana C','yoga-17',1, 'Balance on standing leg, left back leg and reach for the front of the room'],
  ['Pigeon','Kapotasana','yoga-59',1,'lay your back leg along the mat behind you and open hips to the front of the room'],
  ['Forward Bend','Uttanasana','yoga-18',1,'Bend forward while keeping spine straight and let stomach meet the thighs'],
  ['Mountain','Tadasana','yoga',1,'stack the body in a straight line from feet to hips to shoulders'],
  ['Half Way Bend', 'Ardha Uttanasana','yoga-64',2,'bend halfway forward with straight spine while looking forward'],
  ['Chair','Utkatasana','yoga-1',1,'sink hips to the floor. reach hands and gaze to the sky while balancing on heels'],
  ['Downward Dog','Adho Mukha Svanasana','yoga-61',3,'lift sit bones to the sky while balancing on palms and feet'],
  ['Upward Dog','Urdhva Mukha Shavanasana','yoga-35',1,'sink hips to the mat while bending backwards and opening chest'],
  ['High Lunge','Ashta Chandrasana','yoga-30',2,'lift back keee and straighten back leg. lift fingers and gaze to the sky'],
  ['Low Lunge','Anjaneyasana', 'yoga-27',2,'let back knee drop to the mat. lift fingers and gaze to the sky.'],
  ['Wide Stance Fold','Prasarita Padottanasana','yoga-24',3,'spread apart feet to front and back of the mat. fold forward'],
  ['Cobra','Bhujangasana','yoga-31',1,'sink hips to the mat while bending backwards and opening chest'],
  ['Triangle','Utthita Trikonasana','yoga-14',2,'keep body in a straight plane parallel to the side wall.'],
  ['Revolved Triangle','Parivrtta Trikonasana','yoga-14',2,'rotate body and reach upper arm and gaze to the sky'],
  ['Childs Pose','Balasana','yoga-50',3,'widen hips reaching arms to the front of the mat. Let chest and head drop'],
  ['Pyramid Pose','Parsvottanasana','yoga-23',1,'make short but wide stance. Fold over front leg. Let chest drop to the knees.'],
  ['Sun Salutations A', 'Surya Namaskara A','yoga-2',3,'move through sun salutations poses'],
  ['Classical Sun Salutations','Surya Namaskara Classic','yoga-2',3,'move through classical sun salutations poses'],
  ['Sun Salutations B', 'Surya Namaskara B','yoga-2',3,'move through sun salutations B poses'],
  ['Moon Salutations','Chandra Namaskara','yoga-2',3,'move through moon salutations poses'],
  ['Staff','Dandasana','yoga-52',1,'keep legs glued to the mat. stack shoulders above hips.'],
  ['Happy Baby','Ananda Balasana','yoga-88',2,'lay on back lift soles of feet to the sky. rock back and forth.'],
  ['Plough','Halasana','yoga-90',1,'let legs fall to the mat behind you. stack hips above shoulders.tuck chin into chest'],
  ['Shoulder Stand', 'Salamba Sarvagasana','yoga-80',3,'lift feet to the sky. stack ankles above hips above shoulders.'],
  ['Headstand','Salamba Shirshasana','yoga-70',3,'stack feet above hips above shoulders.balance weight on crown of head'],
  ['Ear to Knee','Karnapidasana','yoga-89',2,'from plough pose let knees drop down. squeeze knees into ears'],
  ['Corpse','Savasana','yoga-41',4,'lay down on back. completely releax the body. release any tension in body and mind'],
  ['Crossed Legged Seat','Bharadvajrasana','yoga-10',4,'sit comfortably. cross legs over each other. stack shoulders above hips'],
  ['Extended Side Angle','Utthita Parsvakonasana','yoga-12',2,'keep knee stacked above ankle. stretch side of body from back soles to head'],
  ['Revolved Side Angle','Parivrtta Parsvakonasana','yoga-12',2,'From extended side angle twist body and open chest to the side of the room'],
  ['Half Moon', 'Ardha Chandrasana','yoga-15',2,'balance weight of body on back foot and front hand. lift upper arm and gaze to the sky.'],
  ['Cat','Marjaryasana','yoga-55',2,'arch back to the sky. lower gaze. press palms into mat.'],
  ['Cow','Bitilasana','yoga-56',2,'let belly drop to the mat. arch back. lift gaze. press palms into mat.'],
  ['Table','Bharmanasana','yoga-54',2,'keep hands stacked below shoulders and knees below hips. keep level spine.'],
  ['Eagle','Garudasana','yoga-72',3,'sink hips to mat. stay balanced. wrap foot behind other calf. wrap lower arm unders higher arm.'],
  ['Tree','Vrksasana','yoga-4',2,'stay balanced on standing leg. stack hip above ankle above foot. stay focused on dristi'],
  ['Side Plank', 'Vasisthasana','yoga-21',1,'stay balanced on palm and feet. avoid sagging hips. keep head hips and feet in straight line'],
  ['Wheel', 'Urdhva Dhanurasana','yoga-73',1,'lift hips torwards the sky. feel stretch along front of the body. stay balanced on feet and hands'],
  ['Bridge', 'Setu Bandha Sarvangasana','yoga-36',1,'lift hips torwards the sky. feel stretch along front of body. balance on shoulders and feet.'],
  ['Upward Facing Plank','Pursvottanasana','yoga-77',1,'balance on the palms and feet. lift hips from floor. keep spine straight. let head drop if needed'],
  ['Plank','Pursvottanasana','yoga-32',1,'press up through palms. activate core. drop knees if needed. keep body level from feet to crown of head.'],
  ['West Stretching','Paschimottanasana','yoga-53',1,'keep spine straight as you fold. let stomach drop to thighs and chest drop to knees.'],
  ['Sage Marichi Pose A','Marichyasana A','yoga-95',2,'Fold forward. keep front leg glued to the mat. wrap arm around folded leg and meet other palm.'],
  ['Sage Marichi C','Marichyasana C','yoga-95',2,'twist body to the side of the room. activate pelvic floor.'],
  ['Boat','Navasana','yoga-85',2,'use sitting bones as a fulcrum to balance body. keep chest open and spine straight. bend knees if needed.'],
  ['Lotus', 'Padmasana','yoga-10',3,'cross legs with right foot and left thigh and left foot and right thigh. straighten spine upright.'],
  ['Cat/Dog Tilts', 'Bidalasana','yoga-54',2,'on inhale drop belly and lift gaze to cow. On exhale arch back to ceiling press up to cat.'],
  ['Wide Leg Forward Fold w/Twists','Parivrtta Ardha Padottanasana','yoga-24','2','spread feet apart. Fold forward. lay palm on mat and twist to side of room. repeat other side']
]

asanacategories = [
  ['seated',[3,16,22,28,29,43,44,45,46,47,48]],
  ['standing',[0,1,2,4,5,6,7,10,11,12,14,17,30,31,32,36,37,49]],
  ['restorative',[16,23,28]],
  ['hip opener',[0,1,3,29,30]],
  ['prone',[9,13]],
  ['beginner',[0,1,4,5,6,8,9,11,13,16,22,23,28,29,33,34,35,41,42,43,44,49]],
  ['intermediate',[2,3,7,10,12,14,17,24,25,26,30,31,36,37,38,40,47,49] ],
  ['advanced',[27,32,39,45,46,48]],
  ['forward bend',[4,6,8,12,16,17,24,34,41,44,45,46,49]],
  ['backward bend',[9,10,13,33,39,40,42,49]],
  ['twist',[15,31,36,37,45]],
  ['balance',[2,5,7,10,11,15,30,31,32,36,37,38,46]],
  ['inversions',[5,8,13,14,15,17,24,25,26,32,39,40]],
  ['salutations',[18,19,20,21]]
]

asanas = asanasarray.map.with_index do |asanadata,index|
  Asana.create({sanskritname: asanadata[1],englishname: asanadata[0],picurl: asanadata[2],duration: asanadata[3],cues: asanadata[4]})
end

categories = asanacategories.map do |cat| 
  catasanas = cat[1].map { |num| asanas[num] }
  Category.createcategory(name: cat[0], asanarray: catasanas)
 end


VinyassaA = [33,34,35,8,5,37,37,37,36,36,36,38,38,38,39,39,39,0,1,2,45,46,28].map { |num| asanas[num] }
VinyassaB = [33,34,35,8,5,37,37,37,36,36,36,38,38,38,39,39,39,0,1,2,45,46,28,48].map { |num| asanas[num] }

User1.create_sequence(name: 'VinyassaA', sequence_array: VinyassaA)
User1.create_sequence(name: 'VinyassaB', sequence_array: VinyassaB)
User2.create_sequence(name: 'VinyassaA', sequence_array: VinyassaA)
User2.create_sequence(name: 'VinyassaB', sequence_array: VinyassaB)
User3.create_sequence(name: 'VinyassaA', sequence_array: VinyassaA)
User3.create_sequence(name: 'VinyassaB', sequence_array: VinyassaB)
User4.create_sequence(name: 'VinyassaA', sequence_array: VinyassaA)
User4.create_sequence(name: 'VinyassaB', sequence_array: VinyassaB)
User5.create_sequence(name: 'VinyassaA', sequence_array: VinyassaA)
User5.create_sequence(name: 'VinyassaB', sequence_array: VinyassaB)



