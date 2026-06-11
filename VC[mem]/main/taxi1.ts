// Generated from main/taxi1.sc

import { $ } from "../utils/vars.mts";

// *******************************************************************************************
// *******************************************************************************************
// *************************************CRRRRRAZY TAXI****************************************
// *******************************LETS MAKE SOME CRRRRRAZY MONEY!*****************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {


  // SCRIPT_NAME TAXI


  // SET_DEATHARREST_STATE(false /* OFF */);


  ONMISSION = 1;
  $.flag_player_on_oddjob = 1;
  $.taxi_countdown_already_started = 0;
  $.taxi_countdown = 0;
  $.taxi_passed_this_shot = 0;
  $.taxi_score = 0;
  $.taxi_ped1 = -1;
  $.spray_blip_onscreen = 0;
  $.taxi_fucked_flag = 0;
  $.in_a_row_number = 5;
  $.in_a_row_cash = 500;


  Text.LoadMissionText("TAXI1");


  await asyncWait(0);


  Hud.DisplayCounterWithString($.$id.taxi_passed_this_shot, 0 /* COUNTER_DISPLAY_NUMBER */, "FARES"); //TEST STUFF!!!!!!!!!!!!!


  if (!($.player1.isPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }


  if ($.player1.isInAnyCar()) {
    $.taxi_car1 = $.player1.storeCarIsIn();
  }
  else {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }


  $.taxi_car1.setTaxiLights(true /* On */);
  Text.PrintNow("TAXI1", 1500, 1); //Pick up a fare


  await asyncWait(0);
}



async function Start_taxi_mission() {
  //////////////////////////////////////////////////////////


  if ($.done_taxi_help == 0) {
    Text.PrintHelp("TAXIH1");
    $.done_taxi_help = 1;
  }


  $.score_for_this_fare = 0;


  if (!($.player1.isPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.taxi_car1)) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }


  if (!($.player1.isInCar($.taxi_car1))) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }



  //	random_ped_grabber:


  if (!($.controlmode == 3)) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION == 1) {
      // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
    }
  }
  else {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION == 1) {
      // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
    }
  }


  if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
    //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }



  $.taxi_ped1 = Zone.GetRandomChar("VICE_C", true /* TRUE */, true /* TRUE */, true /* TRUE */);



  if ($.taxi_ped1 == -1) {
    await asyncWait(0);
    // SCM GOTO → Start_taxi_mission (not lowered; manual jump required)
    throw new Error("unresolved GOTO Start_taxi_mission"); // fallback: would break linear control flow
  }

  // START OF TAXI MISSION


  $.taxi_ped1.setIdle();
  $.taxi_ped1.clearThreatSearch();
  $.taxi_ped1.setHeedThreats(false /* False */);
  $.blip1_ct1 = Blip.AddForChar($.taxi_ped1);
  $.taxi_ped1.setObjHailTaxi();
}



