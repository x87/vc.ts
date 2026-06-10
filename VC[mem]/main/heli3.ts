// Generated from main/heli3.sc

import { $ } from "../vars.mts";

// *******************************************************************************************
// ************************************* heli 3 **********************************************
// *******************************************************************************************
// *******************************************************************************************
// *** Simple Check Point Race in a Chopper												   ***
// *******************************************************************************************

async function body() {


  ONMISSION = 1;


  $.heli_cpcounter = 0;


  // SCRIPT_NAME heli3sc


  await asyncWait(0);


  if ($.done_heli3_progress == 0) {
    Stat.RegisterMissionGiven();
  }
  //NORTH BEACH

  //379.8450//CARGEN
  //332.9194//CARGEN
  //11.5155 //CARGEN


  $.cp1_x = 418.8720;
  $.cp1_y = 424.2120;
  $.cp1_z = 23.9390;


  $.cp2_x = 468.2843;
  $.cp2_y = 511.3465;
  $.cp2_z = 17.8339;


  $.cp3_x = 388.0189;
  $.cp3_y = 570.6234;
  $.cp3_z = 24.7767;


  $.cp4_x = 402.4129;
  $.cp4_y = 669.7875;
  $.cp4_z = 19.5342;


  $.cp5_x = 414.7332;
  $.cp5_y = 768.9945;
  $.cp5_z = 26.2997;


  $.cp6_x = 404.7260;
  $.cp6_y = 868.2524;
  $.cp6_z = 36.0822;


  $.cp7_x = 431.2298;
  $.cp7_y = 964.5178;
  $.cp7_z = 25.8298;


  $.cp8_x = 530.7483;
  $.cp8_y = 954.3203;
  $.cp8_z = 19.5602;


  $.cp9_x = 560.0611;
  $.cp9_y = 858.4435;
  $.cp9_z = 22.8934;


  $.cp10_x = 535.6741;
  $.cp10_y = 761.8905;
  $.cp10_z = 34.4453;


  $.cp11_x = 436.7039;
  $.cp11_y = 759.5037;
  $.cp11_z = 20.3001;


  $.cp12_x = 416.7489;
  $.cp12_y = 661.6190;
  $.cp12_z = 14.1113;


  $.cp13_x = 365.7069;
  $.cp13_y = 575.3921;
  $.cp13_z = 13.7494;


  $.cp14_x = 368.4762;
  $.cp14_y = 474.9647;
  $.cp14_z = 21.6989;


  $.cp15_x = 325.9177;
  $.cp15_y = 384.3626;
  $.cp15_z = 16.9171;


  $.cp16_x = 362.0646;
  $.cp16_y = 291.0115;
  $.cp16_z = 22.9123;


  $.cp17_x = 299.0425;
  $.cp17_y = 366.1650;
  $.cp17_z = 44.0408;


  await get_next_heli3_checkpoint();  // SCM GOSUB get_next_heli3_checkpoint


  Text.PrintNow("HELI_1A", 15000, 1); //"Test your skills with the Sparrow, see how quickly you can complete the course."


  $.heli_blip = Blip.AddForCoord($.heli_cp_x, $.heli_cp_y, $.heli_cp_z);
  $.heli_blip.changeColor(5 /* PURPLE */);
  $.heli_blip.changeDisplay(2 /* BLIP_ONLY */);
  $.heli_blip.changeScale(3);
  $.heli_2nd_blip = Blip.AddForCoord($.heli_cp_2nd_x, $.heli_cp_2nd_y, $.heli_cp_2nd_z);
  $.heli_2nd_blip.changeColor(5 /* PURPLE */);
  $.heli_2nd_blip.changeDisplay(2 /* BLIP_ONLY */);
  $.heli_2nd_blip.changeScale(2);
  $.heli_2nd_blip.dim(true /* TRUE */);


  $.heli_timer = 0;


  Hud.DisplayTimerWithString($.$id.heli_timer, TIMER_UP, "RACES");


  if ($.player1.isInAnyCar()) {
    $.heli = $.player1.storeCarIsIn();
  }
  else {
    // SCM GOTO → mission_heli3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_heli3_failed"); // fallback: would break linear control flow
  }


  while (!($.heli_cpcounter == 17)) {
    await asyncWait(0);
    if (Car.IsDead($.heli)) {
      // SCM GOTO → mission_heli3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_heli3_failed"); // fallback: would break linear control flow
    }
    if (!($.player1.isInCar($.heli))) {
      // SCM GOTO → mission_heli3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_heli3_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateInCar3D($.heli_cp_x, $.heli_cp_y, $.heli_cp_z, 5.0, 5.0, 5.0, false)) {
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      ++$.heli_cpcounter;
      $.heli_blip.remove();
      $.heli_2nd_blip.remove();
      await get_next_heli3_checkpoint();  // SCM GOSUB get_next_heli3_checkpoint
      $.heli_blip = Blip.AddForCoord($.heli_cp_x, $.heli_cp_y, $.heli_cp_z);
      $.heli_blip.changeColor(5 /* PURPLE */);
      $.heli_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.heli_blip.changeScale(3);
      if ($.heli_cpcounter < 16) {
        $.heli_2nd_blip = Blip.AddForCoord($.heli_cp_2nd_x, $.heli_cp_2nd_y, $.heli_cp_2nd_z);
        $.heli_2nd_blip.changeDisplay(2 /* BLIP_ONLY */);
        $.heli_2nd_blip.changeScale(2);
        $.heli_2nd_blip.dim(true /* TRUE */);
        if ($.heli_cpcounter < 15) {
          $.heli_2nd_blip.changeColor(5 /* PURPLE */);
        }
        else {
          $.heli_2nd_blip.changeColor(0 /* RED */);
        }
      }
      else {
        $.heli_blip.changeColor(0 /* RED */);
      }


    }
    if ($.heli_cpcounter == 16) {
      Fx.DrawWeaponshopCorona($.heli_cp_x, $.heli_cp_y, $.heli_cp_z, 4.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 200, 0, 0);
    }
    else {
      Fx.DrawWeaponshopCorona($.heli_cp_x, $.heli_cp_y, $.heli_cp_z, 4.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 200, 0, 200);
    }


  }


  // SCM GOTO → mission_heli3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_heli3_passed"); // fallback: would break linear control flow
}



