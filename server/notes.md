# Fleeting Notes

## Database

- User

  - username: String, required
  - email: String, required
  - hashed_password: String,
  - isTeacher: Boolean, default: false
  - bio: String,
  - salt: String
  - image: String,

- Course

  - name:String,
  - category: String
  - image: Buffer
  - description: String
  - teacher: User
  - lessons: Array:Lesson
    - Lesson:
      - title: String,
      - content: String,

- Enrollment
  - course: Course
  - student: User
  - lessonStatus: {Lesson, complete:Boolean}
  - completed: Date

---

## API

- user
  - [x] get /api/users
  - [x] post /api/users
  - [x] get /api/users/me (requireSignin, hasAuthorization)
  - [x] get /api/users/userID (requireSignin, hasAuthorization)
  - [] put /api/users/userID (requireSignin, hasAuthorization)
  - [] delete /api/users/userID (requireSignin, hasAuthorization)
  - [x] isTeacher
- auth
  - [] get /api/auth (requireSignin, hasAuthorization)
  - [x] post /api/auth
  - [x] requireSignin, hasAuthorization
- teacher
  - [] get /api/courses/by/userID (requireSignin, hasAuthorization, isTeacher)
  - [] post /api/courses/by/userID/ (requireSignin, hasAuthorization, isTeacher)
  - [] put /api/courses/by/userID (requireSignin, hasAuthorization, isTeacher)
  - [] delete /api/courses/by/userID (requireSignin, hasAuthorization, isTeacher)
  - [] TODO: get /api/courses/courseID/lesson (requireSignin, hasAuthorization, isTeacher)
  - [] post /api/courses/courseID/lesson (requireSignin, hasAuthorization, isTeacher)
  - [] TODO: put /api/courses/courseID/lesson (requireSignin, hasAuthorization, isTeacher)
  - [] TODO: delete /api/courses/courseID/lesson (requireSignin, hasAuthorization, isTeacher)
  - [] TODO: lessons (prev, next) /api/courses/courseID/lesson/:lessonNum
- student
  - [] get /api/enrollments/:courseId (requireSignin, hasAuthorization, isStudent)
  - [] post /api/enrollments/courseId (requireSignin, hasAuthorization, isStudent)
  - [] put /api/enrollments/:courseId (requireSignin, hasAuthorization, isStudent)
  - [] delete /api/enrollments/:courseId (requireSignin, hasAuthorization, isStudent)
- courses
  - [] get /api/courses/
- messaging system || comment || both
- videos
- storage

## Client

- [] Home
- [x] Register
- [x] Login

## Things to worry about

- [] What happens if the teacher get deleted, does his courses stay or get deleted
  - [] What if he comes back, how to link the course to his name and prevent if from being taken by someone else
- [] What if the user can have multiple logins with multiple roles
