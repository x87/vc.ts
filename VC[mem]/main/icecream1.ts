// Generated from main/icecream1.sc

import { $ } from "../vars.mts";

async function mission_start_icecream1() {


  ONMISSION = 1;


  if ($.assetnoticegot == 0) {
    Stat.RegisterMissionGiven();
  }


  // SCRIPT_NAME ICECRE1
  await asyncWait(0);



  Text.LoadMissionText("ICECRE1");


  //DO_FADE 1500 FADE_IN


  //FLAGS

  $.ganghateflag = 0;
  $.starthating = 0;
  $.icecreamped1_flag = 0;
  $.icecreamped2_flag = 0;
  $.icecreamped3_flag = 0;
  $.icecreamped4_flag = 0;
  $.dealsdone_ice = 0;

  //player score

  $.player_icescore = 0;
  //wanted level counter

  $.wanted_level_counter_ice = 0;


  if ($.player1.isInAnyCar()) {
    $.icecream_car = $.player1.storeCarIsInNoSave();
  }
  else {
    // SCM GOTO → mission_icecream1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_icecream1_failed"); // fallback: would break linear control flow
  }

  ////////////////////////////////////////////////	INTRO CUTSCENE		//////////////////////////////////////////////////

  World.ClearArea(-868.1, -572.153, 10.11, 3.0, false /* FALSE */);
  World.ClearArea(-859.749146, -571.028015, 11.112072, 1.0, false /* FALSE */);


  Camera.SetFixedPosition(-859.749146, -571.028015, 14.112072, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-860.673157, -571.14318, 13.747513, 2 /* JUMP_CUT */);


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("ICC1_16", 5000, 2);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */) && TIMERA > 1000) {
      // SCM GOTO → end_of_icecream_cutscene (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_icecream_cutscene"); // fallback: would break linear control flow
    }


  }



  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("ICC1_7", 5000, 2);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → end_of_icecream_cutscene (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_icecream_cutscene"); // fallback: would break linear control flow
    }


  }



  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("ICC1_8", 5000, 2);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → end_of_icecream_cutscene (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_icecream_cutscene"); // fallback: would break linear control flow
    }



  }


  TIMERA = 0;


  while (TIMERA < 5000) {
    await asyncWait(0);
    Text.PrintNow("ICC1_9", 5000, 2);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → end_of_icecream_cutscene (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_icecream_cutscene"); // fallback: would break linear control flow
    }



  }
}



async function end_of_icecream_cutscene() {
  Text.ClearPrints();
  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Camera.RestoreJumpcut();
  TIMERB = 0;
}




