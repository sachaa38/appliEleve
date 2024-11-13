const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  start: { type: Date },
  end: { type: Date },
  completed: { type: Boolean, default: false },
})

const noteSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  text: { type: String },
  date: { type: Date },
})

const eleveSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  remainingClasses: { type: Number, required: true },
  completedClasses: { type: Number, default: 0 },
  canceledClasses: { type: Number, default: 0 },
  scheduledClasses: { type: Number, default: 0 },
  plannedCourses: [courseSchema],
  note: [noteSchema],
})

eleveSchema.virtual('totalClasses').get(function () {
  return this.remainingClasses + this.scheduledClasses
})

eleveSchema.set('toJSON', { virtuals: true })
eleveSchema.set('toObject', { virtuals: true })

module.exports = mongoose.model('Eleve', eleveSchema)
