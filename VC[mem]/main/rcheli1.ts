// Generated from main/rcheli1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_rcbuggy1() {


  if ($.playerpassedrcheli == 0) {
    Stat.RegisterMissionGiven();
  }


  ONMISSION = 1;
  $.flag_player_on_rc_mission = 1;



  await asyncWait(0);


  Text.LoadMissionText("RCHELI1");



  Streaming.RequestModel(rcraider);


  while (!(Streaming.HasModelLoaded(rcraider))) {
    await asyncWait(0);
  }

  //counters

  $.timer_for_rcraider_coronas = 0;
  $.pack_counter = 20;

  //set flags

  $.player_in_topfun_van = 0;


  $.pack1 = 0;
  $.pack2 = 0;
  $.pack3 = 0;
  $.pack4 = 0;
  $.pack5 = 0;
  $.pack6 = 0;
  $.pack7 = 0;
  $.pack8 = 0;
  $.pack9 = 0;
  $.pack10 = 0;
  $.pack11 = 0;
  $.pack12 = 0;
  $.pack13 = 0;
  $.pack14 = 0;
  $.pack15 = 0;
  $.pack16 = 0;
  $.pack17 = 0;
  $.pack18 = 0;
  $.pack19 = 0;
  $.pack20 = 0;

  //set coords

  $.pack1x = -1290.792;
  $.pack1y = -1253.498;
  $.pack1z = 21.376;


  $.pack2x = -1369.82;
  $.pack2y = -1256.41;
  $.pack2z = 18.17883;


  $.pack3x = -1482.534;
  $.pack3y = -1254.653;
  $.pack3z = 14.86;


  $.pack4x = -1573.508;
  $.pack4y = -1239.667;
  $.pack4z = 21.762;


  $.pack5x = -1785.86;
  $.pack5y = -1343.75;
  $.pack5z = 15.97;


  $.pack6x = -1793.35;
  $.pack6y = -1248.55;
  $.pack6z = 22.08;


  $.pack7x = -1689.2056;
  $.pack7y = -1103.073;
  $.pack7z = 14.035994;


  $.pack8x = -1774.52295;
  $.pack8y = -1060.862;
  $.pack8z = 14.965479;


  $.pack9x = -1793.91;
  $.pack9y = -908.69;
  $.pack9z = 14.86;


  $.pack10x = -1788.038574;
  $.pack10y = -884.222351;
  $.pack10z = 42.331383;


  $.pack11x = -1646.72;
  $.pack11y = -929.44;
  $.pack11z = 13.94;


  $.pack12x = -1563.4743;
  $.pack12y = -814.635498;
  $.pack12z = 16.210712;


  $.pack13x = -1514.844;
  $.pack13y = -951.425;
  $.pack13z = 15.168;


  $.pack14x = -1488.259766;
  $.pack14y = -892.678589;
  $.pack14z = 26.174585;


  $.pack15x = -1355.305;
  $.pack15y = -951.825;
  $.pack15z = 15.168;


  $.pack16x = -1352.431396;
  $.pack16y = -751.111023;
  $.pack16z = 25.788078;


  $.pack17x = -1240.26;
  $.pack17y = -841.24;
  $.pack17z = 22.30;


  $.pack18x = -1253.92;
  $.pack18y = -1056.68;
  $.pack18z = 13.94;


  $.pack19x = -1270.146;
  $.pack19y = -1151.49;
  $.pack19z = 22.30;


  $.pack20x = -1270.4703;
  $.pack20y = -1272.444;
  $.pack20z = 14.866;


  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  $.player1.clearWantedLevel();
  $.vanforrc = $.player1.storeCarIsIn();
  World.ClearArea(-1237.285, -1232.1212, 14.77, 10.0, true /* TRUE */);
  $.previous_wanted_level = $.player1.storeWantedLevel();





  await asyncWait(0);

  //getting the player in the car

  if (!(Car.IsDead($.vanforrc))) {
    if ($.player1.isSittingInCar($.vanforrc)) {
      $.vanforrc.lockDoors(2 /* CARLOCK_LOCKED */);
      Hud.SwitchWidescreen(true /* ON */);
      Rc.GiveModelToPlayer($.player1, -1237.285, -1232.1212, 14.77, 337.839, rcraider);
      $.remote_copter = Rc.GetCar($.player1);
      Camera.SetFixedPosition(-1237.809692, -1227.21, 19.330381, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-1237.587158, -1227.993530, 18.749018, 2 /* JUMP_CUT */);


    }
  }


  Camera.DoFade(1500, 1 /* FADE_IN */);



  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  if ($.player_in_topfun_van == 0) {
    TIMERA = 0;
    while (TIMERA < 5000) {
      await asyncWait(0);
      Text.PrintNow("RCH1_6", 5000, 2);
      Fx.DrawCorona($.pack2x, $.pack2y, $.pack2z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
      Fx.DrawCorona($.pack8x, $.pack8y, $.pack8z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
        // SCM GOTO → endrchelilable (not lowered; manual jump required)
        throw new Error("unresolved GOTO endrchelilable"); // fallback: would break linear control flow
      }


    }


    Streaming.LoadScene(-1357.8689, -1258.004, 21.487);
    Camera.SetFixedPosition(-1357.8689, -1258.004, 21.487, -0.948, 0.121, -0.2947);
    Camera.PointAtPoint(-1358.82, -1257.88, 21.192, 2 /* JUMP_CUT */);
    TIMERA = 0;
    while (TIMERA < 5000) {
      await asyncWait(0);
      Text.PrintNow("RCH1_7", 5000, 2);
      Fx.DrawCorona($.pack2x, $.pack2y, $.pack2z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
      Fx.DrawCorona($.pack8x, $.pack8y, $.pack8z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
        // SCM GOTO → endrchelilable (not lowered; manual jump required)
        throw new Error("unresolved GOTO endrchelilable"); // fallback: would break linear control flow
      }


    }


    Streaming.LoadScene(-1786.243, -1073.31, 15.304);
    Camera.PointAtPoint(-1785.705, -1072.465, 15.27, 2 /* JUMP_CUT */);
    Camera.SetFixedPosition(-1786.243, -1073.31, 15.304, 0.0, 0.0, 0.0);
    TIMERA = 0;
    while (TIMERA < 5000) {
      await asyncWait(0);
      Text.PrintNow("RCH1_8", 500, 2);
      Fx.DrawCorona($.pack2x, $.pack2y, $.pack2z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
      Fx.DrawCorona($.pack8x, $.pack8y, $.pack8z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);


      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
        // SCM GOTO → endrchelilable (not lowered; manual jump required)
        throw new Error("unresolved GOTO endrchelilable"); // fallback: would break linear control flow
      }


    }


    // SCM label endrchelilable
    if (!(Car.IsDead($.remote_copter))) {
      Camera.PointAtCar($.remote_copter, 18 /* CAM_ON_A_STRING */, 2 /* JUMP_CUT */);
    }
    Text.ClearSmallPrints();
    Hud.DisplayTimerWithString($.$id.timer_for_rcraider_coronas, 0 /* TIMER_UP */, "RCH1_5");
    Hud.DisplayCounterWithString($.$id.pack_counter, 0 /* COUNTER_DISPLAY_NUMBER */, "RCH1_4");
    $.player1.setControl(true /* ON */);
    Hud.SwitchWidescreen(false /* OFF */);
    $.player_in_topfun_van = 1;


  }






  while ($.pack_counter > 0) {
    await asyncWait(0);



    if ($.pack1 < 2) {
      if ($.pack1 == 0) {
        $.pack1blip = Blip.AddForCoord($.pack1x, $.pack1y, $.pack1z);
        $.pack1 = 1;
      }
      if (!(Car.IsDead($.remote_copter))) {
        Fx.DrawCorona($.pack1x, $.pack1y, $.pack1z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
        if ($.remote_copter.locate3D($.pack1x, $.pack1y, $.pack1z, 2.0, 2.0, 2.0, false /* FALSE */)) {
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          $.pack1blip.remove();
          $.pack_counter--;
          $.pack1 = 2;
        }
      }
    }
    if ($.pack1 == 2) {
      if ($.pack2 < 2) {
        if ($.pack2 == 0) {
          $.pack2blip = Blip.AddForCoord($.pack2x, $.pack2y, $.pack2z);
          $.pack2 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack2x, $.pack2y, $.pack2z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack2x, $.pack2y, $.pack2z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack2blip.remove();
            $.pack_counter--;
            $.pack2 = 2;
          }
        }
      }
    }
    if ($.pack2 == 2) {
      if ($.pack3 < 2) {
        if ($.pack3 == 0) {
          $.pack3blip = Blip.AddForCoord($.pack3x, $.pack3y, $.pack3z);
          $.pack3 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack3x, $.pack3y, $.pack3z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack3x, $.pack3y, $.pack3z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack3blip.remove();
            $.pack_counter--;
            $.pack3 = 2;
          }
        }
      }
    }
    if ($.pack3 == 2) {
      if ($.pack4 < 2) {
        if ($.pack4 == 0) {
          $.pack4blip = Blip.AddForCoord($.pack4x, $.pack4y, $.pack4z);
          $.pack4 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack4x, $.pack4y, $.pack4z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack4x, $.pack4y, $.pack4z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack4blip.remove();
            $.pack_counter--;
            $.pack4 = 2;
          }
        }
      }
    }
    if ($.pack4 == 2) {
      if ($.pack5 < 2) {
        if ($.pack5 == 0) {
          $.pack5blip = Blip.AddForCoord($.pack5x, $.pack5y, $.pack5z);
          $.pack5 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack5x, $.pack5y, $.pack5z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack5x, $.pack5y, $.pack5z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack5blip.remove();
            $.pack_counter--;
            $.pack5 = 2;
          }
        }
      }
    }
    if ($.pack5 == 2) {
      if ($.pack6 < 2) {
        if ($.pack6 == 0) {
          $.pack6blip = Blip.AddForCoord($.pack6x, $.pack6y, $.pack6z);
          $.pack6 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack6x, $.pack6y, $.pack6z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack6x, $.pack6y, $.pack6z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack6blip.remove();
            $.pack_counter--;
            $.pack6 = 2;
          }
        }
      }
    }
    if ($.pack6 == 2) {
      if ($.pack7 < 2) {
        if ($.pack7 == 0) {
          $.pack7blip = Blip.AddForCoord($.pack7x, $.pack7y, $.pack7z);
          $.pack7 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack7x, $.pack7y, $.pack7z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack7x, $.pack7y, $.pack7z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack7blip.remove();
            $.pack_counter--;
            $.pack7 = 2;
          }
        }
      }
    }
    if ($.pack7 == 2) {
      if ($.pack8 < 2) {
        if ($.pack8 == 0) {
          $.pack8blip = Blip.AddForCoord($.pack8x, $.pack8y, $.pack8z);
          $.pack8 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack8x, $.pack8y, $.pack8z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack8x, $.pack8y, $.pack8z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack8blip.remove();
            $.pack_counter--;
            $.pack8 = 2;
          }
        }
      }
    }
    if ($.pack8 == 2) {
      if ($.pack9 < 2) {
        if ($.pack9 == 0) {
          $.pack9blip = Blip.AddForCoord($.pack9x, $.pack9y, $.pack9z);
          $.pack9 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack9x, $.pack9y, $.pack9z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack9x, $.pack9y, $.pack9z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack9blip.remove();
            $.pack_counter--;
            $.pack9 = 2;
          }
        }
      }
    }
    if ($.pack9 == 2) {
      if ($.pack10 < 2) {
        if ($.pack10 == 0) {
          $.pack10blip = Blip.AddForCoord($.pack10x, $.pack10y, $.pack10z);
          $.pack10 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack10x, $.pack10y, $.pack10z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack10x, $.pack10y, $.pack10z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack10blip.remove();
            $.pack_counter--;
            $.pack10 = 2;
          }
        }
      }
    }


    if ($.pack10 == 2) {
      if ($.pack11 < 2) {
        if ($.pack11 == 0) {
          $.pack11blip = Blip.AddForCoord($.pack11x, $.pack11y, $.pack11z);
          $.pack11 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack11x, $.pack11y, $.pack11z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack11x, $.pack11y, $.pack11z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack11blip.remove();
            $.pack_counter--;
            $.pack11 = 2;
          }
        }
      }
    }
    if ($.pack11 == 2) {
      if ($.pack12 < 2) {
        if ($.pack12 == 0) {
          $.pack12blip = Blip.AddForCoord($.pack12x, $.pack12y, $.pack12z);
          $.pack12 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack12x, $.pack12y, $.pack12z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack12x, $.pack12y, $.pack12z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack12blip.remove();
            $.pack_counter--;
            $.pack12 = 2;
          }
        }
      }
    }
    if ($.pack12 == 2) {
      if ($.pack13 < 2) {
        if ($.pack13 == 0) {
          $.pack13blip = Blip.AddForCoord($.pack13x, $.pack13y, $.pack13z);
          $.pack13 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack13x, $.pack13y, $.pack13z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack13x, $.pack13y, $.pack13z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack13blip.remove();
            $.pack_counter--;
            $.pack13 = 2;
          }
        }
      }
    }
    if ($.pack13 == 2) {
      if ($.pack14 < 2) {
        if ($.pack14 == 0) {
          $.pack14blip = Blip.AddForCoord($.pack14x, $.pack14y, $.pack14z);
          $.pack14 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack14x, $.pack14y, $.pack14z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack14x, $.pack14y, $.pack14z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack14blip.remove();
            $.pack_counter--;
            $.pack14 = 2;
          }
        }
      }
    }
    if ($.pack14 == 2) {
      if ($.pack15 < 2) {
        if ($.pack15 == 0) {
          $.pack15blip = Blip.AddForCoord($.pack15x, $.pack15y, $.pack15z);
          $.pack15 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack15x, $.pack15y, $.pack15z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack15x, $.pack15y, $.pack15z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack15blip.remove();
            $.pack_counter--;
            $.pack15 = 2;
          }
        }
      }
    }
    if ($.pack15 == 2) {
      if ($.pack16 < 2) {
        if ($.pack16 == 0) {
          $.pack16blip = Blip.AddForCoord($.pack16x, $.pack16y, $.pack16z);
          $.pack16 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack16x, $.pack16y, $.pack16z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack16x, $.pack16y, $.pack16z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack16blip.remove();
            $.pack_counter--;
            $.pack16 = 2;
          }
        }
      }
    }
    if ($.pack16 == 2) {
      if ($.pack17 < 2) {
        if ($.pack17 == 0) {
          $.pack17blip = Blip.AddForCoord($.pack17x, $.pack17y, $.pack17z);
          $.pack17 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack17x, $.pack17y, $.pack17z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack17x, $.pack17y, $.pack17z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack17blip.remove();
            $.pack_counter--;
            $.pack17 = 2;
          }
        }
      }
    }
    if ($.pack17 == 2) {
      if ($.pack18 < 2) {
        if ($.pack18 == 0) {
          $.pack18blip = Blip.AddForCoord($.pack18x, $.pack18y, $.pack18z);
          $.pack18 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack18x, $.pack18y, $.pack18z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack18x, $.pack18y, $.pack18z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack18blip.remove();
            $.pack_counter--;
            $.pack18 = 2;
          }
        }
      }
    }
    if ($.pack18 == 2) {
      if ($.pack19 < 2) {
        if ($.pack19 == 0) {
          $.pack19blip = Blip.AddForCoord($.pack19x, $.pack19y, $.pack19z);
          $.pack19 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack19x, $.pack19y, $.pack19z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack19x, $.pack19y, $.pack19z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack19blip.remove();
            $.pack_counter--;
            $.pack19 = 2;
          }
        }
      }
    }
    if ($.pack19 == 2) {
      if ($.pack20 < 2) {
        if ($.pack20 == 0) {
          $.pack20blip = Blip.AddForCoord($.pack20x, $.pack20y, $.pack20z);
          $.pack20 = 1;
        }
        if (!(Car.IsDead($.remote_copter))) {
          Fx.DrawCorona($.pack20x, $.pack20y, $.pack20z, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 100, 100);
          if ($.remote_copter.locate3D($.pack20x, $.pack20y, $.pack20z, 2.0, 2.0, 2.0, false /* FALSE */)) {
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
            $.pack20blip.remove();
            $.pack_counter--;
            $.pack20 = 2;
          }
        }
      }
    }


    //player passes if they collect coronas within time
    if ($.pack_counter == 0) {
      if (!(Car.IsDead($.vanforrc))) {
        if ($.timer_for_rcraider_coronas > 0) {
          $.vanforrc.lockDoors(1 /* CARLOCK_UNLOCKED */);
          // SCM GOTO → mission_rcbuggy1_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rcbuggy1_passed"); // fallback: would break linear control flow
        }
      }
    }

    //warning out of range
    if (!(Car.IsDead($.remote_copter))) {
      if (!($.remote_copter.isInArea2D(-1881.576, -1612.496, -979.9678, -582.2634, false /* FALSE */))) {
        if ($.remote_copter.isInArea2D(-2104.88, -1655.804, -866.489, -430.5, false /* FALSE */)) {
          Text.PrintNow("RCH1_12", 3000, 1);
        }
      }
    }



    //out of range
    if (!(Car.IsDead($.remote_copter))) {
      if (!($.remote_copter.isInArea2D(-2104.88, -1655.804, -866.489, -430.5, false /* FALSE */))) {
        Rc.BlowUpBuggy();
        Text.PrintNow("RCH1_13", 5000, 1);
        // SCM GOTO → mission_rcbuggy1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rcbuggy1_failed"); // fallback: would break linear control flow
      }
    }

    //player fails if van is blown up is damaged
    if (Car.IsDead($.vanforrc)) {
      Text.PrintNow("WRECKED", 3000, 1); //"The vehicle's wrecked!"
      Rc.RemoveBuggy();
      // SCM GOTO → mission_rcbuggy1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rcbuggy1_failed"); // fallback: would break linear control flow
    }

    //or copter is dead
    if ($.player_in_topfun_van == 1) {
      if (Car.IsDead($.remote_copter)) {
        if (!($.pack_counter == 0)) {
          Text.PrintNow("WRECKED", 3000, 1); //"The vehicle's wrecked!"
          // SCM GOTO → mission_rcbuggy1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_rcbuggy1_failed"); // fallback: would break linear control flow
        }
      }
    }


  }
}