async function ped_get_in_taxi() {


  while (!($.player1.locateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, false /* FALSE */)) || !($.taxi_car1.isStopped())) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.taxi_car1)) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.taxi_ped1)) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.player1.isInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player1.locateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, false /* FALSE */))) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.taxi_car1.isHealthGreater(400) && $.spray_blip_onscreen == 1) {
      $.spray_taxi.remove();
      $.spray_blip_onscreen = 0;
      $.taxi_fucked_flag = 0;
    }
    if (!(Char.IsDead($.taxi_ped1))) {
      $.taxi_ped1.turnToFacePlayer($.player1);
    }


  }


  if (!($.taxi_car1.isHealthGreater(400))) {
    Text.PrintNow("TAXI7", 4000, 1); //I ain't getting in that heap of shit!!
    if ($.player1.isInZone("BEACH1") || $.player1.isInZone("BEACH2") || $.player1.isInZone("STARI")) {
      $.spray_taxi.remove();
      $.spray_taxi = Blip.AddSpriteForCoord(-3.8, -1265.8, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //South beach
    }
    if ($.player1.isInZone("BEACH3") || $.player1.isInZone("PORNI") || $.player1.isInZone("GOLFC")) {
      $.spray_taxi.remove();
      $.spray_taxi = Blip.AddSpriteForCoord(319.0, 441.3, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //Vice Point
    }
    if ($.player1.isInZone("DOCKS") || $.player1.isInZone("A_PORT")) {
      $.spray_taxi.remove();
      $.spray_taxi = Blip.AddSpriteForCoord(-903.0, -1261.1, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //Docks
    }
    if ($.player1.isInZone("HAITI") || $.player1.isInZone("HAVANA") || $.player1.isInZone("DTOWN") || $.player1.isInZone("JUNKY")) {
      $.spray_taxi.remove();
      $.spray_taxi = Blip.AddSpriteForCoord(-876.2, -105.5, 12.0, 27 /* RADAR_SPRITE_SPRAY */); //Main road haiti
    }
    if ($.spray_blip_onscreen == 0) {
      $.spray_blip_onscreen = 1;
      $.taxi_fucked_flag = 1;
    }
    // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
  }


  $.taxi_ped1.setRunning(true /* TRUE */);
  $.taxi_ped1.setObjEnterCarAsPassenger($.taxi_car1);



  while (!($.taxi_ped1.isInCar($.taxi_car1))) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.taxi_car1)) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.taxi_ped1)) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.player1.isInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player1.locateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, false /* FALSE */))) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
      //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.taxi_car1.isHealthGreater(400) && $.spray_blip_onscreen == 1) {
      $.spray_taxi.remove();
      $.spray_blip_onscreen = 0;
    }
    if (!($.player1.locateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, false /* FALSE */))) {
      // SCM GOTO → ped_get_in_taxi (not lowered; manual jump required)
      throw new Error("unresolved GOTO ped_get_in_taxi"); // fallback: would break linear control flow
    }


  }


  const _res495 = $.taxi_ped1.getCoordinates();
$.taxi_ped_x = _res495.x;
$.taxi_ped_y = _res495.y;
$.taxi_ped_z = _res495.z;


  $.blip1_ct1.remove();
  $.taxi_car1.setTaxiLights(false /* Off */);
}