// Mission heli3 failed


async function onFailed() {
  Text.PrintNow("HELI_F1", 5000, 1); //"HELI MISSION CANCELLED"
}




// mission heli3 passed


async function mission_heli3_passed() {


  Text.PrintWithNumberBig("HELI_1B", 100, 5000, 1); //"Course Complete!"
  $.player1.addScore(100);
  $.player1.clearWantedLevel();
  Audio.PlayMissionPassedTune(1);


  if ($.done_heli3_progress == 0) {
    Stat.PlayerMadeProgress(1);
    Stat.RegisterOddjobMissionPassed();
    $.done_heli3_progress = 1;
  }


  $.heli_timer = $.heli_timer / 1000;
  Stat.RegisterFastestTime(14, $.heli_timer);


  $.mins = $.heli_timer / 60;
  $.temp_int = $.mins * 60;
  $.seconds = $.heli_timer - $.temp_int;


  if ($.heli3_checkpoint_best_time > $.heli_timer) {
    $.heli3_checkpoint_best_time = $.heli_timer;
    if ($.seconds > 9) {
      Text.PrintWith2NumbersNow("RACES17", $.mins, $.seconds, 10000, 1); //"New best time: ~1~:~1~"
    }
    else {
      Text.PrintWith2NumbersNow("RACES20", $.mins, $.seconds, 10000, 1); //"New best time: ~1~:0~1~"
    }
  }
  else {
    if ($.seconds > 9) {
      Text.PrintWith2NumbersNow("RACES_9", $.mins, $.seconds, 10000, 1); //"Time: ~1~:~1~"
    }
    else {
      Text.PrintWith2NumbersNow("RACES21", $.mins, $.seconds, 10000, 1); //"Time: ~1~:0~1~"
    }
  }
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;


  $.timer_mobile_start = Clock.GetGameTimer();


  Hud.ClearTimer($.$id.heli_timer);
  $.heli_blip.remove();
  $.heli_2nd_blip.remove();


  Mission.Finish();
}




///////////////////////////////////////////////

