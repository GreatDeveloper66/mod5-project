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

cues = [
	'Step foot to the rear of the mat. Stack front knee above the ankle. Sink hips downward until thigh is parallel to the mat.Open hips to
	the long end of the mat. Spread the palms apart with the arms parallel to the floor. Relax shoulders away from the ear. Keep back heel 
	glued to the mat. Gaze towards your front fingertips.',
	'Step foot to the rear of the mat. Stack front knee above the ankle. Sink hips downward until thigh is parallel to the mat.Open hips to
	the long end of the mat. Lift hands and gaze to the sky. Keep back heel glued to the mat. Gaze towards your front
	fingertips.',
	'Tilt you upper body forward while lifting the back leg. Balance the weight of your body on the standing leg. Keep your focus on your 
	dristi. Lift your arms and reach your fingertips to the front of the room. Keep your chest and back leg in line parallel to the the mat.
	Reach to the back of the room with your toes. Try to keep your standing leg extended but make a slight bend in the knee if needed.',
	'Square hips to the front of the mat. Balance your weight on both hips. lay belly over the thigh. lay back thigh and top of feet on mat. 
	reach back toes to the back of the mat. Reach front knee towards the front of the mat. Sink hips into the mat. Spike energy through the back leg.
	Feel the stretch in your inner thigh adductors. Activate the hamstrings. Feel the stretch in the abs and quadriceps.',
	'Exhale and bend forward. Activate the quadriceps. feel the stretch in your hamstrings and calves. Let the head hang low and loose. Bend the 
	the knees if need to ease tension in the hamstrings. Stomach to thigh chest to knees. Place your palms on the mat or grab your elbows below 
	the head. On the inhale stretch spine. On the exhale activate the pelvic floor and sink further down.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
	minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
	in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
	deserunt mollit anim id est laborum.'
	
]
                    
asanasarray = [
  ['Warrior1','Virabhadrasana A','yoga-30',1],
  ['Warrior2','Virabhadrasana B','yoga-11',1],
  ['Warrior3','Virabhadrasana C','yoga-17',1],
  ['Pigeon','Kapotasana','yoga-59',1],
  ['Forward Bend','Uttanasana','yoga-18',1],
  ['Mountain','Tadasana','yoga',1],
  ['Half Way Bend', 'Ardha Uttanasana','yoga-64',2],
  ['Chair','Utkatasana','yoga-1',1],
  ['Downward Dog','Adho Mukha Svanasana','yoga-61',3],
  ['Upward Dog','Urdhva Mukha Shavanasana','yoga-35',1],
  ['High Lunge','Ashta Chandrasana','yoga-30',2],
  ['Low Lunge','Anjaneyasana', 'yoga-27',2],
  ['Wide Stance Fold','Prasarita Padottanasana','yoga-24',3],
  ['Cobra','Bhujangasana','yoga-31',1],
  ['Triangle','Trikonasana','yoga-14',2],
  ['Revolved Triangle','Parivrtta Trikonasana','yoga-14',2],
  ['Childs Pose','Balasana','yoga-50',3],
  ['Pyramid Pose','Parsvottanasana','yoga-23',1],
  ['Sun Salutations A', 'Surya Namaskara A','yoga-2',3],
  ['Classical Sun Salutations','Surya Namaskara Classic','yoga-2',3],
  ['Sun Salutations B', 'Surya Namaskara B','yoga-2',3],
  ['Moon Salutations','Chandra Namaskara','yoga-2',3],
  ['Staff','Dandasana','yoga-52',1],
  ['Happy Baby','Ananda Balasana','yoga-88',2],
  ['Plough','Halasana','yoga-90',1],
  ['Shoulder Stand', 'Salamba Sarvagasana','yoga-80',3],
  ['Headstand','Salamba Shirshasana','yoga-70',3],
  ['Ear to Knee','Karnapidasana','yoga-89',2],
  ['Corpse','Savasana','yoga-41',4],
  ['Crossed Legged Seat','Bharadvajrasana','yoga-10',4],
  ['Extended Side Angle','Utthita Parsvakonasana','yoga-12',2],
  ['Revolved Side Angle','Parivrtta Parsvakonasana','yoga-12',2],
  ['Half Moon', 'Ardha Chandrasana','yoga-15',2],
  ['Cat','Marjaryasana','yoga-55',2],
  ['Cow','Bitilasana','yoga-56',2],
  ['Table','Bharmanasana','yoga-54',2],
  ['Eagle','Garudasana','yoga-72',3],
  ['Tree','Vrksasana','yoga-4',2],
  ['Side Plank', 'Vasisthasana','yoga-21',1],
  ['Wheel', 'Urdhva Dhanurasana','yoga-73',1],
  ['Bridge', 'Setu Bandha Sarvangasana','yoga-36',1],
  ['Wide Leg Forward End', 'Prasarita Padottanasana','yoga-24',1],
  ['Upward Facing Plank','Pursvottanasana','yoga-77',1],
  ['Plank','Pursvottanasana','yoga-32',1],
  ['West Stretching','Paschimottanasana','yoga-53',1],
  ['Sage Marichi Pose A','Marichyasana A','yoga-95',2],
  ['Sage Marichi C','Marichyasana C','yoga-95',2],
  ['Boat','Navasana','yoga-85',2],
  ['Lotus', 'Padmasana','yoga-10',3],
  ['Cat/Dog Tilts', 'Bidalasana','yoga-54',2]
]

asanacategories = [
  ['seated',[3,16,22,28,29,44,45,46,47,48]],
  ['standing',[0,1,2,4,5,6,7,10,11,12,14,17,30,31,32,36,37,41]],
  ['restorative',[16,23,28]],
  ['hip opener',[0,1,3,29,30]],
  ['prone',[9,13]],
  ['beginner',[0,1,4,5,6,8,9,11,13,16,22,23,28,29,33,34,35,41,42,43,44,49]],
  ['intermediate',[2,3,7,10,12,14,17,24,25,26,30,31,36,37,38,40,47] ],
  ['advanced',[27,32,39,45,46,48]],
  ['forward bend',[4,6,8,12,16,17,24,34,41,44,45,47,49]],
  ['backward bend',[9,10,13,33,39,40,42,49]],
  ['twist',[15,31,36,46]],
  ['balance',[2,5,7,10,11,15,30,31,32,36,37,38,47]],
  ['inversions',[5,8,13,14,15,17,24,25,26,32,39,40,41]],
  ['salutations',[18,19,20,21]]
]

asanas = asanasarray.map.with_index do |asanadata,index|
  Asana.create({sanskritname: asanadata[1],englishname: asanadata[0],picurl: asanadata[2],duration: asanadata[3],cues: cues[index]})
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