async function passenger_destination() {


  await asyncWait(0);

  //DTOWN
  //A_PORT
  //JUNKY
  //DOCKS
  //HAVANA
  //HAITI


  if (!($.player1.isPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }


  $.been_in_taxi1_before = Math.RandomIntInRange(1, 16);


  if (!($.player1.isPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }


  if ($.player1.isInZone("DTOWN") || $.player1.isInZone("A_PORT") || $.player1.isInZone("JUNKY") || $.player1.isInZone("DOCKS") || $.player1.isInZone("HAVANA") || $.player1.isInZone("HAITI")) {
    if ($.been_in_taxi1_before == 1) {
      if ($.player1.isInZone("DTOWN")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("MFARE1", 5000, 1); //Take me to ammunation
      $.taxi_destx1 = -679.1;
      $.taxi_desty1 = 1193.5;
      $.taxi_destz1 = 9.4;
    }
    if ($.been_in_taxi1_before == 2) {
      if ($.player1.isInZone("A_PORT")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("MFARE2", 5000, 1); //Take me to the Airport
      $.taxi_destx1 = -1457.7;
      $.taxi_desty1 = -825.1;
      $.taxi_destz1 = 13.1;
    }
    if ($.been_in_taxi1_before == 3) {
      if ($.player1.isInZone("HAVANA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE3", 5000, 1); //Take me to the car show room
      $.taxi_destx1 = -1009.0;
      $.taxi_desty1 = -880.9;
      $.taxi_destz1 = 11.9;


    }
    if ($.been_in_taxi1_before == 4) {
      if ($.player1.isInZone("HAITI")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE4", 5000, 1); //Take me to the Kaufman cabs
      $.taxi_destx1 = -1018.4;
      $.taxi_desty1 = 195.9;
      $.taxi_destz1 = 10.1;


    }
    if ($.been_in_taxi1_before == 5) {
      if ($.player1.isInZone("HAVANA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE5", 5000, 1); //Take me to the harware store
      $.taxi_destx1 = -971.2;
      $.taxi_desty1 = -677.2;
      $.taxi_destz1 = 10.4;


    }
    if ($.been_in_taxi1_before == 6) {
      if ($.player1.isInZone("DTOWN")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE6", 5000, 1); //Take me to the bike shop
      $.taxi_destx1 = -600.6;
      $.taxi_desty1 = 667.3;
      $.taxi_destz1 = 9.9;


    }
    if ($.been_in_taxi1_before == 7) {
      if ($.player1.isInZone("HAVANA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE7", 5000, 1); //Take me to the Cop shop
      $.taxi_destx1 = -865.6;
      $.taxi_desty1 = -677.0;
      $.taxi_destz1 = 10.0;


    }
    if ($.been_in_taxi1_before == 8) {
      if ($.player1.isInZone("DTOWN")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE8", 5000, 1); //Take me to the Cop shop
      $.taxi_destx1 = -661.7;
      $.taxi_desty1 = 755.7;
      $.taxi_destz1 = 9.8;


    }
    if ($.been_in_taxi1_before == 9) {
      if ($.player1.isInZone("DTOWN")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE9", 5000, 1); //Take me to the Hospital
      $.taxi_destx1 = -800.4;
      $.taxi_desty1 = 1167.8;
      $.taxi_destz1 = 9.6;


    }
    if ($.been_in_taxi1_before == 10) {
      if ($.player1.isInZone("HAVANA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE10", 5000, 1); //Take me to the Hospital
      $.taxi_destx1 = -871.9;
      $.taxi_desty1 = -467.2;
      $.taxi_destz1 = 9.8;


    }
    if ($.been_in_taxi1_before == 11) {
      if ($.player1.isInZone("DTOWN")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE11", 5000, 1); //Take me to the Stadium
      $.taxi_destx1 = -1024.6;
      $.taxi_desty1 = 1332.8;
      $.taxi_destz1 = 7.4;


    }
    if ($.been_in_taxi1_before == 12) {
      if ($.player1.isInZone("HAITI")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE12", 5000, 1); //Take me to the pizza shop
      $.taxi_destx1 = -1064.6;
      $.taxi_desty1 = 84.0;
      $.taxi_destz1 = 10.2;
    }
    if ($.been_in_taxi1_before == 13) {
      if ($.player1.isInZone("DTOWN")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE13", 5000, 1); //Take me to the pizza shop
      $.taxi_destx1 = -878.6;
      $.taxi_desty1 = 795.7;
      $.taxi_destz1 = 10.0;
    }
    if ($.been_in_taxi1_before == 14) {
      if ($.player1.isInZone("DOCKS")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE14", 5000, 1); //Take me to the docks
      $.taxi_destx1 = -745.0;
      $.taxi_desty1 = -1264.0;
      $.taxi_destz1 = 10.1;
    }
    if ($.been_in_taxi1_before == 15) {
      if ($.player1.isInZone("HAITI")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("WFARE15", 5000, 1); //Take me to the chemist
      $.taxi_destx1 = -850.6;
      $.taxi_desty1 = -92.4;
      $.taxi_destz1 = 10.1;
    }


  }
  else {
    if ($.been_in_taxi1_before == 1) {
      if ($.player1.isInZone("BEACH1")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE1", 5000, 1); //Take me to the strip club
      $.taxi_destx1 = 100.7;
      $.taxi_desty1 = -1476.8;
      $.taxi_destz1 = 9.4;
    }
    if ($.been_in_taxi1_before == 2) {
      if ($.player1.isInZone("BEACH3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE2", 5000, 1); //Take me to The Malibu club
      $.taxi_destx1 = 505.8;
      $.taxi_desty1 = -93.9;
      $.taxi_destz1 = 9.4;
    }
    if ($.been_in_taxi1_before == 3) {
      if ($.player1.isInZone("BEACH1")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE3", 5000, 1); //Take me to the marina
      $.taxi_destx1 = -244.7;
      $.taxi_desty1 = -1301.8;
      $.taxi_destz1 = 6.9;
    }
    if ($.been_in_taxi1_before == 4) {
      if ($.player1.isInZone("BEACH1")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE4", 5000, 1); //Take me to AMMUNATION
      $.taxi_destx1 = -53.5;
      $.taxi_desty1 = -1481.7;
      $.taxi_destz1 = 8.1;
    }
    if ($.been_in_taxi1_before == 5) {
      if ($.player1.isInZone("BEACH2")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE5", 5000, 1); //Take me to the hardware store
      $.taxi_destx1 = 201.6;
      $.taxi_desty1 = -491.7;
      $.taxi_destz1 = 10.3;
    }
    if ($.been_in_taxi1_before == 6) {
      if ($.player1.isInZone("BEACH3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE6", 5000, 1); //Take me to the Mall
      $.taxi_destx1 = 483.3;
      $.taxi_desty1 = 1124.3;
      $.taxi_destz1 = 15.4;
    }
    if ($.been_in_taxi1_before == 7) {
      if ($.player1.isInZone("BEACH3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE7", 5000, 1); //Take me Jewllers
      $.taxi_destx1 = 394.8;
      $.taxi_desty1 = 203.8;
      $.taxi_destz1 = 9.9;
    }
    if ($.been_in_taxi1_before == 8) {
      if ($.player1.isInZone("BEACH1")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE8", 5000, 1); //Take me to the Beach
      $.taxi_destx1 = 482.3;
      $.taxi_desty1 = -1218.7;
      $.taxi_destz1 = 9.7;
    }
    if ($.been_in_taxi1_before == 9) {
      if ($.player1.isInZone("BEACH2")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE9", 5000, 1); //Take me to the Beach
      $.taxi_destx1 = 600.0;
      $.taxi_desty1 = -618.2;
      $.taxi_destz1 = 11.2;
    }
    if ($.been_in_taxi1_before == 10) {
      if ($.player1.isInZone("BEACH3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE10", 5000, 1); //Take me to the Beach
      $.taxi_destx1 = 736.2;
      $.taxi_desty1 = 493.1;
      $.taxi_destz1 = 10.9;
    }
    if ($.been_in_taxi1_before == 11) {
      if ($.player1.isInZone("BEACH1")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE11", 5000, 1); //Take me to the Hospital
      $.taxi_destx1 = -99.7;
      $.taxi_desty1 = -975.7;
      $.taxi_destz1 = 9.4;
    }
    if ($.been_in_taxi1_before == 12) {
      if ($.player1.isInZone("BEACH3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE12", 5000, 1); //Take me to the Hospital
      $.taxi_destx1 = 431.1;
      $.taxi_desty1 = 705.3;
      $.taxi_destz1 = 10.4;
    }
    if ($.been_in_taxi1_before == 13) {
      if ($.player1.isInZone("BEACH2")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE13", 5000, 1); //Take me to the Cop Shop
      $.taxi_destx1 = 403.9;
      $.taxi_desty1 = -467.5;
      $.taxi_destz1 = 9.1;
    }
    if ($.been_in_taxi1_before == 14) {
      if ($.player1.isInZone("BEACH3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE14", 5000, 1); //Take me to the Cop Shop
      $.taxi_destx1 = 520.7;
      $.taxi_desty1 = 507.5;
      $.taxi_destz1 = 10.1;
    }
    if ($.been_in_taxi1_before == 15) {
      if ($.player1.isInZone("BEACH3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE15", 5000, 1); //Take me to the Pizza shop
      $.taxi_destx1 = 433.0;
      $.taxi_desty1 = 68.1;
      $.taxi_destz1 = 10.0;
    }


  }


  $.blip2_ct1 = Blip.AddForCoord($.taxi_destx1, $.taxi_desty1, $.taxi_destz1);
  $.blip2_ct1.changeDisplay(2 /* BLIP_ONLY */);



  if (Car.IsDead($.taxi_car1)) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }


  $.x_diff = $.taxi_ped_x - $.taxi_blipx;
  $.y_diff = $.taxi_ped_y - $.taxi_blipy;


  $.x_diff_sq = $.x_diff * $.x_diff;
  $.y_diff_sq = $.y_diff * $.y_diff;


  $.taxi_distance_sq = $.x_diff_sq + $.y_diff_sq;
  $.taxi_distance = Math.Sqrt($.taxi_distance_sq);
  $.taxi_distance_int = $.taxi_distance;
  $.taxi_distance_int_old = $.taxi_distance_int;



  if ($.player1.isInZone("DTOWN") || $.player1.isInZone("A_PORT") || $.player1.isInZone("JUNKY") || $.player1.isInZone("DOCKS") || $.player1.isInZone("HAVANA") || $.player1.isInZone("HAITI")) {
    if ($.taxi_passed_this_shot == 0) {
      $.taxi_distance_int = $.taxi_distance_int * 80;
    }
    if ($.taxi_passed_this_shot == 1) {
      $.taxi_distance_int = $.taxi_distance_int * 75;
    }
    if ($.taxi_passed_this_shot == 2) {
      $.taxi_distance_int = $.taxi_distance_int * 70;
    }
    if ($.taxi_passed_this_shot == 3) {
      $.taxi_distance_int = $.taxi_distance_int * 69;
    }
    if ($.taxi_passed_this_shot == 4) {
      $.taxi_distance_int = $.taxi_distance_int * 68;
    }
    if ($.taxi_passed_this_shot == 5) {
      $.taxi_distance_int = $.taxi_distance_int * 66;
    }
    if ($.taxi_passed_this_shot > 5 && $.taxi_passed_this_shot <= 10) {
      $.taxi_distance_int = $.taxi_distance_int * 65;
    }
    if ($.taxi_passed_this_shot > 11 && $.taxi_passed_this_shot <= 20) {
      $.taxi_distance_int = $.taxi_distance_int * 60;
    }
    if ($.taxi_passed_this_shot > 20 && $.taxi_passed_this_shot <= 50) {
      $.taxi_distance_int = $.taxi_distance_int * 55;
    }
    if ($.taxi_passed_this_shot > 50) {
      $.taxi_distance_int = $.taxi_distance_int * 50;
    }


  }
  else {
    if ($.taxi_passed_this_shot == 0) {
      $.taxi_distance_int = $.taxi_distance_int * 90;
    }
    if ($.taxi_passed_this_shot == 1) {
      $.taxi_distance_int = $.taxi_distance_int * 85;
    }
    if ($.taxi_passed_this_shot == 2) {
      $.taxi_distance_int = $.taxi_distance_int * 80;
    }
    if ($.taxi_passed_this_shot == 3) {
      $.taxi_distance_int = $.taxi_distance_int * 79;
    }
    if ($.taxi_passed_this_shot == 4) {
      $.taxi_distance_int = $.taxi_distance_int * 78;
    }
    if ($.taxi_passed_this_shot == 5) {
      $.taxi_distance_int = $.taxi_distance_int * 76;
    }
    if ($.taxi_passed_this_shot > 5 && $.taxi_passed_this_shot <= 10) {
      $.taxi_distance_int = $.taxi_distance_int * 75;
    }
    if ($.taxi_passed_this_shot > 11 && $.taxi_passed_this_shot <= 20) {
      $.taxi_distance_int = $.taxi_distance_int * 70;
    }
    if ($.taxi_passed_this_shot > 20 && $.taxi_passed_this_shot <= 50) {
      $.taxi_distance_int = $.taxi_distance_int * 65;
    }
    if ($.taxi_passed_this_shot > 50) {
      $.taxi_distance_int = $.taxi_distance_int * 60;
    }


  }


  $.taxi_countdown = $.taxi_countdown + $.taxi_distance_int;


  $.speedbonus = $.taxi_distance_int;
  $.speedbonus = $.speedbonus / 100;
  $.speedbonus = $.speedbonus * 65;


  TIMERB = 0;


  if ($.taxi_countdown_already_started == 0) {
    //DISPLAY_ONSCREEN_TIMER taxi_countdown TIMER_DOWN
    Hud.DisplayTimerWithString($.$id.taxi_countdown, 1 /* TIMER_DOWN */, "SEG3_1");
    $.taxi_countdown_already_started = 1;
  }


  if ($.taxi_passed_this_shot == 0) {
    $.taxi_countdown = $.taxi_countdown + 5000;
  }


  while (!($.player1.locateStoppedInCar3D($.taxi_destx1, $.taxi_desty1, $.taxi_destz1, 4.0, 4.0, 4.0, true /* TRUE */)) || !($.player1.isInCar($.taxi_car1))) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.taxi_car1)) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player1.isInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    $.controlmode = Pad.GetControllerMode();
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    if ($.taxi_countdown == 0) {
      // SCM GOTO → taxi_out_of_time (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_out_of_time"); // fallback: would break linear control flow
    }
    if (!($.taxi_car1.isHealthGreater(400))) {
      if ($.spray_blip_onscreen == 0) {
        $.spray_taxi.remove();
        $.spray_blip_onscreen = 1;
        await taxi_fucked();  // SCM GOSUB taxi_fucked
        // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
      }
    }
    if (!(Car.IsDead($.taxi_car1))) {
      if ($.taxi_car1.isHealthGreater(400) && $.spray_blip_onscreen == 1) {
        $.spray_taxi.remove();
        $.spray_blip_onscreen = 0;
        $.taxi_fucked_flag = 0;
      }
    }
    if ($.taxi_car1.isUpsidedown() && $.taxi_car1.isStopped()) {
      // SCM GOTO → taxi_fucked (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_fucked"); // fallback: would break linear control flow
    }


  }
}




async function score() {


  if (TIMERB > $.speedbonus) {
    $.score_for_this_fare = $.taxi_distance_int_old / 10;
    Text.PrintBig("TAXI4", 5000, 5); //Fare delivered
  }
  else {
    $.score_for_this_fare = $.taxi_distance_int_old / 8;
    Text.PrintBig("TAXI5", 5000, 5); //Speed Bonus!!
  }





  $.player1.addScore($.score_for_this_fare);
  Text.PrintWithNumberBig("TSCORE2", $.score_for_this_fare, 6000, 6); //Your score is...
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
  $.taxi_score = $.taxi_score + $.score_for_this_fare;


  $.taxi_passed++;
  Stat.RegisterPassengerDroppedOffTaxi();
  $.taxi_passed_this_shot++;

  //GIVE NITRO AFTER COMPLETING 100 TAXI MISSIONS

  if ($.new_taxi_created_before == 0 && $.taxi_passed > 99) {
    Stat.RegisterMissionGiven();
    Stat.RegisterOddjobMissionPassed();
    Game.SetAllTaxisHaveNitro(true /* TRUE */);
    Text.PrintHelp("NITRO");
    Stat.PlayerMadeProgress(1);
    $.new_taxi_created_before = 1;
  }


  $.taxi_countdown = $.taxi_countdown + 10000;


  await mission_taxi1_failed();  // SCM GOSUB mission_taxi1_failed


  if ($.taxi_passed_this_shot == $.in_a_row_number) {
    Text.PrintWith2NumbersBig("IN_ROW", $.taxi_passed_this_shot, $.in_a_row_cash, 5000, 6); //Bonus!
    $.player1.addScore($.in_a_row_cash);
    $.taxi_score = $.taxi_score + $.in_a_row_cash;
    $.in_a_row_number = $.in_a_row_number + 5;
    $.in_a_row_cash = $.in_a_row_cash + 500;
  }


  // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
}



//Taxi_fail_conditions


async function taxi_out_of_time() {


  Text.PrintNow("TAXI2", 5000, 1); //Out of time


  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}



async function taxi_fucked() {


  await asyncWait(0);


  Text.PrintNow("TAXI3", 5000, 1); //Taxi is trashed


  if (!(Char.IsDead($.taxi_ped1))) {
    $.taxi_ped1.setObjFleeOnFootTillSafe();
  }
  $.taxi_fucked_flag = 1;


  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}




async function taxi_fail_button_pressed() {


  $.controlmode = Pad.GetControllerMode();
  if (!($.controlmode == 3)) {
    while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
      }
    }
  }
  else {
    while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
      }
    }
  }


  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}



// mission taxi1 passed


async function mission_taxi1_passed() {


  $.blip1_ct1.remove();
  $.blip2_ct1.remove();
  $.taxi_ped1.markAsNoLongerNeeded();


  if (!(Car.IsDead($.taxi_car1))) {
    $.taxi_car1.setTaxiLights(true /* On */);
  }

  //WAIT 1000

  await asyncWait(0);
  Text.Print("TAXI1", 1500, 1); //Pick up a fare


  // SCM GOTO → Start_taxi_mission (not lowered; manual jump required)
  throw new Error("unresolved GOTO Start_taxi_mission"); // fallback: would break linear control flow
}



async function mission_taxi1_failed() {


  if (!(Char.IsDead($.taxi_ped1))) {
    if (!(Car.IsDead($.taxi_car1))) {
      if ($.taxi_ped1.isInCar($.taxi_car1)) {
        $.taxi_ped1.setObjLeaveCar($.taxi_car1);
        if ($.player1.isPlaying()) {
          $.player1.setControl(false /* OFF */);
        }
        while ($.taxi_ped1.isInCar($.taxi_car1)) {
          await asyncWait(0);
          if (Char.IsDead($.taxi_ped1) || Car.IsDead($.taxi_car1)) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          if (!($.player1.isPlaying())) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          if (!($.player1.isInCar($.taxi_car1))) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          $.controlmode = Pad.GetControllerMode();
          if (!($.controlmode == 3)) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && ONMISSION == 1) {
              // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
              throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
            }
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && ONMISSION == 1) {
              // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
              throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
            }
          }
        }


      }
    }
  }


  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* ON */);
  }


  if ($.taxi_fucked_flag == 1) {
    return;
  }
}



async function taxi_ped_leave2() {


  await asyncWait(0);


  if (!(Char.IsDead($.taxi_ped1))) {
    if (!(Car.IsDead($.taxi_car1))) {
      if (!($.taxi_ped1.isInCar($.taxi_car1))) {
        $.taxi_ped1.wanderDir(0);
        $.taxi_ped1.markAsNoLongerNeeded();
      }
    }
  }


  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* ON */);
  }
}


// mission cleanup


async function cleanup() {


  Hud.ClearTimer($.$id.taxi_countdown);
  Hud.ClearCounter($.$id.taxi_passed_this_shot); //TEST STUFF!!!!!!!!
  if (!(Car.IsDead($.taxi_car1))) {
    $.taxi_car1.setTaxiLights(false /* Off */);
  }
  $.blip1_ct1.remove();
  $.blip2_ct1.remove();
  $.spray_taxi.remove();
  $.taxi_ped1.markAsNoLongerNeeded();
  Text.PrintBig("TAXI6", 5000, 5); //Taxi mission over
  Text.PrintWithNumberBig("TSCORE", $.taxi_score, 6000, 6); //Your score is...
  Stat.RegisterMoneyMadeTaxi($.taxi_score);
  // SET_DEATHARREST_STATE(true /* on */);
  ONMISSION = 0;
  $.flag_player_on_oddjob = 0;
  $.flag_taxi1_mission_launched = 0;
  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* ON */);
  }
  Text.ClearHelp();
  Mission.Finish();
}

export async function taxi1() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_taxi1


  await cleanup();  // SCM GOSUB mission_cleanup_taxi1




  // Variables for mission


  // VAR_INT blip1_ct1 blip2_ct1 spray_blip_onscreen
  // VAR_INT taxi_car1 taxi_countdown_already_started
  // VAR_INT taxi_ped1 taxi_passed_this_shot taxi_fucked_flag
  // VAR_INT taxi_countdown taxi_score taxi_distance_int taxi_distance_int_old
  // VAR_INT taxi_finish_time taxi_start_time total_taxi_time_taken
  // VAR_INT score_for_this_fare speedbonus in_a_row_cash in_a_row_number


  // VAR_FLOAT taxi_destx1 taxi_desty1 taxi_destz1
  // VAR_FLOAT taxi_blipx taxi_blipy taxi_blipz
  // VAR_FLOAT taxi_ped_x taxi_ped_y taxi_ped_z
  // VAR_FLOAT x_diff y_diff x_diff_sq y_diff_sq taxi_distance_sq taxi_distance

  // ***************************************Mission Start*************************************


}
