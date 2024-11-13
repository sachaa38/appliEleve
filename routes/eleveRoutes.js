const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const eleveCtrl = require('../controllers/eleve')

router.get('/', auth, eleveCtrl.getAllEleve)
router.get('/:id', auth, eleveCtrl.getOneEleve)
router.post('/', auth, eleveCtrl.createEleve)
router.put('/:id', auth, eleveCtrl.modifyEleve)
router.delete('/:id', auth, eleveCtrl.deleteEleve)

router.post('/:id/courses', auth, eleveCtrl.addCourse)
router.get('/:id/courses', auth, eleveCtrl.getCourses)
router.put('/:id/courses/:courseId', auth, eleveCtrl.updateCourse)
router.delete('/:id/courses/:courseId', auth, eleveCtrl.deleteCourse)
router.delete(
  '/:id/courses/:courseId?action=cancel',
  auth,
  eleveCtrl.deleteCourse
)

router.post('/:id/note', auth, eleveCtrl.addNote)
router.get('/:id/note', auth, eleveCtrl.getNote)
router.delete('/:id/note/:noteId', auth, eleveCtrl.deleteNote)

module.exports = router
