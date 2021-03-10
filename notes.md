# Fleeting Notes

## API

- user
  - [x] post /api/register
  - [x] post /api/login
  - [x] get /api/user
  - [] put /api/user (update)
- teacher
  - [x] post /api/course/create
  - [] post /api/cousrse/update [teacher]
- course
  - [] GET /api/course
- student
  - [x] post /api/course/enroll
  - [] post /api/course/leave
  - [] GET /api/course/mycourses
  - [] post /api/cousrse/rate [student]
- messaging system || comment || both
- videos
- storage

## Edge cases

- [] What happens if the teacher get deleted, does his courses stay or get deleted
  - [] What if he comes back, how to link the course to his name and prevent if from being taken by someone else
- [] What if the user can have multiple logins with multiple roles