async function get_next_heli3_checkpoint() {
  ///////////////////////////////////////////////


  if ($.heli_cpcounter == 0) {
    $.heli_cp_x = $.cp1_x;
    $.heli_cp_y = $.cp1_y;
    $.heli_cp_z = $.cp1_z;
    $.heli_cp_2nd_x = $.cp2_x;
    $.heli_cp_2nd_y = $.cp2_y;
    $.heli_cp_2nd_z = $.cp2_z;
  }


  if ($.heli_cpcounter == 1) {
    $.heli_cp_x = $.cp2_x;
    $.heli_cp_y = $.cp2_y;
    $.heli_cp_z = $.cp2_z;
    $.heli_cp_2nd_x = $.cp3_x;
    $.heli_cp_2nd_y = $.cp3_y;
    $.heli_cp_2nd_z = $.cp3_z;
  }


  if ($.heli_cpcounter == 2) {
    $.heli_cp_x = $.cp3_x;
    $.heli_cp_y = $.cp3_y;
    $.heli_cp_z = $.cp3_z;
    $.heli_cp_2nd_x = $.cp4_x;
    $.heli_cp_2nd_y = $.cp4_y;
    $.heli_cp_2nd_z = $.cp4_z;
  }


  if ($.heli_cpcounter == 3) {
    $.heli_cp_x = $.cp4_x;
    $.heli_cp_y = $.cp4_y;
    $.heli_cp_z = $.cp4_z;
    $.heli_cp_2nd_x = $.cp5_x;
    $.heli_cp_2nd_y = $.cp5_y;
    $.heli_cp_2nd_z = $.cp5_z;
  }


  if ($.heli_cpcounter == 4) {
    $.heli_cp_x = $.cp5_x;
    $.heli_cp_y = $.cp5_y;
    $.heli_cp_z = $.cp5_z;
    $.heli_cp_2nd_x = $.cp6_x;
    $.heli_cp_2nd_y = $.cp6_y;
    $.heli_cp_2nd_z = $.cp6_z;
  }


  if ($.heli_cpcounter == 5) {
    $.heli_cp_x = $.cp6_x;
    $.heli_cp_y = $.cp6_y;
    $.heli_cp_z = $.cp6_z;
    $.heli_cp_2nd_x = $.cp7_x;
    $.heli_cp_2nd_y = $.cp7_y;
    $.heli_cp_2nd_z = $.cp7_z;
  }


  if ($.heli_cpcounter == 6) {
    $.heli_cp_x = $.cp7_x;
    $.heli_cp_y = $.cp7_y;
    $.heli_cp_z = $.cp7_z;
    $.heli_cp_2nd_x = $.cp8_x;
    $.heli_cp_2nd_y = $.cp8_y;
    $.heli_cp_2nd_z = $.cp8_z;
  }


  if ($.heli_cpcounter == 7) {
    $.heli_cp_x = $.cp8_x;
    $.heli_cp_y = $.cp8_y;
    $.heli_cp_z = $.cp8_z;
    $.heli_cp_2nd_x = $.cp9_x;
    $.heli_cp_2nd_y = $.cp9_y;
    $.heli_cp_2nd_z = $.cp9_z;
  }


  if ($.heli_cpcounter == 8) {
    $.heli_cp_x = $.cp9_x;
    $.heli_cp_y = $.cp9_y;
    $.heli_cp_z = $.cp9_z;
    $.heli_cp_2nd_x = $.cp10_x;
    $.heli_cp_2nd_y = $.cp10_y;
    $.heli_cp_2nd_z = $.cp10_z;
  }


  if ($.heli_cpcounter == 9) {
    $.heli_cp_x = $.cp10_x;
    $.heli_cp_y = $.cp10_y;
    $.heli_cp_z = $.cp10_z;
    $.heli_cp_2nd_x = $.cp11_x;
    $.heli_cp_2nd_y = $.cp11_y;
    $.heli_cp_2nd_z = $.cp11_z;
  }


  if ($.heli_cpcounter == 10) {
    $.heli_cp_x = $.cp11_x;
    $.heli_cp_y = $.cp11_y;
    $.heli_cp_z = $.cp11_z;
    $.heli_cp_2nd_x = $.cp12_x;
    $.heli_cp_2nd_y = $.cp12_y;
    $.heli_cp_2nd_z = $.cp12_z;
  }


  if ($.heli_cpcounter == 11) {
    $.heli_cp_x = $.cp12_x;
    $.heli_cp_y = $.cp12_y;
    $.heli_cp_z = $.cp12_z;
    $.heli_cp_2nd_x = $.cp13_x;
    $.heli_cp_2nd_y = $.cp13_y;
    $.heli_cp_2nd_z = $.cp13_z;
  }


  if ($.heli_cpcounter == 12) {
    $.heli_cp_x = $.cp13_x;
    $.heli_cp_y = $.cp13_y;
    $.heli_cp_z = $.cp13_z;
    $.heli_cp_2nd_x = $.cp14_x;
    $.heli_cp_2nd_y = $.cp14_y;
    $.heli_cp_2nd_z = $.cp14_z;
  }


  if ($.heli_cpcounter == 13) {
    $.heli_cp_x = $.cp14_x;
    $.heli_cp_y = $.cp14_y;
    $.heli_cp_z = $.cp14_z;
    $.heli_cp_2nd_x = $.cp15_x;
    $.heli_cp_2nd_y = $.cp15_y;
    $.heli_cp_2nd_z = $.cp15_z;
  }


  if ($.heli_cpcounter == 14) {
    $.heli_cp_x = $.cp15_x;
    $.heli_cp_y = $.cp15_y;
    $.heli_cp_z = $.cp15_z;
    $.heli_cp_2nd_x = $.cp16_x;
    $.heli_cp_2nd_y = $.cp16_y;
    $.heli_cp_2nd_z = $.cp16_z;
  }


  if ($.heli_cpcounter == 15) {
    $.heli_cp_x = $.cp16_x;
    $.heli_cp_y = $.cp16_y;
    $.heli_cp_z = $.cp16_z;
    $.heli_cp_2nd_x = $.cp17_x;
    $.heli_cp_2nd_y = $.cp17_y;
    $.heli_cp_2nd_z = $.cp17_z;
  }


  if ($.heli_cpcounter == 16) {
    $.heli_cp_x = $.cp17_x;
    $.heli_cp_y = $.cp17_y;
    $.heli_cp_z = $.cp17_z;
    $.heli_cp_2nd_x = $.cp18_x;
    $.heli_cp_2nd_y = $.cp18_y;
    $.heli_cp_2nd_z = $.cp18_z;
  }


  if ($.heli_cpcounter == 17) {
    $.heli_cp_x = $.cp18_x;
    $.heli_cp_y = $.cp18_y;
    $.heli_cp_z = $.cp18_z;
    $.heli_cp_2nd_x = $.cp19_x;
    $.heli_cp_2nd_y = $.cp19_y;
    $.heli_cp_2nd_z = $.cp19_z;
  }


  if ($.heli_cpcounter == 18) {
    $.heli_cp_x = $.cp19_x;
    $.heli_cp_y = $.cp19_y;
    $.heli_cp_z = $.cp19_z;
    $.heli_cp_2nd_x = $.cp20_x;
    $.heli_cp_2nd_y = $.cp20_y;
    $.heli_cp_2nd_z = $.cp20_z;
  }


  if ($.heli_cpcounter == 19) {
    $.heli_cp_x = $.cp20_x;
    $.heli_cp_y = $.cp20_y;
    $.heli_cp_z = $.cp20_z;
    $.heli_cp_2nd_x = $.cp21_x;
    $.heli_cp_2nd_y = $.cp21_y;
    $.heli_cp_2nd_z = $.cp21_z;
  }


  if ($.heli_cpcounter == 20) {
    $.heli_cp_x = $.cp21_x;
    $.heli_cp_y = $.cp21_y;
    $.heli_cp_z = $.cp21_z;
    $.heli_cp_2nd_x = $.cp22_x;
    $.heli_cp_2nd_y = $.cp22_y;
    $.heli_cp_2nd_z = $.cp22_z;
  }


  if ($.heli_cpcounter == 21) {
    $.heli_cp_x = $.cp22_x;
    $.heli_cp_y = $.cp22_y;
    $.heli_cp_z = $.cp22_z;
    $.heli_cp_2nd_x = $.cp23_x;
    $.heli_cp_2nd_y = $.cp23_y;
    $.heli_cp_2nd_z = $.cp23_z;
  }


  if ($.heli_cpcounter == 22) {
    $.heli_cp_x = $.cp23_x;
    $.heli_cp_y = $.cp23_y;
    $.heli_cp_z = $.cp23_z;
    $.heli_cp_2nd_x = $.cp24_x;
    $.heli_cp_2nd_y = $.cp24_y;
    $.heli_cp_2nd_z = $.cp24_z;
  }


  if ($.heli_cpcounter == 23) {
    $.heli_cp_x = $.cp24_x;
    $.heli_cp_y = $.cp24_y;
    $.heli_cp_z = $.cp24_z;
    $.heli_cp_2nd_x = $.cp25_x;
    $.heli_cp_2nd_y = $.cp25_y;
    $.heli_cp_2nd_z = $.cp25_z;
  }


  if ($.heli_cpcounter == 24) {
    $.heli_cp_x = $.cp25_x;
    $.heli_cp_y = $.cp25_y;
    $.heli_cp_z = $.cp25_z;
    $.heli_cp_2nd_x = $.cp26_x;
    $.heli_cp_2nd_y = $.cp26_y;
    $.heli_cp_2nd_z = $.cp26_z;
  }


  if ($.heli_cpcounter == 25) {
    $.heli_cp_x = $.cp26_x;
    $.heli_cp_y = $.cp26_y;
    $.heli_cp_z = $.cp26_z;
    $.heli_cp_2nd_x = $.cp27_x;
    $.heli_cp_2nd_y = $.cp27_y;
    $.heli_cp_2nd_z = $.cp27_z;
  }


  if ($.heli_cpcounter == 26) {
    $.heli_cp_x = $.cp27_x;
    $.heli_cp_y = $.cp27_y;
    $.heli_cp_z = $.cp27_z;
    $.heli_cp_2nd_x = $.cp28_x;
    $.heli_cp_2nd_y = $.cp28_y;
    $.heli_cp_2nd_z = $.cp28_z;
  }


  if ($.heli_cpcounter == 27) {
    $.heli_cp_x = $.cp28_x;
    $.heli_cp_y = $.cp28_y;
    $.heli_cp_z = $.cp28_z;
    $.heli_cp_2nd_x = $.cp29_x;
    $.heli_cp_2nd_y = $.cp29_y;
    $.heli_cp_2nd_z = $.cp29_z;
  }


  if ($.heli_cpcounter == 28) {
    $.heli_cp_x = $.cp29_x;
    $.heli_cp_y = $.cp29_y;
    $.heli_cp_z = $.cp29_z;
    $.heli_cp_2nd_x = $.cp29_x;
    $.heli_cp_2nd_y = $.cp29_y;
    $.heli_cp_2nd_z = $.cp29_z;
  }
  ///////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////

}

