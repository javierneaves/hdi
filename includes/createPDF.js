import { jsPDF } from './jsPDFx.js'

genPDF()

function genPDF() {
  var doc = new jsPDF() 
  doc.text(20,20,'ejemepls de epdf')
  doc.save('docepdf.pdf')
}