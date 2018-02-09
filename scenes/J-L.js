const {set, flash} = require('../lib/setters')
    , {teal, lightTeal, red, brightRed} = require('../lib/colors')
    , {t1, t2, t3, t4, t5, t6, m1, m2, m3, m4, m5, all, mallets, towers} = require('../lib/props')
    , delay = require('../lib/delay')
;


const soloFlashSpeed = 225;



module.exports = {



  // ===============
  // letters J, K, L
  // ===============

  // m58 -> first hit, letter J
  'C6': [
    set(all, {delay: delay(90, 3), to: teal}),
    set(all, {delay: delay(90, 3.5), to: lightTeal}),
  ],

  // m59 -> second hit
  'C#6': [
    set(all, {delay: delay(90, 3.75), to: teal}),
    set(all, {delay: delay(90, 4.25), to: lightTeal}),
  ],

  // m60 -> third hit
  'D6': [
    set(all, {delay: delay(90, 3.75), to: teal}),
    set(all, {delay: delay(90, 4.25), to: lightTeal}),
  ],

  // m61 -> fourth hit
  'D#6': [
    set(all, {delay: delay(90, 4.5), to: teal}),
    set(all, {delay: delay(90, 5), to: lightTeal}),
  ],

  // m62 - > all hit
  'E6': [
    set(all, {delay: delay(90, 3.75), to: teal}),
  ],

  // m66b3, 2 before K - > letter K (William)
  'F6': [
    set([t1, t2, t3, t4, t5, t6, m1, m3, m4, m5], {delay: delay(90, 2), to: teal}),
    set([m2], {delay: delay(90, 2), to: red}),
  ],

  // jan
  'C7': [
    flash([m5], {delay: soloFlashSpeed * 1, from: [brightRed, teal, teal, teal], duration: 100, to: [red, brightRed, teal, teal], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 2, from: [red, red, brightRed, teal],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 3, to: red}),
    flash([m2], {delay: soloFlashSpeed * 3, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 4, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 5, to: red}),
  ],

  // sarah
  'C#7': [
    flash([m4], {delay: soloFlashSpeed * 1, from: [brightRed, teal, teal, teal], duration: 100, to: [red, brightRed, teal, teal], resend: false}),
    flash([m4], {delay: soloFlashSpeed * 2, from: [red, red, brightRed, teal],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m4],   {delay: soloFlashSpeed * 3, to: red}),
    flash([m5], {delay: soloFlashSpeed * 3, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 4, from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 5, to: red}),
    flash([m2], {delay: soloFlashSpeed * 5, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 6, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 7, to: red}),
  ],

  // jake
  'D7': [
    flash([m1], {delay: soloFlashSpeed * 1,  from: [brightRed, teal, teal, teal], duration: 100, to: [red, brightRed, teal, teal], resend: false}),
    flash([m1], {delay: soloFlashSpeed * 2,  from: [red, red, brightRed, teal],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m1],   {delay: soloFlashSpeed * 3,  to: red}),
    flash([m4], {delay: soloFlashSpeed * 3,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m4], {delay: soloFlashSpeed * 4,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m4],   {delay: soloFlashSpeed * 5,  to: red}),
    flash([m5], {delay: soloFlashSpeed * 5,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 6,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 7,  to: red}),
    flash([m2], {delay: soloFlashSpeed * 7, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 8, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 9, to: red}),
  ],

  // paul
  'D#7': [
    flash([m1], {delay: soloFlashSpeed * 1,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m1], {delay: soloFlashSpeed * 2,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m1],   {delay: soloFlashSpeed * 3,  to: red}),
    flash([m3], {delay: soloFlashSpeed * 3,  from: [brightRed, teal, teal, teal], duration: 100, to: [red, brightRed, teal, teal], resend: false}),
    flash([m3], {delay: soloFlashSpeed * 4,  from: [red, red, brightRed, teal],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m3],   {delay: soloFlashSpeed * 5,  to: red}),
    flash([m4], {delay: soloFlashSpeed * 5,  from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m4], {delay: soloFlashSpeed * 6,  from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m4],   {delay: soloFlashSpeed * 7,  to: red}),
    flash([m5], {delay: soloFlashSpeed * 7, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m5], {delay: soloFlashSpeed * 8, from: [red, red, brightRed, red],   duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m5],   {delay: soloFlashSpeed * 9, to: red}),
    flash([m2], {delay: soloFlashSpeed * 9, from: [brightRed, red, red, red], duration: 100, to: [red, brightRed, red, red], resend: false}),
    flash([m2], {delay: soloFlashSpeed * 10, from: [red, red, brightRed, red], duration: 100, to: [red, red, red, brightRed], resend: false}),
    set([m2],   {delay: soloFlashSpeed * 11, to: red}),
  ],

  // all
  'E7': [
    set([t4, t3, t5, t2, t6, t1], {to: red}),
  ],



}
