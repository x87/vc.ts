// Generated from main/cokerun.sc

import { $ } from "../vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// ****************************** boat yard odd job*****************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  ONMISSION = 1;
  // SCRIPT_NAME COKERUN


  await asyncWait(0);

  // ****************************************Mission Start************************************

  //Mission Script

  counter_cokerun = 0;
  create_coke_pickup = 0;
  Streaming.RequestModel(marquis);


  if ($.boatyard_asset_acquired == 0) {
    Stat.RegisterMissionGiven();
  }


  while (!(Streaming.HasModelLoaded(marquis))) {
    await asyncWait(0);
  }


  blipcoke_1 = Blip.AddForCoord(-540.1, -1526.9, 8.0);
  Fx.DrawCorona(-540.1, -1526.9, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);


  if (create_coke_pickup == 0) {
    coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -540.1, -1526.9, 8.0);
    create_coke_pickup = 1;
  }


  Streaming.LoadScene(-569.272, -1503.455, 9.428);
  Camera.SetFixedPosition(-570.041, -1502.827, 9.547, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-569.272, -1503.455, 9.428, 2 /* JUMP_CUT */);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.countdown_boat = 151000;


  cokerun_boat = $.scplayer.storeCarIsIn();
  if (!(Car.IsDead(cokerun_boat))) {
    cokerun_boat.setHeading(250.0);
  }


  if ($.flag_cokerun_passed == 0) {
    Weather.ForceNow(0 /* WEATHER_SUNNY */);
  }
  if ($.flag_cokerun_passed == 1) {
    $.countdown_boat = $.countdown_boat - 5000;
    Weather.ForceNow(WEATHER_EXTRA_SUNNY);
  }
  if ($.flag_cokerun_passed == 2) {
    $.countdown_boat = $.countdown_boat - 10000;
    Weather.ForceNow(1 /* WEATHER_CLOUDY */);
  }
  if ($.flag_cokerun_passed == 3) {
    $.countdown_boat = $.countdown_boat - 15000;
    Weather.ForceNow(3 /* WEATHER_FOGGY */);
  }
  if ($.flag_cokerun_passed == 4) {
    $.countdown_boat = $.countdown_boat - 20000;
    Weather.ForceNow(2 /* WEATHER_RAINY */);
  }
  if ($.flag_cokerun_passed > 4) {
    $.countdown_boat = $.countdown_boat - 30000;
  }


  $.start_countdown_boat = $.countdown_boat;


  coke_ramp1 = ScriptObject.Create(waterjumpx2, -273.3, -1463.1, 5.5);
  //SET_OBJECT_HEADING coke_ramp1 343.60

  coke_ramp1.setCollision(true /* TRUE */);


  coke_ramp2 = ScriptObject.Create(waterjumpx2, -275.4, -1372.8, 5.5);
  //SET_OBJECT_HEADING coke_ramp2 343.60

  coke_ramp2.setCollision(true /* TRUE */);


  coke_ramp3 = ScriptObject.Create(waterjumpx2, -305.6, -1225.3, 5.5);
  //SET_OBJECT_HEADING coke_ramp3 343.60

  coke_ramp3.setCollision(true /* TRUE */);


  TIMERA = 0;



  Text.PrintNow("BOAT_P", 6000, 1);


  while (!(TIMERA > 500)) {
    await asyncWait(0);
    Fx.DrawCorona(-540.1, -1526.9, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);


  }


  while (!(TIMERA > 5500)) {
    await asyncWait(0);
    Fx.DrawCorona(-540.1, -1526.9, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → skip_cokerun_cut (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_cokerun_cut"); // fallback: would break linear control flow
    }


  }
}