async function icecreamloop() {
  // SCM GOTO → icecreamloop lowered to endless loop
  while (true) {


    await asyncWait(0);

    /////////////////////////////////////////////		SETUP GANGS TO HATE PLAYER		//////////////////////////////////////

    if ($.starthating == 0) {
      if (!(Car.IsDead($.icecream_car))) {
        if ($.icecream_car.isIcecreamJingleOn()) {
          Hud.DisplayCounterWithString($.$id.dealsdone_ice, 0 /* COUNTER_DISPLAY_NUMBER */, "ICC1_5");
          $.ganghateflag = 1;
          $.starthating = 1;
        }
      }
    }


    if ($.ganghateflag == 1) {
      Game.SetThreatForPedType(PEDTYPE_GANG_HAITIAN, 1 /* THREAT_PLAYER1 */);
      Game.SetThreatForPedType(PEDTYPE_GANG_CUBAN, 1 /* THREAT_PLAYER1 */);
      Game.SetThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
      Game.SetThreatForPedType(PEDTYPE_GANG_SECURITY, 1 /* THREAT_PLAYER1 */);
      Game.SetThreatForPedType(PEDTYPE_GANG_BIKER, 1 /* THREAT_PLAYER1 */);
      Game.SetThreatForPedType(PEDTYPE_GANG_GOLFER, 1 /* THREAT_PLAYER1 */);
      $.ganghateflag = 2;
    }


    ///////////////////////////////////////////		PLAYER MUST BE IN VAN		/////////////////////////////////////////////////


    if (!(Car.IsDead($.icecream_car))) {
      if (!($.player1.isInCar($.icecream_car))) {
        // SCM GOTO → mission_icecream1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_icecream1_passed"); // fallback: would break linear control flow
      }
    }


    if (Car.IsDead($.icecream_car)) {
      // SCM GOTO → mission_icecream1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_icecream1_passed"); // fallback: would break linear control flow
    }

    ///////////////////////////////////////////		GRAB PEDS		/////////////////////////////////////////////////////////////



    if (!(Car.IsDead($.icecream_car))) {
      if ($.player1.isStopped()) {
        if ($.icecream_car.isIcecreamJingleOn()) {
          const _res281 = $.player1.getCoordinates();
$.playericex = _res281.x;
$.playericey = _res281.y;
$.playericez = _res281.z;
          $.playericex1 = $.playericex + 20.0;
          $.playericey1 = $.playericey + 20.0;
          $.playericex2 = $.playericex - 20.0;
          $.playericey2 = $.playericey - 20.0;

          //1st ped buying icecream
          if ($.icecreamped1_flag == 0) {
            $.icecreamped1 = World.GetRandomIceCreamCustomerInArea($.playericex1, $.playericey1, $.playericex2, $.playericey2, 1 /* TRUE */, 0 /* FALSE */, 1 /* TRUE */);
            if (!($.icecreamped1 == -1)) {
              if (!(Char.IsDead($.icecreamped1))) {
                $.icecreamped1_return = $.icecreamped1.setObjBuyIceCream($.icecream_car);
                if ($.icecreamped1_return == 1) {
                  $.icecreamped1_blip = Blip.AddForChar($.icecreamped1);
                  $.icecreamped1_start_timer = Clock.GetGameTimer();
                  $.icecreamped1_flag = 1;
                }
                else {
                  $.icecreamped1.markAsNoLongerNeeded();
                }
              }
            }


          }


          //2nd ped buying icecream
          if ($.icecreamped2_flag == 0) {
            $.icecreamped2 = World.GetRandomIceCreamCustomerInArea($.playericex1, $.playericey1, $.playericex2, $.playericey2, 1 /* TRUE */, 0 /* FALSE */, 1 /* TRUE */);
            if (!($.icecreamped2 == -1)) {
              if (!(Char.IsDead($.icecreamped2))) {
                $.icecreamped2_return = $.icecreamped2.setObjBuyIceCream($.icecream_car);
                if ($.icecreamped2_return == 1) {
                  $.icecreamped2_blip = Blip.AddForChar($.icecreamped2);
                  $.icecreamped2_start_timer = Clock.GetGameTimer();
                  $.icecreamped2_flag = 1;
                }
                else {
                  $.icecreamped2.markAsNoLongerNeeded();
                }
              }
            }


          }


          //3rd ped buying icecream
          if ($.icecreamped3_flag == 0) {
            $.icecreamped3 = World.GetRandomIceCreamCustomerInArea($.playericex1, $.playericey1, $.playericex2, $.playericey2, 1 /* TRUE */, 0 /* FALSE */, 1 /* TRUE */);
            if (!($.icecreamped3 == -1)) {
              if (!(Char.IsDead($.icecreamped3))) {
                $.icecreamped3_return = $.icecreamped3.setObjBuyIceCream($.icecream_car);
                if ($.icecreamped3_return == 1) {
                  $.icecreamped3_blip = Blip.AddForChar($.icecreamped3);
                  $.icecreamped3_start_timer = Clock.GetGameTimer();
                  $.icecreamped3_flag = 1;
                }
                else {
                  $.icecreamped3.markAsNoLongerNeeded();
                }
              }
            }


          }

          //4th ped buying icecream
          if ($.icecreamped4_flag == 0) {
            $.icecreamped4 = World.GetRandomIceCreamCustomerInArea($.playericex1, $.playericey1, $.playericex2, $.playericey2, 1 /* TRUE */, 0 /* FALSE */, 1 /* TRUE */);
            if (!($.icecreamped4 == -1)) {
              if (!(Char.IsDead($.icecreamped4))) {
                $.icecreamped4_return = $.icecreamped4.setObjBuyIceCream($.icecream_car);
                if ($.icecreamped4_return == 1) {
                  $.icecreamped4_blip = Blip.AddForChar($.icecreamped4);
                  $.icecreamped4_start_timer = Clock.GetGameTimer();
                  $.icecreamped4_flag = 1;
                }
                else {
                  $.icecreamped4.markAsNoLongerNeeded();
                }
              }
            }


          }


          //no customers in area
          if ($.icecreamped1 == -1) {
            if ($.icecreamped2 == -1) {
              if ($.icecreamped3 == -1) {
                if ($.icecreamped4 == -1) {
                  Text.PrintNow("ICC1_4", 1000, 1);


                }
              }
            }
          }



        }
      }
    }

    ///////////////////////////////////////////	  BLIP MANAGEMENT		/////////////////////////////////////////

    //1st ped

    if ($.icecreamped1_flag == 1) {
      if (!(Char.IsDead($.icecreamped1))) {
        $.icecreamped1_end_deal = Clock.GetGameTimer();
        $.icecreamped1_safety_timer = $.icecreamped1_end_deal - $.icecreamped1_start_timer;
        if ($.icecreamped1_safety_timer < 50000) {
          if ($.icecreamped1.hasAttemptedAttractor()) {
            if ($.icecreamped1.hasBoughtIceCream()) {
              $.dealsdone_ice = $.dealsdone_ice + 1;
              $.wanted_level_counter_ice = $.wanted_level_counter_ice + 1;
              if ($.player1.isInZone("A_PORT")) {
                $.player1.addScore(10);
                $.player_icescore = $.player_icescore + 12;
              }
              else {
                if ($.player1.isInZone("STARI")) {
                  $.player1.addScore(15);
                  $.player_icescore = $.player_icescore + 18;
                }
                else {
                  if ($.player1.isInZone("PORNI")) {
                    $.player1.addScore(12);
                    $.player_icescore = $.player_icescore + 14;
                  }
                  else {
                    if ($.player1.isInZone("GOLFC")) {
                      $.player1.addScore(8);
                      $.player_icescore = $.player_icescore + 10;
                    }
                    else {
                      if ($.player1.isInZone("DOCKS")) {
                        $.player1.addScore(8);
                        $.player_icescore = $.player_icescore + 10;
                      }
                      else {
                        if ($.player1.isInZone("HAVANA")) {
                          $.player1.addScore(6);
                          $.player_icescore = $.player_icescore + 8;
                        }
                        else {
                          if ($.player1.isInZone("HAITI")) {
                            $.player1.addScore(6);
                            $.player_icescore = $.player_icescore + 8;
                          }
                          else {
                            $.player1.addScore(12);
                            $.player_icescore = $.player_icescore + 10;
                          }
                        }
                      }
                    }
                  }
                }
              }


            }
            $.icecreamped1_blip.remove();
            $.icecreamped1.markAsNoLongerNeeded();
            $.icecreamped1_flag = 0;
          }
        }
        else {
          $.icecreamped1_blip.remove();
          $.icecreamped1.markAsNoLongerNeeded();
          $.icecreamped1_flag = 0;
        }
      }
      else {
        $.icecreamped1_blip.remove();
        $.icecreamped1.markAsNoLongerNeeded();
        $.icecreamped1_flag = 0;
      }
    }


    //2nd ped

    if ($.icecreamped2_flag == 1) {
      if (!(Char.IsDead($.icecreamped2))) {
        $.icecreamped2_end_deal = Clock.GetGameTimer();
        $.icecreamped2_safety_timer = $.icecreamped2_end_deal - $.icecreamped2_start_timer;
        if ($.icecreamped2_safety_timer < 50000) {
          if ($.icecreamped2.hasAttemptedAttractor()) {
            if ($.icecreamped2.hasBoughtIceCream()) {
              $.dealsdone_ice = $.dealsdone_ice + 1;
              $.wanted_level_counter_ice = $.wanted_level_counter_ice + 1;
              if ($.player1.isInZone("A_PORT")) {
                $.player1.addScore(10);
                $.player_icescore = $.player_icescore + 12;
              }
              else {
                if ($.player1.isInZone("STARI")) {
                  $.player1.addScore(15);
                  $.player_icescore = $.player_icescore + 18;
                }
                else {
                  if ($.player1.isInZone("PORNI")) {
                    $.player1.addScore(12);
                    $.player_icescore = $.player_icescore + 14;
                  }
                  else {
                    if ($.player1.isInZone("GOLFC")) {
                      $.player1.addScore(8);
                      $.player_icescore = $.player_icescore + 10;
                    }
                    else {
                      if ($.player1.isInZone("DOCKS")) {
                        $.player1.addScore(8);
                        $.player_icescore = $.player_icescore + 10;
                      }
                      else {
                        if ($.player1.isInZone("HAVANA")) {
                          $.player1.addScore(6);
                          $.player_icescore = $.player_icescore + 8;
                        }
                        else {
                          if ($.player1.isInZone("HAITI")) {
                            $.player1.addScore(6);
                            $.player_icescore = $.player_icescore + 8;
                          }
                          else {
                            $.player1.addScore(12);
                            $.player_icescore = $.player_icescore + 10;
                          }
                        }
                      }
                    }
                  }
                }
              }


            }
            $.icecreamped2_blip.remove();
            $.icecreamped2.markAsNoLongerNeeded();
            $.icecreamped2_flag = 0;
          }
        }
        else {
          $.icecreamped2_blip.remove();
          $.icecreamped2.markAsNoLongerNeeded();
          $.icecreamped2_flag = 0;
        }
      }
      else {
        $.icecreamped2_blip.remove();
        $.icecreamped2.markAsNoLongerNeeded();
        $.icecreamped2_flag = 0;
      }
    }

    //3rd ped

    if ($.icecreamped3_flag == 1) {
      if (!(Char.IsDead($.icecreamped3))) {
        $.icecreamped3_end_deal = Clock.GetGameTimer();
        $.icecreamped3_safety_timer = $.icecreamped3_end_deal - $.icecreamped3_start_timer;
        if ($.icecreamped3_safety_timer < 50000) {
          if ($.icecreamped3.hasAttemptedAttractor()) {
            if ($.icecreamped3.hasBoughtIceCream()) {
              $.dealsdone_ice = $.dealsdone_ice + 1;
              $.wanted_level_counter_ice = $.wanted_level_counter_ice + 1;
              if ($.player1.isInZone("A_PORT")) {
                $.player1.addScore(10);
                $.player_icescore = $.player_icescore + 12;
              }
              else {
                if ($.player1.isInZone("STARI")) {
                  $.player1.addScore(15);
                  $.player_icescore = $.player_icescore + 18;
                }
                else {
                  if ($.player1.isInZone("PORNI")) {
                    $.player1.addScore(12);
                    $.player_icescore = $.player_icescore + 14;
                  }
                  else {
                    if ($.player1.isInZone("GOLFC")) {
                      $.player1.addScore(8);
                      $.player_icescore = $.player_icescore + 10;
                    }
                    else {
                      if ($.player1.isInZone("DOCKS")) {
                        $.player1.addScore(8);
                        $.player_icescore = $.player_icescore + 10;
                      }
                      else {
                        if ($.player1.isInZone("HAVANA")) {
                          $.player1.addScore(6);
                          $.player_icescore = $.player_icescore + 8;
                        }
                        else {
                          if ($.player1.isInZone("HAITI")) {
                            $.player1.addScore(6);
                            $.player_icescore = $.player_icescore + 8;
                          }
                          else {
                            $.player1.addScore(12);
                            $.player_icescore = $.player_icescore + 10;
                          }
                        }
                      }
                    }
                  }
                }
              }


            }
            $.icecreamped3_blip.remove();
            $.icecreamped3.markAsNoLongerNeeded();
            $.icecreamped3_flag = 0;
          }
        }
        else {
          $.icecreamped3_blip.remove();
          $.icecreamped3.markAsNoLongerNeeded();
          $.icecreamped3_flag = 0;
        }
      }
      else {
        $.icecreamped3_blip.remove();
        $.icecreamped3.markAsNoLongerNeeded();
        $.icecreamped3_flag = 0;
      }
    }


    //4th ped

    if ($.icecreamped4_flag == 1) {
      if (!(Char.IsDead($.icecreamped4))) {
        $.icecreamped4_end_deal = Clock.GetGameTimer();
        $.icecreamped4_safety_timer = $.icecreamped4_end_deal - $.icecreamped4_start_timer;
        if ($.icecreamped4_safety_timer < 50000) {
          if ($.icecreamped4.hasAttemptedAttractor()) {
            if ($.icecreamped4.hasBoughtIceCream()) {
              $.dealsdone_ice = $.dealsdone_ice + 1;
              $.wanted_level_counter_ice = $.wanted_level_counter_ice + 1;
              if ($.player1.isInZone("A_PORT")) {
                $.player1.addScore(10);
                $.player_icescore = $.player_icescore + 12;
              }
              else {
                if ($.player1.isInZone("STARI")) {
                  $.player1.addScore(15);
                  $.player_icescore = $.player_icescore + 18;
                }
                else {
                  if ($.player1.isInZone("PORNI")) {
                    $.player1.addScore(12);
                    $.player_icescore = $.player_icescore + 14;
                  }
                  else {
                    if ($.player1.isInZone("GOLFC")) {
                      $.player1.addScore(8);
                      $.player_icescore = $.player_icescore + 10;
                    }
                    else {
                      if ($.player1.isInZone("DOCKS")) {
                        $.player1.addScore(8);
                        $.player_icescore = $.player_icescore + 10;
                      }
                      else {
                        if ($.player1.isInZone("HAVANA")) {
                          $.player1.addScore(6);
                          $.player_icescore = $.player_icescore + 8;
                        }
                        else {
                          if ($.player1.isInZone("HAITI")) {
                            $.player1.addScore(6);
                            $.player_icescore = $.player_icescore + 8;
                          }
                          else {
                            $.player1.addScore(12);
                            $.player_icescore = $.player_icescore + 10;
                          }
                        }
                      }
                    }
                  }
                }
              }


            }
            $.icecreamped4_blip.remove();
            $.icecreamped4.markAsNoLongerNeeded();
            $.icecreamped4_flag = 0;
          }
        }
        else {
          $.icecreamped4_blip.remove();
          $.icecreamped4.markAsNoLongerNeeded();
          $.icecreamped4_flag = 0;
        }
      }
      else {
        $.icecreamped4_blip.remove();
        $.icecreamped4.markAsNoLongerNeeded();
        $.icecreamped4_flag = 0;
      }
    }


    //////////////////////////////////////////	WANTED LEVEL MANAGEMENT		/////////////////////////////////////


    if ($.wanted_level_counter_ice >= 4) {
      $.wantedlevel_icecream = $.player1.storeWantedLevel();
      $.wantedlevel_icecream = $.wantedlevel_icecream + 1;
      $.player1.alterWantedLevel($.wantedlevel_icecream);
      $.wanted_level_counter_ice = 0;
    }


  }
}