export async function heli3() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_heli3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_heli3_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_heli3




  // Variables for mission

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE var_ints
  //VAR_INT heli heli_blip heli_2nd_blip heli_cpcounter heli_timer
  //VAR_FLOAT heli_cp_x heli_cp_y heli_cp_z heli_cp_2nd_x heli_cp_2nd_y heli_cp_2nd_z
  //VAR_INT mins seconds temp_int
  //VAR_FLOAT cp0_x cp0_y cp0_z
  //VAR_FLOAT cp1_x cp1_y cp1_z
  //VAR_FLOAT cp2_x cp2_y cp2_z
  //VAR_FLOAT cp3_x cp3_y cp3_z
  //VAR_FLOAT cp4_x cp4_y cp4_z
  //VAR_FLOAT cp5_x cp5_y cp5_z
  //VAR_FLOAT cp6_x cp6_y cp6_z
  //VAR_FLOAT cp7_x cp7_y cp7_z
  //VAR_FLOAT cp8_x cp8_y cp8_z
  //VAR_FLOAT cp9_x cp9_y cp9_z
  //VAR_FLOAT cp10_x cp10_y cp10_z
  //VAR_FLOAT cp11_x cp11_y cp11_z
  //VAR_FLOAT cp12_x cp12_y cp12_z
  //VAR_FLOAT cp13_x cp13_y cp13_z
  //VAR_FLOAT cp14_x cp14_y cp14_z
  //VAR_FLOAT cp15_x cp15_y cp15_z
  //VAR_FLOAT cp16_x cp16_y cp16_z
  //VAR_FLOAT cp17_x cp17_y cp17_z
  //VAR_FLOAT cp18_x cp18_y cp18_z
  //VAR_FLOAT cp19_x cp19_y cp19_z
  //VAR_FLOAT cp20_x cp20_y cp20_z
  //VAR_FLOAT cp21_x cp21_y cp21_z
  //VAR_FLOAT cp22_x cp22_y cp22_z
  //VAR_FLOAT cp23_x cp23_y cp23_z
  //VAR_FLOAT cp24_x cp24_y cp24_z
  //VAR_FLOAT cp25_x cp25_y cp25_z
  //VAR_FLOAT cp26_x cp26_y cp26_z
  //VAR_FLOAT cp27_x cp27_y cp27_z
  //VAR_FLOAT cp28_x cp28_y cp28_z
  //VAR_FLOAT cp29_x cp29_y cp29_z
  //VAR_FLOAT cp30_x cp30_y cp30_z
  //VAR_FLOAT cp31_x cp31_y cp31_z
  //VAR_FLOAT cp32_x cp32_y cp32_z

  // ***************************************Mission Start*************************************


}