async function skip_cokerun_cut() {


  $.player1.setControl(true /* ON */);
  Camera.RestoreJumpcut();


  Hud.DisplayTimer($.$id.countdown_boat, TIMER_DOWN);


  while (!(counter_cokerun > 25)) {
    await asyncWait(0);
    if ($.countdown_boat == 0) {
      Text.PrintNow("taxi2", 5000, 1);
      // SCM GOTO → mission_cokerun_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cokerun_failed"); // fallback: would break linear control flow
    }
    if (counter_cokerun == 0) {
      Fx.DrawCorona(-540.1, -1526.9, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player1.locateInCar3D(-540.1, -1526.9, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-540.1, -1526.9, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-458.2, -1575.2, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 1) {
      Fx.DrawCorona(-458.2, -1575.2, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -458.2, -1575.2, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-458.2, -1575.2, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-458.2, -1575.2, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-361.2, -1599.6, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 2) {
      Fx.DrawCorona(-361.2, -1599.6, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -361.2, -1599.6, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-361.2, -1599.6, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-361.2, -1599.6, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-333.0, -1678.1, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 3) {
      Fx.DrawCorona(-333.0, -1678.1, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -333.0, -1678.1, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-333.0, -1678.1, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-333.0, -1678.1, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-401.3, -1730.7, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 4) {
      Fx.DrawCorona(-401.3, -1730.7, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -401.3, -1730.7, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-401.3, -1730.7, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-401.3, -1730.7, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-312.3, -1715.6, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 5) {
      Fx.DrawCorona(-312.3, -1715.6, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -312.3, -1715.6, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-312.3, -1715.6, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-312.3, -1715.6, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-273.3, -1556.2, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 6) {
      Fx.DrawCorona(-273.3, -1556.2, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -273.3, -1556.2, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-273.3, -1556.2, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-273.3, -1556.2, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-272.4, -1449.7, 13.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 7) {
      Fx.DrawCorona(-272.4, -1449.7, 13.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -272.4, -1449.7, 13.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-272.4, -1449.7, 13.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-272.4, -1449.7, 13.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-272.7, -1360.2, 13.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 8) {
      Fx.DrawCorona(-275.4, -1360.2, 13.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -275.4, -1360.2, 13.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-275.4, -1360.2, 13.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-275.4, -1360.2, 13.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-305.6, -1214.4, 13.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 9) {
      Fx.DrawCorona(-305.6, -1214.4, 13.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -305.6, -1214.4, 13.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-305.6, -1214.4, 13.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-305.6, -1214.4, 13.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-298.6, -1074.4, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 10) {
      Fx.DrawCorona(-298.6, -1074.4, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -298.6, -1074.4, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-298.6, -1074.4, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-298.6, -1074.4, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-252.0, -939.9, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 11) {
      Fx.DrawCorona(-252.0, -939.9, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -252.0, -939.9, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-252.0, -939.9, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-252.0, -939.9, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-85.0, -766.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 12) {
      Fx.DrawCorona(-85.0, -766.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -85.0, -766.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-85.0, -766.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-85.0, -766.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(158.0, -634.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 13) {
      Fx.DrawCorona(158.0, -634.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 158.0, -634.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(158.0, -634.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(158.0, -634.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(279.0, -475.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 14) {
      Fx.DrawCorona(279.0, -475.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 279.0, -475.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(279.0, -475.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(279.0, -475.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(410.0, -269.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 15) {
      Fx.DrawCorona(410.0, -269.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 410.0, -269.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(410.0, -269.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(410.0, -269.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(392.0, 20.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 16) {
      Fx.DrawCorona(392.0, 20.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 392.0, 20.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(392.0, 20.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(392.0, 20.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(249.0, 100.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 17) {
      Fx.DrawCorona(249.0, 100.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 249.0, 100.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(249.0, 100.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(249.0, 100.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(194.0, -170.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 18) {
      Fx.DrawCorona(194.0, -170.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 194.0, -170.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(194.0, -170.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(194.0, -170.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(49.0, -150.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 19) {
      Fx.DrawCorona(49.0, -150.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 49.0, -150.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(49.0, -150.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(49.0, -150.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-64.0, -156.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 20) {
      Fx.DrawCorona(-64.0, -156.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -64.0, -156.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-64.0, -156.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-64.0, -156.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-93.0, 67.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 21) {
      Fx.DrawCorona(-93.0, 67.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -93.0, 67.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-93.0, 67.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-93.0, 67.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(-70.0, 294.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 22) {
      Fx.DrawCorona(-70.0, 294.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, -70.0, 294.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(-70.0, 294.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(-70.0, 294.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(25.0, 394.0, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 23) {
      Fx.DrawCorona(25.0, 394.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 25.0, 394.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(25.0, 394.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(25.0, 394.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(196.0, 403.0, 8.0);
        ++counter_cokerun;
        cokerun_bigboat = Car.Create(marquis, 324.0, 604.0, 6.0);
        cokerun_bigboat.setHeading(60.0);
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 24) {
      Fx.DrawCorona(196.0, 403.0, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 196.0, 403.0, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(196.0, 403.0, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(196.0, 403.0, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        blipcoke_1 = Blip.AddForCoord(304.4, 540.6, 8.0);
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }
    if (counter_cokerun == 25) {
      Fx.DrawCorona(304.4, 540.6, 8.0, 4.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 255, 0, 0);
      if (create_coke_pickup == 0) {
        coke_pickup = Pickup.Create(craigpackage, 3 /* PICKUP_ONCE */, 304.4, 540.6, 8.0);
        create_coke_pickup = 1;
      }
      if ($.player1.locateInCar3D(304.4, 540.6, 8.0, 5.0, 5.0, 3.0, false /* FALSE */)) {
        blipcoke_1.remove();
        coke_pickup.remove();
        Sound.AddOneOffSound(304.4, 540.6, 8.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        if (!(Car.IsDead(cokerun_bigboat))) {
          blipcoke_1 = Blip.AddForCar(cokerun_bigboat);
        }
        ++counter_cokerun;
        create_coke_pickup = 0;
      }
    }


  }


  Hud.ClearTimer($.$id.countdown_boat);


  if ($.flag_cokerun_passed == 0) {
    $.player1.setControl(false /* OFF */);
    Hud.SwitchWidescreen(true /* ON */);
    $.boatyard_cash_pickup = Pickup.CreateProtection($.boatcashX, $.boatcashY, $.boatcashZ, $.boatyard_revenue, $.boatyard_revenue);
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(1000, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    Streaming.Switch(false /* OFF */);
    Streaming.RequestModel(b_hse_pier);
    Streaming.RequestModel(b_hse_ext);
    Streaming.RequestModel(docks28);
    Streaming.RequestModel(docksprops12);
    Streaming.RequestModel(docks85);
    Streaming.RequestModel(dk_dockroads04);
    Streaming.RequestModel(b_hse_pierfence);
    Streaming.RequestModel(b_hse_interior);
    Streaming.RequestModel(dk_reef);
    Streaming.RequestModel(boat_kb2);
    Streaming.LoadAllModelsNow();
    while (!(Streaming.HasModelLoaded(b_hse_pier)) || !(Streaming.HasModelLoaded(b_hse_ext)) || !(Streaming.HasModelLoaded(docks28)) || !(Streaming.HasModelLoaded(docksprops12)) || !(Streaming.HasModelLoaded(docks85)) || !(Streaming.HasModelLoaded(dk_dockroads04))) {
      await asyncWait(0);
    }
    while (!(Streaming.HasModelLoaded(b_hse_pierfence)) || !(Streaming.HasModelLoaded(b_hse_interior)) || !(Streaming.HasModelLoaded(dk_reef)) || !(Streaming.HasModelLoaded(boat_kb2))) {
      await asyncWait(0);
    }
    Streaming.Switch(true /* ON */);

    //LOAD_SCENE -640.2 -1485.5 17.0
    Camera.SetFixedPosition(-631.643, -1495.598, 26.104, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(-632.270, -1495.064, 25.537, 2 /* JUMP_CUT */);
    await asyncWait(500);
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(1000, 1 /* FADE_IN */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    Audio.PlayMissionPassedTune(1);
    Text.PrintBig("BOAT_A2", 5000, 6); //BOAT ASSET ACQUIRED
    await asyncWait(5000);
    Camera.SetFixedPosition(-636.797, -1497.307, 17.588, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(-637.279, -1496.606, 17.062, 2 /* JUMP_CUT */);
    Text.PrintWithNumberNow("BOAT_AS", $.boatyard_revenue, 6000, 1); //BOAT will now generate revenue upto a maximum of $~1~. Make sure you collect it regulary.
    await asyncWait(6000);
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    Streaming.MarkModelAsNoLongerNeeded(b_hse_pier);
    Streaming.MarkModelAsNoLongerNeeded(b_hse_ext);
    Streaming.MarkModelAsNoLongerNeeded(docks28);
    Streaming.MarkModelAsNoLongerNeeded(docksprops12);
    Streaming.MarkModelAsNoLongerNeeded(docks85);
    Streaming.MarkModelAsNoLongerNeeded(dk_dockroads04);
    Streaming.MarkModelAsNoLongerNeeded(b_hse_pierfence);
    Streaming.MarkModelAsNoLongerNeeded(boat_kb2);
    Streaming.MarkModelAsNoLongerNeeded(dk_reef);
    Streaming.MarkModelAsNoLongerNeeded(b_hse_interior);
    Streaming.LoadScene(324.0, 604.0, 7.0);
    await asyncWait(500);
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(500, 1 /* FADE_IN */);


    $.player1.setControl(true /* ON */);
    Hud.SwitchWidescreen(false /* OFF */);
    Camera.RestoreJumpcut();


  }



  // SCM GOTO → mission_cokerun_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_cokerun_passed"); // fallback: would break linear control flow
}


// --------------------------Mission failed-----------------------------------------------


async function onFailed() {


  Text.PrintBig("M_FAIL", 2000, 1);
}



// -------------------------Mission passed-------------------------------------------------


async function mission_cokerun_passed() {


  $.player1.clearWantedLevel();


  if ($.flag_cokerun_passed == 0) {
    Text.PrintWithNumberBig("M_PASS", 5000, 5000, 1); //"Mission Passed!"
    $.player1.addScore(5000);
    ++$.counter_60_percent;
    Stat.PlayerMadeProgress(1);
    Stat.RegisterOddjobMissionPassed();
    $.boatyard_asset_acquired = 1;
  }


  if ($.flag_cokerun_passed == 1) {
    Text.PrintWithNumberBig("M_PASS", 6000, 5000, 1); //"Mission Passed!"
    $.player1.addScore(6000);
  }
  if ($.flag_cokerun_passed == 2) {
    Text.PrintWithNumberBig("M_PASS", 7000, 5000, 1); //"Mission Passed!"
    $.player1.addScore(7000);
  }
  if ($.flag_cokerun_passed == 3) {
    Text.PrintWithNumberBig("M_PASS", 8000, 5000, 1); //"Mission Passed!"
    $.player1.addScore(8000);
  }
  if ($.flag_cokerun_passed == 4) {
    Text.PrintWithNumberBig("M_PASS", 9000, 5000, 1); //"Mission Passed!"
    $.player1.addScore(9000);
  }
  if ($.flag_cokerun_passed > 4) {
    Text.PrintWithNumberBig("M_PASS", 15000, 5000, 1); //"Mission Passed!"
    $.player1.addScore(15000);
  }


  $.start_countdown_boat = $.start_countdown_boat - $.countdown_boat;


  $.countdown_boat_seconds = $.start_countdown_boat / 1000;
  Stat.RegisterFastestTime(22, $.countdown_boat_seconds);


  $.flag_cokerun_passed++;
}



// mission cleanup


async function cleanup() {


  Weather.Release();
  blipcoke_1.remove();
  coke_ramp1.delete();
  coke_ramp2.delete();
  coke_ramp3.delete();
  coke_pickup.remove();


  Streaming.MarkModelAsNoLongerNeeded(marquis);
  Streaming.MarkModelAsNoLongerNeeded(b_hse_pier);
  Streaming.MarkModelAsNoLongerNeeded(b_hse_ext);
  Streaming.MarkModelAsNoLongerNeeded(docks28);
  Streaming.MarkModelAsNoLongerNeeded(docksprops12);
  Streaming.MarkModelAsNoLongerNeeded(docks85);
  Streaming.MarkModelAsNoLongerNeeded(dk_dockroads04);
  Streaming.MarkModelAsNoLongerNeeded(b_hse_pierfence);
  Streaming.MarkModelAsNoLongerNeeded(boat_kb2);
  Streaming.MarkModelAsNoLongerNeeded(dk_reef);
  Streaming.MarkModelAsNoLongerNeeded(b_hse_interior);


  cokerun_bigboat.markAsNoLongerNeeded();


  Hud.ClearTimer($.$id.countdown_boat);
  ONMISSION = 0;


  Mission.Finish();
}

export async function cokerun() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_cokerun


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_cokerun_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_cokerun




  // LVAR_INT counter_cokerun cokerun_bigboat blipcoke_1 coke_ramp1 coke_ramp2 coke_ramp3
  // LVAR_INT create_coke_pickup cokerun_boat coke_pickup


  // VAR_INT countdown_boat countdown_boat_seconds flag_cokerun_passed start_countdown_boat


}