// ****************************************START OF CUTSCENE********************************


// **************************************** Mission haitian3 failed ************************


async function mission_rcbuggy1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
  $.player1.alterWantedLevel($.previous_wanted_level);
}




// **************************************** mission haitian3 passed ************************


async function mission_rcbuggy1_passed() {


  $.flag_complete_rcheli_once = 1;


  /// Works out time in mins and seconds

  $.race_timer_seconds_heli1 = $.timer_for_rcraider_coronas / 1000;


  Stat.RegisterFastestTime(5, $.race_timer_seconds_heli1);


  $.race_timer_mins_heli1 = $.race_timer_seconds_heli1 / 60;
  $.race_timer_seconds2_heli1 = $.race_timer_mins_heli1 * 60;
  $.race_timer_seconds_heli1 = $.race_timer_seconds_heli1 - $.race_timer_seconds2_heli1;


  if ($.race_timer_seconds_heli1 >= 10) {
    Text.PrintWith2NumbersNow("RCH1_9", $.race_timer_mins_heli1, $.race_timer_seconds_heli1, 7000, 1);
  }
  else {
    Text.PrintWith2NumbersNow("RCH1_10", $.race_timer_mins_heli1, $.race_timer_seconds_heli1, 7000, 1);
  }
  if ($.playerpassedrcheli == 0) {
    Stat.PlayerMadeProgress(1);
    Stat.RegisterOddjobMissionPassed();
    $.playerpassedrcheli = 1;
  }

  //REGISTER_MISSION_PASSED ( )

  Text.PrintWithNumberBig("M_PASS", 100, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  $.player1.addScore(100);
}




// ********************************** mission cleanup **************************************


async function mission_cleanup_rcbuggy1() {


  ONMISSION = 0;
  //MARK_MODEL_AS_NO_LONGER_NEEDED MALE01
  //MARK_CAR_AS_NO_LONGER_NEEDED delvan
  //MARK_CAR_AS_NO_LONGER_NEEDED newcar
  //BLOW_UP_RC_BUGGY
  //LOCK_CAR_DOORS vanforrc CARLOCK_UNLOCKED

  $.flag_player_on_rc_mission = 0;
  Hud.ClearTimer($.$id.timer_for_rcraider_coronas);
  Hud.ClearCounter($.$id.pack_counter);
  Rc.RemoveBuggy();
  if (!(Car.IsDead($.vanforrc))) {
    $.vanforrc.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  Streaming.MarkModelAsNoLongerNeeded(rcraider);
  Streaming.MarkModelAsNoLongerNeeded(infernus);
  $.pack1blip.remove();
  $.pack2blip.remove();
  $.pack3blip.remove();
  $.pack4blip.remove();
  $.pack5blip.remove();
  $.pack6blip.remove();
  $.pack7blip.remove();
  $.pack8blip.remove();
  $.pack9blip.remove();
  $.pack10blip.remove();
  $.pack11blip.remove();
  $.pack12blip.remove();
  $.pack13blip.remove();
  $.pack14blip.remove();
  $.pack15blip.remove();
  $.pack16blip.remove();
  $.pack17blip.remove();
  $.pack18blip.remove();
  $.pack19blip.remove();
  $.pack20blip.remove();
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  $.has_player_just_done_rcheli_mission = 1;
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function rcheli1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************		rcbuggy1 - Job 'Road Kill'	  **************************
  // *********Carl Pearson, delivery man.  He must not complete his deliveries.***************
  // *********blip on radar for bloke driving a van. Player must kill him before he completes*
  // *********deliveries. Set car to wander randomly, then after a set time, set car to goto**
  // *********coordinates. If he reaches location successfully, mission fails*****************
  // ******************************(discuss mechanics of this?).******************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************






  // SCRIPT_NAME RCHELI

  // Mission start stuff

  await mission_start_rcbuggy1();  // SCM GOSUB mission_start_rcbuggy1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_rcbuggy1_failed();  // SCM GOSUB mission_rcbuggy1_failed
  }


  await mission_cleanup_rcbuggy1();  // SCM GOSUB mission_cleanup_rcbuggy1


  // MissionBoundary

  //teststuff

  // VAR_INT cartest
  // VAR_INT mantest


  // Variables for mission

  // VAR_INT vanforrc
  // VAR_INT remote_copter
  // VAR_INT timer_for_rcraider_coronas
  // VAR_INT previous_wanted_level

  //flags

  // VAR_INT player_in_topfun_van
  // VAR_INT pack_counter
  // VAR_INT pack1
  // VAR_INT pack2
  // VAR_INT pack3
  // VAR_INT pack4
  // VAR_INT pack5
  // VAR_INT pack6
  // VAR_INT pack7
  // VAR_INT pack8
  // VAR_INT pack9
  // VAR_INT pack10
  // VAR_INT pack11
  // VAR_INT pack12
  // VAR_INT pack13
  // VAR_INT pack14
  // VAR_INT pack15
  // VAR_INT pack16
  // VAR_INT pack17
  // VAR_INT pack18
  // VAR_INT pack19
  // VAR_INT pack20



  //coords

  // VAR_FLOAT pack1x pack1y pack1z
  // VAR_FLOAT pack2x pack2y pack2z
  // VAR_FLOAT pack3x pack3y pack3z
  // VAR_FLOAT pack4x pack4y pack4z
  // VAR_FLOAT pack5x pack5y pack5z
  // VAR_FLOAT pack6x pack6y pack6z
  // VAR_FLOAT pack7x pack7y pack7z
  // VAR_FLOAT pack8x pack8y pack8z
  // VAR_FLOAT pack9x pack9y pack9z
  // VAR_FLOAT pack10x pack10y pack10z
  // VAR_FLOAT pack11x pack11y pack11z
  // VAR_FLOAT pack12x pack12y pack12z
  // VAR_FLOAT pack13x pack13y pack13z
  // VAR_FLOAT pack14x pack14y pack14z
  // VAR_FLOAT pack15x pack15y pack15z
  // VAR_FLOAT pack16x pack16y pack16z
  // VAR_FLOAT pack17x pack17y pack17z
  // VAR_FLOAT pack18x pack18y pack18z
  // VAR_FLOAT pack19x pack19y pack19z
  // VAR_FLOAT pack20x pack20y pack20z
  //blips


  // VAR_INT pack1blip
  // VAR_INT pack2blip
  // VAR_INT pack3blip
  // VAR_INT pack4blip
  // VAR_INT pack5blip
  // VAR_INT pack6blip
  // VAR_INT pack7blip
  // VAR_INT pack8blip
  // VAR_INT pack9blip
  // VAR_INT pack10blip
  // VAR_INT pack11blip
  // VAR_INT pack12blip
  // VAR_INT pack13blip
  // VAR_INT pack14blip
  // VAR_INT pack15blip
  // VAR_INT pack16blip
  // VAR_INT pack17blip
  // VAR_INT pack18blip
  // VAR_INT pack19blip
  // VAR_INT pack20blip

  //time stuff

  // VAR_INT race_timer_seconds_heli1
  // VAR_INT race_timer_mins_heli1
  // VAR_INT race_timer_seconds2_heli1 playerpassedrcheli



  // **************************************** Mission Start **********************************


}