// Mission icecream1 failed

async function mission_icecream1_failed() {

}




// mission icecream1 passed


async function mission_icecream1_passed() {


  if ($.assetnoticegot == 0) {
    if ($.dealsdone_ice > 49) {
      $.player1.setControl(false /* OFF */);
      Hud.SwitchWidescreen(true /* ON */);
      $.player1.clearWantedLevel();
      Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
      await asyncWait(1000);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      Streaming.LoadScene(-839.512, -582.021, 24.777);
      const _res282 = $.player1.getCoordinates();
$.playericex = _res282.x;
$.playericey = _res282.y;
$.playericez = _res282.z;
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Camera.DoFade(1000, 1 /* FADE_IN */);
      Camera.SetFixedPosition(-839.512, -582.021, 24.777, 0.0, 0.0, 0.0); //ROTATE UP
      Camera.PointAtPoint(-840.451, -581.759, 24.553, 2 /* JUMP_CUT */);
      $.icecream_cash_pickup = Pickup.CreateProtection($.icebuyX, $.icebuyY, $.icebuyZ, $.icecream_revenue, $.icecream_revenue);



      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.PrintBig("ICE_AT1", 5000, 6);
      await asyncWait(5000);
      Text.PrintWithNumberNow("ICE_AT2", $.icecream_revenue, 6000, 1);
      await asyncWait(6000);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Hud.SwitchWidescreen(false /* OFF */);
      Camera.RestoreJumpcut();
      Streaming.LoadScene($.playericex, $.playericey, $.playericez);
      ++$.counter_60_percent;
      Camera.DoFade(1000, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Stat.PlayerMadeProgress(1);
      $.player1.setControl(true /* ON */);
      Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
      Stat.RegisterMissionPassed("CREAM");
      Audio.PlayMissionPassedTune(1);
      $.icecream_asset_acquired = 1;
      $.assetnoticegot = 1;


    }
  }
}




// mission cleanup

async function mission_cleanup_icecream1() {


  ONMISSION = 0;


  Text.PrintBig("ICC1_17", 5000, 5); //ice cream mission over
  Text.PrintWithNumberBig("ICC1_19", $.dealsdone_ice, 5000, 6); //Deals done...


  if (!($.flag_cuban_mission4_passed == 1)) {
    Game.ClearThreatForPedType(PEDTYPE_GANG_HAITIAN, 1 /* THREAT_PLAYER1 */);
  }
  Game.ClearThreatForPedType(PEDTYPE_GANG_CUBAN, 1 /* THREAT_PLAYER1 */);
  Game.ClearThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
  Game.ClearThreatForPedType(PEDTYPE_GANG_SECURITY, 1 /* THREAT_PLAYER1 */);
  Game.ClearThreatForPedType(PEDTYPE_GANG_BIKER, 1 /* THREAT_PLAYER1 */);
  Game.ClearThreatForPedType(PEDTYPE_GANG_GOLFER, 1 /* THREAT_PLAYER1 */);
  $.icecreamped1_blip.remove();
  $.icecreamped2_blip.remove();
  $.icecreamped3_blip.remove();
  $.icecreamped4_blip.remove();
  $.icecreamped1.markAsNoLongerNeeded();
  $.icecreamped2.markAsNoLongerNeeded();
  $.icecreamped3.markAsNoLongerNeeded();
  $.icecreamped4.markAsNoLongerNeeded();
  Hud.ClearCounter($.$id.dealsdone_ice);
  Stat.AddIceCreamsSold($.dealsdone_ice);
  Stat.RegisterHighestScore(2, $.dealsdone_ice);
  Mission.Finish();
  return;




  /////////////////////////////////////////////////////////////////////

}

export async function icecream1() {
  // MissionBoundary

  // *******************************************************************************************
  // ************************************* Ice Cream 1 *****************************************
  // ********************************** Drug Distribution **************************************
  // *******************************************************************************************
  // *******************************************************************************************

  // Mission start stuff


  await mission_start_icecream1();  // SCM GOSUB mission_start_icecream1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_icecream1_failed();  // SCM GOSUB mission_icecream1_failed
  }


  await mission_cleanup_icecream1();  // SCM GOSUB mission_cleanup_icecream1


  // MissionBoundary


  // Variables for mission

  // VAR_INT icecream_car
  // VAR_FLOAT playericex playericey playericez
  // VAR_FLOAT playericex1 playericey1 playericex2 playericey2
  // VAR_INT icecreamped1 icecreamped1_return
  // VAR_INT icecreamped2 icecreamped2_return
  // VAR_INT icecreamped3 icecreamped3_return
  // VAR_INT icecreamped4 icecreamped4_return
  // VAR_INT wantedlevel_icecream

  ////////////////////////////////////////////////////	flags	/////////////////////////////////////

  // VAR_INT ganghateflag
  // VAR_INT starthating
  // VAR_INT icecreamped1_flag
  // VAR_INT icecreamped2_flag
  // VAR_INT icecreamped3_flag
  // VAR_INT icecreamped4_flag
  // VAR_INT assetnoticegot
  // VAR_INT dealsdone_ice
  //player score

  // VAR_INT player_icescore
  //wanted level counter

  // VAR_INT wanted_level_counter_ice



  //blips

  // VAR_INT icecreamped1_blip
  // VAR_INT icecreamped2_blip
  // VAR_INT icecreamped3_blip
  // VAR_INT icecreamped4_blip

  //timers

  // VAR_INT icecreamped1_safety_timer
  // VAR_INT icecreamped1_end_deal
  // VAR_INT icecreamped1_start_timer


  // VAR_INT icecreamped2_safety_timer
  // VAR_INT icecreamped2_end_deal
  // VAR_INT icecreamped2_start_timer


  // VAR_INT icecreamped3_safety_timer
  // VAR_INT icecreamped3_end_deal
  // VAR_INT icecreamped3_start_timer


  // VAR_INT icecreamped4_safety_timer
  // VAR_INT icecreamped4_end_deal
  // VAR_INT icecreamped4_start_timer
  // ***************************************Mission Start*************************************


}
