// Generated from main/interiors.sc

import { $ } from "../vars.mts";

async function mission_start_interiors() {




  // START_NEW_SCRIPT interiors
  //START_NEW_SCRIPT airport_security
  //START_NEW_SCRIPT aport2_security


  // MissionBoundary
}






async function interiors() {


  $.flag_eject = 0;


  // SCRIPT_NAME SHIT




  // SCM GOTO → bingle_bongle (not lowered; manual jump required)
  throw new Error("unresolved GOTO bingle_bongle"); // fallback: would break linear control flow
  $.strip_doors = ScriptObject.CreateNoOffset(stripclbdropen, 97.203, -1469.731, 10.578);
  $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_open, 490.34, -77.017, 11.598);
  $.cop_doors = ScriptObject.CreateNoOffset(cop_dr_closed, 396.545, -472.883, 12.6);
  $.strip_door_poledance = ScriptObject.CreateNoOffset(strpbckdrclsd, 68.988, -1444.242, 10.727);
}

async function bingle_bongle() {

}



async function interiors_inner() {
  // SCM GOTO → interiors_inner lowered to endless loop
  while (true) {


    await asyncWait(0);
    ++$.pooz_counter;


    // **************************** THE STRIP CLUB ********************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.pooz_counter == 1) {
        if ($.player1.isInZone("BEACH1") || $.flag_player_on_rc_mission == 1) {
          if ($.flag_membership == 1) {
            if (ONMISSION == 0) {
              if ($.flag_strip_doors_open == 0) {
                $.strip_doors.delete();
                $.strip_doors = ScriptObject.CreateNoOffset(stripclbdropen, 97.203, -1469.731, 10.578);
                $.strip_doors.dontRemove();
                $.flag_strip_doors_open = 1;
                $.flag_strip_doors_closed = 0;
              }
            }
            else {
              if ($.flag_strip_doors_closed == 0) {
                $.strip_doors.delete();
                $.strip_doors = ScriptObject.CreateNoOffset(stripclbdrclsd, 97.203, -1469.731, 10.578);
                $.strip_doors.dontRemove();
                $.flag_strip_doors_closed = 1;
                $.flag_strip_doors_open = 0;
              }
            }
            if ($.player1.isPlaying()) {
              if ($.flag_player_in_stripclub == 0 && ONMISSION == 0) {
                if ($.player1.isInRemoteMode()) {
                  $.player_car_interiors = Rc.GetCar($.player1);
                  if (!(Car.IsDead($.player_car_interiors))) {
                    if ($.player_car_interiors.locate3D(95.3, -1468.3, 9.5, 1.5, 1.5, 3.0, false /* FALSE */)) {
                      Rc.BlowUpBuggy();
                    }
                  }
                }
                else {
                  if ($.player1.locateAnyMeans3D(95.3, -1468.3, 9.5, 1.5, 1.5, 3.0, false /* FALSE */)) {
                    if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                      // SCM GOTO → interiors_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                    }
                    $.flag_player_in_stripclub = 1;
                    Text.PrintBig("STRIP", 3000, 2); //"The Malibu1"
                    await transition_1();  // SCM GOSUB transition_1
                    if ($.player1.isPlaying()) {
                      if ($.player1.isOnAnyBike() || $.player1.isInModel(CADDY)) {
                        $.player_car_interiors = $.player1.storeCarIsInNoSave();
                        $.player1.warpFromCarToCoord(91.2, -1460.9, 10.0);
                        $.player_car_interiors.delete();
                      }
                    }
                    if (Game.IsAustralian()) {
                      const _res283 = $.scplayer.getWeaponInSlot(1);
$.jobby_1 = _res283.weaponType;
$.ammo_slot_1 = _res283.weaponAmmo;
$.weapon_model_slot_1 = _res283.weaponModel;
                      const _res284 = $.scplayer.getWeaponInSlot(2);
$.jobby_2 = _res284.weaponType;
$.ammo_slot_2 = _res284.weaponAmmo;
$.weapon_model_slot_2 = _res284.weaponModel;
                      const _res285 = $.scplayer.getWeaponInSlot(3);
$.jobby_3 = _res285.weaponType;
$.ammo_slot_3 = _res285.weaponAmmo;
$.weapon_model_slot_3 = _res285.weaponModel;
                      const _res286 = $.scplayer.getWeaponInSlot(4);
$.jobby_4 = _res286.weaponType;
$.ammo_slot_4 = _res286.weaponAmmo;
$.weapon_model_slot_4 = _res286.weaponModel;
                      const _res287 = $.scplayer.getWeaponInSlot(5);
$.jobby_5 = _res287.weaponType;
$.ammo_slot_5 = _res287.weaponAmmo;
$.weapon_model_slot_5 = _res287.weaponModel;
                      const _res288 = $.scplayer.getWeaponInSlot(6);
$.jobby_6 = _res288.weaponType;
$.ammo_slot_6 = _res288.weaponAmmo;
$.weapon_model_slot_6 = _res288.weaponModel;
                      const _res289 = $.scplayer.getWeaponInSlot(7);
$.jobby_7 = _res289.weaponType;
$.ammo_slot_7 = _res289.weaponAmmo;
$.weapon_model_slot_7 = _res289.weaponModel;
                      const _res290 = $.scplayer.getWeaponInSlot(8);
$.jobby_8 = _res290.weaponType;
$.ammo_slot_8 = _res290.weaponAmmo;
$.weapon_model_slot_8 = _res290.weaponModel;
                      const _res291 = $.scplayer.getWeaponInSlot(9);
$.jobby_9 = _res291.weaponType;
$.ammo_slot_9 = _res291.weaponAmmo;
$.weapon_model_slot_9 = _res291.weaponModel;
                      $.player1.removeAllWeapons();
                    }


                    if ($.flag_eject == 0) {
                      Streaming.SetAreaVisible(VIS_STRIP_CLUB);
                      Streaming.LoadScene(91.2, -1460.9, 10.6);
                      $.player1.setCoordinates(91.2, -1460.9, 10.0);
                      $.player1.setHeading(40.0);
                      //SET_CAMERA_IN_FRONT_OF_PLAYER
                      World.SetExtraColors(2, false /* FALSE */);
                      World.SetCarDensityMultiplier(0.1);
                      World.SwitchRubbish(false /* OFF */);
                    }
                    else {
                      // SCM GOTO → interiors_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                    }
                    await transition_2();  // SCM GOSUB transition_2
                  }
                }
              }
              if ($.flag_player_in_stripclub == 1) {
                if ($.player1.locateAnyMeans3D(92.23, -1463.1, 9.5, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  if ($.player1.isInAnyCar()) {
                    //AND NOT IS_PLAYER_ON_ANY_BIKE player1
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  Text.PrintBig("BEACH1", 3000, 2); //"The Malibu1"
                  await transition_1();  // SCM GOSUB transition_1
                  if ($.flag_eject == 0) {
                    $.flag_player_in_stripclub = 0;
                    await outgoing();  // SCM GOSUB outgoing
                    World.ClearArea(97.7, -1472.2, 10.5, 1.0, false /* FALSE */);
                    Streaming.LoadScene(97.7, -1472.2, 10.5);
                    $.player1.setCoordinates(97.7, -1472.2, 9.7);
                    $.player1.setHeading(280.0);
                    Camera.SetInFrontOfPlayer();
                    if (Game.IsAustralian()) {
                      const _res292 = $.scplayer.getWeaponInSlot(1);
$.stroop = _res292.weaponType;
$.stroop = _res292.weaponAmmo;
$.weapon_strip = _res292.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_1;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_1, $.ammo_slot_1);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res293 = $.scplayer.getWeaponInSlot(2);
$.stroop = _res293.weaponType;
$.stroop = _res293.weaponAmmo;
$.weapon_strip = _res293.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_2;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_2, $.ammo_slot_2);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res294 = $.scplayer.getWeaponInSlot(3);
$.stroop = _res294.weaponType;
$.stroop = _res294.weaponAmmo;
$.weapon_strip = _res294.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_3;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_3, $.ammo_slot_3);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res295 = $.scplayer.getWeaponInSlot(4);
$.stroop = _res295.weaponType;
$.stroop = _res295.weaponAmmo;
$.weapon_strip = _res295.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_4;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_4, $.ammo_slot_4);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res296 = $.scplayer.getWeaponInSlot(5);
$.stroop = _res296.weaponType;
$.stroop = _res296.weaponAmmo;
$.weapon_strip = _res296.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_5;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_5, $.ammo_slot_5);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res297 = $.scplayer.getWeaponInSlot(6);
$.stroop = _res297.weaponType;
$.stroop = _res297.weaponAmmo;
$.weapon_strip = _res297.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_6;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_6, $.ammo_slot_6);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res298 = $.scplayer.getWeaponInSlot(7);
$.stroop = _res298.weaponType;
$.stroop = _res298.weaponAmmo;
$.weapon_strip = _res298.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_7;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_7, $.ammo_slot_7);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res299 = $.scplayer.getWeaponInSlot(8);
$.stroop = _res299.weaponType;
$.stroop = _res299.weaponAmmo;
$.weapon_strip = _res299.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_8;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_8, $.ammo_slot_8);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                      const _res300 = $.scplayer.getWeaponInSlot(9);
$.stroop = _res300.weaponType;
$.stroop = _res300.weaponAmmo;
$.weapon_strip = _res300.weaponModel;
                      if (!($.weapon_strip == 0 /* WEAPONTYPE_UNARMED */)) {
                        $.weapon_strip = $.weapon_model_slot_9;
                        await aussie();  // SCM GOSUB aussie
                        if ($.player1.isPlaying()) {
                          $.player1.giveWeapon($.jobby_9, $.ammo_slot_9);
                        }
                        await aussie2();  // SCM GOSUB aussie2
                      }
                    }


                  }
                  else {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  await transition_2();  // SCM GOSUB transition_2
                }
              }
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // ******************************* HOTEL **************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.pooz_counter == 2) {
        if ($.player1.isInZone("BEACH1") || $.flag_player_on_rc_mission == 1) {
          if ($.flag_player_in_hotel == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(229.5, -1277.7, 11.5, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.isInArea3D(222.0, -1274.0, 11.0, 229.0, -1280.7, 14.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("HOTEL", 3000, 2); //"The Malibu1"
                await transition_1();  // SCM GOSUB transition_1
                if ($.player1.isPlaying()) {
                  if ($.player1.isOnAnyBike()) {
                    $.player_car_interiors = $.player1.storeCarIsInNoSave();
                    $.player1.warpFromCarToCoord(225.0, -1277.3, 11.5);
                    $.player_car_interiors.delete();
                  }
                }
                if ($.flag_eject == 0) {
                  $.flag_player_in_hotel = 1;
                  Streaming.SetAreaVisible(VIS_HOTEL);
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(225.0, -1277.3, 12.0);
                  $.player1.setCoordinates(225.0, -1277.3, 11.5);
                  $.player1.setHeading(80.0);
                  World.SetExtraColors(3, false /* FALSE */);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_hotel == 1) {
            if ($.player1.isInArea3D(235.0, -1274.0, 11.0, 227.5, .0, -1280.7, 16.0, 0 /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH1", 3000, 2); //"Ocean Drive"
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                await outgoing();  // SCM GOSUB outgoing
                $.flag_player_in_hotel = 0;
                World.ClearArea(233.5, -1278.45, 11.0, 1.0, false /* FALSE */);
                Streaming.LoadScene(233.5, -1278.45, 11.0);
                $.player1.setCoordinates(233.5, -1278.45, 11.0);
                $.player1.setHeading(270.0);
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // ******************************* SCAR FACE **************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.pooz_counter == 1) {
        if ($.player1.isInZone("BEACH1") || $.flag_player_on_rc_mission == 1) {
          if ($.flag_player_in_apartment3c == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(26.73, -1329.8, 13.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(26.95, -1328.3, 13.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
                if ($.player1.isPlaying()) {
                  if ($.player1.isOnAnyBike()) {
                    //OR IS_PLAYER_IN_MODEL player1 CADDY
                    $.player_car_interiors = $.player1.storeCarIsInNoSave();
                    $.player1.warpFromCarToCoord(27.19, -1327.0, 12.0);
                    $.player_car_interiors.delete();
                  }
                }
                if ($.player1.isInAnyCar()) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("SCARF", 3000, 2); //"The Malibu1"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_apartment3c = 1;
                  Streaming.SetAreaVisible(VIS_BIKER_BAR);
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(27.19, -1327.0, 12.0);
                  $.player1.setCoordinates(27.19, -1327.0, 12.0);
                  $.player1.setHeading(23.0);
                  World.SetExtraColors(3, false /* FALSE */);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_apartment3c == 1) {
            if ($.player1.locateAnyMeans3D(26.73, -1329.8, 13.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH1", 3000, 2); //"The Malibu1"
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                await outgoing();  // SCM GOSUB outgoing
                $.flag_player_in_apartment3c = 0;
                World.ClearArea(27.33, -1331.1, 11.8, 1.0, false /* FALSE */);
                Streaming.LoadScene(27.33, -1331.1, 11.8);
                $.player1.setCoordinates(27.33, -1331.1, 11.8);
                $.player1.setHeading(160.0);
                Camera.SetInFrontOfPlayer();
              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE POLICE HQ ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH2") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 1) {
          if (ONMISSION == 0 || $.flag_player_on_bank1_mission == 1 || $.flag_player_on_colonel1_mission == 1) {
            if ($.flag_cop_doors_open == 0) {
              $.cop_doors.delete();
              $.cop_doors = ScriptObject.CreateNoOffset(cop_dr_open, 396.458, -473.047, 12.6);
              $.cop_doors.dontRemove();
              $.flag_cop_doors_open = 1;
              $.flag_cop_doors_closed = 0;
            }
          }
          else {
            if ($.flag_cop_doors_closed == 0) {
              $.cop_doors.delete();
              $.cop_doors = ScriptObject.CreateNoOffset(cop_dr_closed, 396.545, -472.883, 12.6);
              $.cop_doors.dontRemove();
              $.flag_cop_doors_closed = 1;
              $.flag_cop_doors_open = 0;
            }
          }
          if ($.player1.isPlaying()) {
            if (ONMISSION == 0 || $.flag_player_on_bank1_mission == 1 || $.flag_player_on_colonel1_mission == 1) {
              if ($.flag_player_in_cop_shop == 0) {
                if ($.player1.isInRemoteMode()) {
                  $.player_car_interiors = Rc.GetCar($.player1);
                  if (!(Car.IsDead($.player_car_interiors))) {
                    if ($.player_car_interiors.locate3D(397.0, -472.0, 12.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                      Rc.BlowUpBuggy();
                    }
                  }
                }
                else {
                  if ($.player1.isInAngledArea3D(399.0, -474.5, 11.0, 394.3, -470.8, 14.5, 2.5, false /* FALSE */)) {
                    if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                      // SCM GOTO → interiors_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                    }
                    Text.PrintBig("POL_HQ", 3000, 2); //"Diaz's Mansion"
                    await transition_1();  // SCM GOSUB transition_1
                    if ($.player1.isPlaying()) {
                      if ($.player1.isOnAnyBike()) {
                        $.player_car_interiors = $.player1.storeCarIsInNoSave();
                        $.player1.warpFromCarToCoord(393.8, -475.8, 11.4);
                        $.player_car_interiors.delete();
                      }
                    }
                    if ($.flag_eject == 0) {
                      Streaming.SetAreaVisible(VIS_POLICE_STATION);
                      $.flag_player_in_cop_shop = 1;
                      if ($.flag_player_on_bank1_mission == 0) {
                        Zone.SetPedInfo("STREET2", 1 /* DAY */, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
                        Zone.SetPedInfo("STREET2", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000);
                        Path.SwitchPedRoadsOn(354.9, -483.1, 21.0, 406.0, -490.0, 0.0);
                        Path.SwitchPedRoadsOn(376.66, -453.85, -10.0, 328.91, -504.02, 30.0); //Cop Shop (Used in bank1)
                        World.ClearArea(400.0, -486.5, 10.0, 5.0, true /* TRUE */);
                      }
                      World.SwitchRubbish(false /* OFF */);
                      Streaming.LoadScene(393.8, -475.8, 11.4);
                      $.player1.setCoordinates(393.8, -475.8, 11.4);
                      $.player1.setHeading(137.0);
                      World.SetExtraColors(5, false /* FALSE */);
                      //SET_CAMERA_IN_FRONT_OF_PLAYER

                    }
                    else {
                      // SCM GOTO → interiors_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                    }
                    await transition_2();  // SCM GOSUB transition_2
                  }
                }
              }
            }
            if ($.flag_player_in_cop_shop == 1) {
              if ($.player1.isInAngledArea3D(399.3, -472.9, 11.0, 394.8, -469.3, 14.5, 1.5, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("BEACH2", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  await outgoing();  // SCM GOSUB outgoing
                  Path.SwitchPedRoadsOff(354.9, -483.1, 21.0, 406.0, -490.0, 10.0); // LOWER FLOOR
                  World.ClearArea(399.38, -468.6, 10.7, 1.0, false /* FALSE */);
                  $.flag_player_in_cop_shop = 0;
                  //CLEAR_AREA_OF_CHARS MinX MinY MinZ MaxX MaxY MaxZ
                  if ($.flag_player_on_bank1_mission == 0) {
                    Zone.SetPedInfo("STREET2", 1 /* DAY */, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20); //POLICE STATION
                    Zone.SetPedInfo("STREET2", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
                    Path.SwitchPedRoadsOff(354.9, -483.1, 21.0, 406.0, -490.0, 0.0);
                    Path.SwitchPedRoadsOff(376.66, -453.85, -10.00, 328.91, -504.02, 30.0); //Cop Shop (Used in bank1)
                  }
                  Streaming.LoadScene(399.38, -468.6, 10.7);
                  $.player1.setCoordinates(399.38, -468.6, 10.7);
                  $.player1.setHeading(330.0);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE MALIBU ************************************************	   flag_malibu_doors_closed

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.pooz_counter == 1) {
        if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
          if (ONMISSION == 0) {
            //AND flag_kent_mission_active = 0
            if ($.flag_player_in_malibu == 0) {
              $.ground_z = 0.0000;
              $.ground_z = World.GetGroundZFor3DCoord(492.5, -76.17, 10.5);
              if ($.ground_z > 0.0000) {
                if ($.flag_create_doorman == 0) {
                  if (!(Camera.IsPointOnScreen(489.6, -79.8, 10.5, 2.0))) {
                    if (!(Camera.IsPointOnScreen(492.5, -76.17, 10.5, 2.0))) {
                      Streaming.LoadSpecialCharacter(15, "BGb");
                      while (!(Streaming.HasSpecialCharacterLoaded(15))) {
                        await asyncWait(0);
                        Streaming.LoadSpecialCharacter(15, "BGb");
                      }
                      $.door_man1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL15, 489.6, -79.8, 10.5);
                      $.door_man1.setHeading(225.0);
                      $.door_man1.setPersonality(30 /* PEDSTAT_PSYCHO */);
                      $.door_man1.setHealth(200);
                      //ADD_ARMOUR_TO_CHAR door_man1 100
                      $.door_man1.clearThreatSearch();
                      $.door_man1.setHeedThreats(true /* TRUE */);
                      $.door_man1.setPersonality(11 /* PEDSTAT_STREET_GUY */);
                      $.door_man2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL15, 492.5, -76.17, 10.5);
                      $.door_man2.setHeading(225.0);
                      $.door_man2.setPersonality(30 /* PEDSTAT_PSYCHO */);
                      $.door_man2.setHealth(200);
                      //ADD_ARMOUR_TO_CHAR door_man2 100
                      $.door_man2.clearThreatSearch();
                      $.door_man2.setHeedThreats(true /* TRUE */);
                      $.door_man2.setPersonality(11 /* PEDSTAT_STREET_GUY */);
                      $.flag_create_doorman = 1;
                    }
                  }
                }
              }
              else {
                await doorman_delete();  // SCM GOSUB doorman_delete
              }
              if ($.flag_create_doorman == 1 && $.flag_launch_doorman == 0) {
                if (!(Char.IsDead($.door_man1))) {
                  if (!($.door_man1.isHealthGreater(199))) {
                    if (!(Char.IsDead($.door_man2))) {
                      $.door_man2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                      $.flag_launch_doorman = 1;
                    }
                  }
                }
                if (!(Char.IsDead($.door_man2))) {
                  if (!($.door_man2.isHealthGreater(199))) {
                    if (!(Char.IsDead($.door_man1))) {
                      $.door_man1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                      $.flag_launch_doorman = 1;
                    }
                  }
                }
              }
            }
            else {
              await doorman_delete();  // SCM GOSUB doorman_delete
            }
            if ($.flag_malibu_doors_open == 0) {
              $.malibu_doors.delete();
              $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_open, 490.34, -77.017, 11.598);
              $.malibu_doors.dontRemove();
              $.flag_malibu_doors_open = 1;
              $.flag_malibu_doors_closed = 0;
            }
          }
          else {
            if ($.flag_malibu_doors_closed == 0 && $.flag_player_on_lawyer_2 == 0 && $.flag_player_on_counter_1 == 0) {
              $.malibu_doors.delete();
              $.malibu_doors = ScriptObject.CreateNoOffset(od_clbdr_close, 490.34, -77.017, 11.598);
              $.malibu_doors.dontRemove();
              $.flag_malibu_doors_closed = 1;
              $.flag_malibu_doors_open = 0;
            }
            await doorman_delete();  // SCM GOSUB doorman_delete
          }
          if ($.flag_kent_mission_active == 0) {
            if ($.player1.isPlaying()) {
              if ($.flag_player_in_malibu == 0 && ONMISSION == 0) {
                if ($.player1.isInRemoteMode()) {
                  $.player_car_interiors = Rc.GetCar($.player1);
                  if (!(Car.IsDead($.player_car_interiors))) {
                    if ($.player_car_interiors.locate3D(491.0, -77.7, 10.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
                      Rc.BlowUpBuggy();
                    }
                  }
                }
                else {
                  if ($.player1.locateAnyMeans3D(491.0, -77.7, 10.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
                    if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                      // SCM GOTO → interiors_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                    }
                    $.flag_player_in_malibu = 1;
                    Text.PrintBig("MALIBU", 3000, 2); //"The Malibu"
                    await transition_1();  // SCM GOSUB transition_1
                    if ($.player1.isPlaying()) {
                      if ($.player1.isOnAnyBike() || $.player1.isInModel(CADDY)) {
                        $.player_car_interiors = $.player1.storeCarIsInNoSave();
                        $.player1.warpFromCarToCoord(484.2, -72.5, 9.5);
                        $.player_car_interiors.delete();
                      }
                    }
                    if ($.flag_eject == 0) {
                      Streaming.SetAreaVisible(VIS_MALIBU_CLUB);
                      Path.SwitchPedRoadsOn(468.0, -77.0, 0.0, 490.0, -54.0, 30.0);
                      World.SwitchRubbish(false /* OFF */);
                      Streaming.LoadScene(484.2, -72.5, 9.5);
                      $.player1.setCoordinates(484.2, -72.5, 9.5);
                      $.player1.setHeading(60.0);
                      World.SetExtraColors(1, false /* FALSE */);
                      World.ClearArea(491.0, -77.7, 10.4, 1.0, true /* TRUE */);
                      //WAIT 50
                      //SET_CAMERA_IN_FRONT_OF_PLAYER

                    }
                    else {
                      // SCM GOTO → interiors_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                    }
                    if ($.flag_player_on_counter_1 == 0 && $.flag_player_on_lawyer_2 == 0) {
                      await transition_2();  // SCM GOSUB transition_2
                    }
                  }
                }
              }
              if ($.flag_player_in_malibu == 1) {
                if ($.player1.locateAnyMeans3D(488.6, -75.4, 10.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  if ($.flag_player_on_counter_1 == 0 && $.flag_player_on_lawyer_2 == 0) {
                    await transition_1();  // SCM GOSUB transition_1
                    Text.PrintBig("BEACH3", 3000, 2); //"Vice Point"
                  }
                  if ($.flag_eject == 0) {
                    $.flag_player_in_malibu = 0;
                    await outgoing();  // SCM GOSUB outgoing
                    Path.SwitchPedRoadsOff(468.0, -77.0, 0.0, 490.0, -54.0, 30.0);
                    World.ClearArea(493.1, -82.4, 10.8, 1.0, false /* FALSE */);
                    Streaming.LoadScene(493.1, -82.4, 10.8);
                    $.player1.setCoordinates(493.1, -82.4, 9.8);
                    $.player1.setHeading(220.0);
                    //SET_CAMERA_IN_FRONT_OF_PLAYER

                  }
                  else {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  await transition_2();  // SCM GOSUB transition_2
                }
              }
            }
          }
        }
        else {
          await doorman_delete();  // SCM GOSUB doorman_delete
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ UMBERTO'S COFFEE SHOP ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
    // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ UMBERTO'S COFFEE SHOP ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
    // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ UMBERTO'S COFFEE SHOP ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("HAVANA") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 2) {
          if ($.player1.isInRemoteMode()) {
            $.player_car_interiors = Rc.GetCar($.player1);
            if (!(Car.IsDead($.player_car_interiors))) {
              if ($.player_car_interiors.locate3D(-1170.0, -609.0, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                Rc.BlowUpBuggy();
              }
            }
          }
          else {
            if ($.flag_player_in_cafe == 0) {
              if ($.player1.locateAnyMeans3D(-1170.0, -609.0, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("UMBERTO", 3000, 2); //Cafe Robina
                await transition_1();  // SCM GOSUB transition_1
                if ($.player1.isPlaying()) {
                  if ($.player1.isOnAnyBike()) {
                    $.player_car_interiors = $.player1.storeCarIsInNoSave();
                    $.player1.warpFromCarToCoord(-1170.0, -611.0, 11.0);
                    $.player_car_interiors.delete();
                  }
                }
                if ($.flag_eject == 0) {
                  $.flag_player_in_cafe = 1;
                  Streaming.SetAreaVisible(VIS_COFFEE_SHOP);
                  Streaming.LoadScene(-1170.0, -611.0, 11.0);
                  World.ClearArea(-1170.0, -611.0, 11.0, 1.0, false /* FALSE */);
                  World.SwitchRubbish(false /* OFF */);
                  $.player1.setCoordinates(-1170.0, -611.5, 11.0);
                  $.player1.setHeading(180.0);
                  //SET_EXTRA_COLOURS 6 FALSE
                  //SET_CAR_DENSITY_MULTIPLIER 0.1
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_cafe == 1) {
            if ($.player1.locateAnyMeans3D(-1170.0, -606.5, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("HAVANA", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_cafe = 0;
                await outgoing();  // SCM GOSUB outgoing
                World.ClearArea(-1170.0, -605.0, 11.0, 1.0, false /* FALSE */);
                Streaming.LoadScene(-1170.0, -605.0, 11.0);
                $.player1.setCoordinates(-1170.0, -605.0, 11.0);
                $.player1.setHeading(0.0);
                Camera.SetInFrontOfPlayer();
              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }


    // **************************** THE MALL DOOR 1 ************************************************
    // **************************** THE MALL DOOR 1 ************************************************
    // **************************** THE MALL DOOR 1 ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 2) {
          if ($.flag_player_in_mall == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(449.76, 996.22, 18.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(448.8, 999.9, 18.4, 3.5, 3.5, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("MALL1", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_mall = 1;
                  Streaming.SetAreaVisible(VIS_MALL);
                  Path.SwitchPedRoadsOn(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(448.3, 1030.0, 18.0);
                  $.player1.setCoordinates(448.3, 1006.0, 18.0);
                  $.float_heading = 0.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  World.SetExtraColors(6, false /* FALSE */);
                  World.SetCarDensityMultiplier(0.1);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_mall == 1) {
            if ($.player1.locateAnyMeans3D(448.8, 999.9, 18.4, 3.5, 3.5, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH3", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_mall = 0;
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                World.ClearArea(449.7, 992.2, 17.0, 1.0, false /* FALSE */);
                Streaming.LoadScene(449.7, 992.2, 17.0);
                $.player1.setCoordinates(449.7, 992.2, 17.0);
                $.float_heading = 180.0;
                await vehicle_heading();  // SCM GOSUB vehicle_heading
                //SET_PLAYER_HEADING player1 180.0
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE MALL DOOR 2 ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 1) {
          if ($.flag_player_in_mall == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(379.1, 995.16, 17.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(380.1, 999.0, 19.4, 3.5, 3.5, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("MALL1", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_mall = 1;
                  Streaming.SetAreaVisible(VIS_MALL);
                  Path.SwitchPedRoadsOn(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(380.0, 1026.4, 18.2);
                  $.player1.setCoordinates(380.0, 1006.4, 18.2);
                  $.float_heading = 0.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  //SET_PLAYER_HEADING player1 0.0
                  World.SetExtraColors(6, false /* FALSE */);
                  World.SetCarDensityMultiplier(0.1);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_mall == 1) {
            if ($.player1.locateAnyMeans3D(380.1, 999.0, 19.4, 3.5, 3.5, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH3", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_mall = 0;
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                World.ClearArea(379.3, 991.4, 17.2, 1.0, false /* FALSE */);
                Streaming.LoadScene(379.3, 991.4, 17.2);
                $.player1.setCoordinates(379.3, 991.4, 17.0);
                $.float_heading = 180.0;
                await vehicle_heading();  // SCM GOSUB vehicle_heading
                //SET_PLAYER_HEADING player1 180.0
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }


    // **************************** THE MALL DOOR 3 ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 1) {
          if ($.flag_player_in_mall == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(350.3, 1124.0, 17.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(353.3, 1124.5, 19.4, 3.2, 3.2, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("MALL1", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_mall = 1;
                  Streaming.SetAreaVisible(VIS_MALL);
                  Path.SwitchPedRoadsOn(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(390.0, 1124.4, 17.5);
                  $.player1.setCoordinates(363.0, 1124.4, 17.5);
                  $.float_heading = 270.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  //SET_PLAYER_HEADING player1 270.0
                  World.SetExtraColors(6, false /* FALSE */);
                  World.SetCarDensityMultiplier(0.1);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_mall == 1) {
            if ($.player1.locateAnyMeans3D(353.3, 1124.5, 19.4, 3.2, 3.2, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH3", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_mall = 0;
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                World.ClearArea(344.5, 1123.5, 17.0, 1.0, false /* FALSE */);
                Streaming.LoadScene(344.5, 1123.5, 17.0);
                $.player1.setCoordinates(344.5, 1123.5, 17.0);
                $.float_heading = 90.0;
                await vehicle_heading();  // SCM GOSUB vehicle_heading
                //SET_PLAYER_HEADING player1 90.0
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE MALL DOOR 4 ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 2) {
          if ($.flag_player_in_mall == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(364.0, 1210.0, 24.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(367.8, 1210.3, 26.0, 2.7, 2.7, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("MALL1", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_mall = 1;
                  Streaming.SetAreaVisible(VIS_MALL);
                  Path.SwitchPedRoadsOn(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(395.0, 1212.0, 24.4);
                  $.player1.setCoordinates(372.0, 1210.0, 24.4);
                  $.float_heading = 270.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  //SET_PLAYER_HEADING player1 270.0
                  World.SetExtraColors(6, false /* FALSE */);
                  World.SetCarDensityMultiplier(0.1);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_mall == 1) {
            if ($.player1.locateAnyMeans3D(367.8, 1210.3, 26.0, 2.7, 2.70, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH3", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_mall = 0;
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                World.ClearArea(366.0, 1210.0, 24.0, 1.0, false /* FALSE */);
                Streaming.LoadScene(343.0, 1210.0, 24.0);
                $.player1.setCoordinates(364.0, 1210.0, 24.0);
                $.float_heading = 90.0;
                await vehicle_heading();  // SCM GOSUB vehicle_heading
                //SET_PLAYER_HEADING player1 90.0
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE MALL DOOR 5 ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 2) {
          if ($.flag_player_in_mall == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(378.6, 1256.9, 17.5, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(380.6, 1253.5, 17.5, 3.5, 3.5, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("MALL1", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_mall = 1;
                  Streaming.SetAreaVisible(VIS_MALL);
                  Path.SwitchPedRoadsOn(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(385.0, 1230.7, 18.0);
                  $.player1.setCoordinates(380.0, 1246.7, 18.0);
                  $.float_heading = 180.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  //SET_PLAYER_HEADING player1 180.0
                  World.SetExtraColors(6, false /* FALSE */);
                  World.SetCarDensityMultiplier(0.1);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_mall == 1) {
            if ($.player1.locateAnyMeans3D(380.6, 1253.5, 17.5, 3.5, 3.5, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH3", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_mall = 0;
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                World.ClearArea(378.0, 1263.6, 16.5, 1.0, false /* FALSE */);
                Streaming.LoadScene(378.0, 1263.6, 16.5);
                $.player1.setCoordinates(378.0, 1263.6, 16.5);
                $.float_heading = 0.0;
                await vehicle_heading();  // SCM GOSUB vehicle_heading
                //SET_PLAYER_HEADING player1 0.0
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE MALL DOOR 6 ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 1) {
          if ($.flag_player_in_mall == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(449.37, 1256.2, 17.2, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(448.0, 1253.0, 19.2, 3.0, 3.0, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("MALL1", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_mall = 1;
                  Streaming.SetAreaVisible(VIS_MALL);
                  Path.SwitchPedRoadsOn(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(448.5, 1230.0, 18.0);
                  $.player1.setCoordinates(448.5, 1245.0, 18.0);
                  $.float_heading = 180.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  //SET_PLAYER_HEADING player1 180.0
                  World.SetExtraColors(6, false /* FALSE */);
                  World.SetCarDensityMultiplier(0.1);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_mall == 1) {
            if ($.player1.locateAnyMeans3D(448.0, 1253.0, 19.2, 3.0, 3.0, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH3", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_mall = 0;
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                World.ClearArea(449.0, 1263.0, 16.5, 1.0, false /* FALSE */);
                Streaming.LoadScene(449.0, 1263.0, 16.5);
                $.player1.setCoordinates(449.0, 1263.0, 16.5);
                $.float_heading = 0.0;
                await vehicle_heading();  // SCM GOSUB vehicle_heading
                //SET_PLAYER_HEADING player1 0.0
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE MALL DOOR 7 ************************************************

    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("BEACH3") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 2) {
          if ($.flag_player_in_mall == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(477.6, 1124.4, 16.3, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(474.5, 1124.0, 19.3, 3.5, 3.5, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("MALL1", 3000, 2); //"Diaz's Mansion"
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  $.flag_player_in_mall = 1;
                  Streaming.SetAreaVisible(VIS_MALL);
                  Path.SwitchPedRoadsOn(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(444.4, 1123.7, 17.0);
                  $.player1.setCoordinates(467.4, 1123.7, 17.0);
                  $.float_heading = 90.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  //SET_PLAYER_HEADING player1 90.0
                  World.SetExtraColors(6, false /* FALSE */);
                  World.SetCarDensityMultiplier(0.1);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          if ($.flag_player_in_mall == 1) {
            if ($.player1.locateAnyMeans3D(474.5, 1124.0, 19.3, 3.5, 3.5, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("BEACH3", 3000, 2); //
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_mall = 0;
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
                World.ClearArea(482.0, 1124.5, 15.3, 1.0, false /* FALSE */);
                Streaming.LoadScene(482.0, 1124.5, 15.3);
                $.player1.setCoordinates(482.0, 1124.5, 15.3);
                $.float_heading = 0.0;
                await vehicle_heading();  // SCM GOSUB vehicle_heading
                //SET_PLAYER_HEADING player1 0.0
                //SET_CAMERA_IN_FRONT_OF_PLAYER

              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }

    // **************************** THE SHOOTING RANGE ************************************************
    // **************************** THE SHOOTING RANGE ************************************************
    // **************************** THE SHOOTING RANGE ************************************************


    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("DTOWN") || $.flag_player_on_rc_mission == 1) {
        if ($.pooz_counter == 1) {
          if ($.flag_player_in_shooting_range == 0) {
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(-667.85, 1211.9, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(-667.85, 1211.9, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                Text.PrintBig("RANGE", 3000, 2); //"The Malibu1"
                await transition_1();  // SCM GOSUB transition_1
                if ($.player1.isPlaying()) {
                  if ($.player1.isOnAnyBike()) {
                    $.player_car_interiors = $.player1.storeCarIsInNoSave();
                    $.player1.warpFromCarToCoord(-667.8, 1221.0, 10.5);
                    $.player_car_interiors.delete();
                  }
                }
                if ($.flag_eject == 0) {
                  Streaming.SetAreaVisible(VIS_RIFLE_RANGE);
                  $.flag_player_in_shooting_range = 1;
                  World.SwitchRubbish(false /* OFF */);
                  Streaming.LoadScene(-667.8, 1221.0, 11.0);
                  $.player1.setCoordinates(-667.8, 1221.0, 10.3);
                  $.player1.setHeading(0.0);
                  World.SetExtraColors(7, false /* FALSE */);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                if ($.flag_player_on_bank_2 == 0) {
                  await transition_2();  // SCM GOSUB transition_2
                }
              }
            }
          }
          if ($.flag_player_in_shooting_range == 1) {
            if ($.player1.locateAnyMeans3D(-667.8, 1217.8, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
              //IF IS_PLAYER_IN_ANY_CAR player1
              //AND NOT IS_PLAYER_ON_ANY_BIKE player1
              //GOTO interiors_inner
              //ENDIF
              Text.PrintBig("DTOWN", 3000, 2); //"The Malibu1"
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                $.flag_player_in_shooting_range = 0;
                await outgoing();  // SCM GOSUB outgoing
                World.ClearArea(-667.8, 1210.0, 11.0, 1.0, false /* FALSE */);
                Streaming.LoadScene(-667.8, 1210.0, 11.0);
                $.player1.setCoordinates(-667.8, 1210.0, 10.3);
                $.player1.setHeading(140.0);
                Camera.SetInFrontOfPlayer();
              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }



    // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO DIAZ'S MANSION OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO DIAZ'S MANSION OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO DIAZ'S MANSION OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


    if ($.player1.isPlaying()) {
      $.flag_interiors_cleanup = 0;
      if ($.player1.isInZone("STARI") || $.flag_player_on_rc_mission == 1) {
        if ($.flag_open_mansion > 0) {
          if ($.flag_open_mansion > 1) {
            // **************************** DIAZ'S MANSION FRONT DOOR************************************************
            if ($.pooz_counter == 1) {
              if ($.flag_player_in_mansion == 0) {
                if ($.player1.isInRemoteMode()) {
                  $.player_car_interiors = Rc.GetCar($.player1);
                  if (!(Car.IsDead($.player_car_interiors))) {
                    if ($.player_car_interiors.locate3D(-378.5, -554.382, 18.3, 1.5, 1.5, 3.0, false /* FALSE */)) {
                      Rc.BlowUpBuggy();
                    }
                  }
                }
                else {
                  if ($.player1.isInArea3D(-382.0, -558.5, 18.537, -375.0, -554.5, 24.537, false /* FALSE */)) {
                    if ($.flag_baron_mission5_passed == 0) {
                      Text.PrintBig("MANSION", 3000, 2); //"Diaz's Mansion"
                    }
                    else {
                      Text.PrintBig("TMANS", 3000, 2); //"Chez Tommy"
                    }
                    await transition_1();  // SCM GOSUB transition_1
                    /*
                    IF IS_PLAYER_PLAYING player1
                    IF IS_PLAYER_IN_ANY_CAR player1
                    AND NOT IS_PLAYER_ON_ANY_BIKE player1
                    AND NOT IS_PLAYER_IN_MODEL player1 CADDY
                    STORE_CAR_PLAYER_IS_IN_NO_SAVE player1 player_car_interiors
                    WARP_PLAYER_FROM_CAR_TO_COORD player1 -378.5 -560.0 19.0
                    DELETE_CAR player_car_interiors
                    ENDIF
                    ENDIF
                    */
                    if ($.flag_eject == 0) {
                      Streaming.SetAreaVisible(VIS_MANSION);
                      $.flag_player_in_mansion = 1;
                      Path.SwitchPedRoadsOn(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0); // LOWER FLOOR
                      World.SwitchRubbish(false /* OFF */);
                      Streaming.LoadScene(-378.5, -560.03, 19.0);
                      $.player1.setCoordinates(-378.5, -560.0, 19.0);
                      $.float_heading = 190.0;
                      await vehicle_heading();  // SCM GOSUB vehicle_heading
                      //SET_PLAYER_HEADING player1 190.0
                      World.SetExtraColors(8, false /* FALSE */);
                      //SET_CAMERA_IN_FRONT_OF_PLAYER

                    }
                    else {
                      // SCM GOTO → interiors_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                    }
                    await transition_2();  // SCM GOSUB transition_2
                  }
                }
              }
              if ($.flag_player_in_mansion == 1) {
                if ($.player1.isInArea3D(-382.0, -554.5, 18.537, -375.0, -550.5, 24.537, false /* FALSE */)) {
                  Text.PrintBig("STARI", 3000, 2);
                  await transition_1();  // SCM GOSUB transition_1
                  if ($.flag_eject == 0) {
                    await outgoing();  // SCM GOSUB outgoing
                    $.flag_player_in_mansion = 0;
                    Path.SwitchPedRoadsOff(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0); // LOWER FLOOR
                    World.ClearArea(-377.06, -545.43, 17.0, 1.0, false /* FALSE */);
                    Streaming.LoadScene(-377.06, -545.43, 17.0);
                    $.player1.setCoordinates(-377.06, -545.43, 16.0);
                    $.player1.setHeading(345.0);
                    //SET_CAMERA_IN_FRONT_OF_PLAYER

                  }
                  else {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  await transition_2();  // SCM GOSUB transition_2
                }
              }
            }
          }


          // **************************** DIAZ'S MANSION ROOFTOP ENTRY************************************************
          if ($.pooz_counter == 2) {
            if ($.flag_player_in_mansion == 0) {
              if ($.player1.isInRemoteMode()) {
                $.player_car_interiors = Rc.GetCar($.player1);
                if (!(Car.IsDead($.player_car_interiors))) {
                  if ($.player_car_interiors.locate3D(-331.0, -576.6, 36.5, 1.5, 1.5, 3.0, false /* FALSE */)) {
                    Rc.BlowUpBuggy();
                  }
                }
              }
              else {
                //IF IS_PLAYER_IN_AREA_3D	player1 -336.902 -577.589 34.52 -331.269 -569.893 38.113 FALSE
                if ($.player1.isInArea3D(-340.402, -579.221, 34.52, -331.269, -568.389, 38.113, false /* FALSE */)) {
                  if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  if ($.flag_baron_mission5_passed == 0) {
                    Text.PrintBig("MANSION", 3000, 2); //"Diaz's Mansion"
                  }
                  else {
                    Text.PrintBig("TMANS", 3000, 2); //"Chez Tommy"
                  }
                  await transition_1();  // SCM GOSUB transition_1
                  if ($.player1.isPlaying()) {
                    if ($.player1.isOnAnyBike()) {
                      $.player_car_interiors = $.player1.storeCarIsInNoSave();
                      $.player1.warpFromCarToCoord(-329.24, -582.5, 34.5);
                      $.player_car_interiors.delete();
                    }
                  }
                  if ($.flag_eject == 0) {
                    Streaming.SetAreaVisible(VIS_MANSION);
                    $.flag_player_in_mansion = 1;
                    Path.SwitchPedRoadsOn(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0); // LOWER FLOOR
                    World.SwitchRubbish(false /* OFF */);
                    Streaming.LoadScene(-329.24, -582.5, 34.5);
                    $.player1.setCoordinates(-329.24, -582.5, 34.5);
                    $.player1.setHeading(270.0);
                    World.SetExtraColors(8, false /* FALSE */);
                    //SET_CAMERA_IN_FRONT_OF_PLAYER

                  }
                  else {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  await transition_2();  // SCM GOSUB transition_2
                }
              }
            }
            if ($.flag_player_in_mansion == 1) {
              if ($.player1.locateAnyMeans3D(-330.1, -578.9, 34.5, 2.0, 2.0, 3.0, false /* FALSE */)) {
                Text.PrintBig("STARI", 3000, 2);
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  await outgoing();  // SCM GOSUB outgoing
                  $.flag_player_in_mansion = 0;
                  Path.SwitchPedRoadsOff(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0); // LOWER FLOOR
                  World.ClearArea(-343.3, -572.8, 36.0, 1.0, false /* FALSE */);
                  Streaming.LoadScene(-343.3, -572.8, 36.0);
                  //SET_PLAYER_COORDINATES player1 -338.738 -573.984 35.305
                  $.player1.setCoordinates(-341.738, -573.984, 35.305);
                  $.player1.setHeading(90.0);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
          // **************************** DIAZ'S MANSION POOL SIDE 1************************************************
          if ($.pooz_counter == 1) {
            if ($.flag_player_in_mansion == 0) {
              if ($.player1.isInRemoteMode()) {
                $.player_car_interiors = Rc.GetCar($.player1);
                if (!(Car.IsDead($.player_car_interiors))) {
                  if ($.player_car_interiors.locate3D(-354.0, -580.6, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                    Rc.BlowUpBuggy();
                  }
                }
              }
              else {
                if ($.player1.locateAnyMeans3D(-354.0, -580.6, 11.0, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  if ($.flag_baron_mission5_passed == 0) {
                    Text.PrintBig("MANSION", 3000, 2); //"Diaz's Mansion"
                  }
                  else {
                    Text.PrintBig("TMANS", 3000, 2); //"Chez Tommy"
                  }
                  await transition_1();  // SCM GOSUB transition_1
                  /*
                  IF IS_PLAYER_PLAYING player1
                  IF IS_PLAYER_ON_ANY_BIKE player1
                  OR IS_PLAYER_IN_MODEL player1 CADDY
                  STORE_CAR_PLAYER_IS_IN_NO_SAVE player1 player_car_interiors
                  WARP_PLAYER_FROM_CAR_TO_COORD player1 -338.5 -578.8 10.6
                  DELETE_CAR player_car_interiors
                  ENDIF
                  ENDIF
                  */
                  if ($.flag_eject == 0) {
                    Streaming.SetAreaVisible(VIS_MANSION);
                    $.flag_player_in_mansion = 1;
                    Path.SwitchPedRoadsOn(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0); // LOWER FLOOR
                    World.SwitchRubbish(false /* OFF */);
                    Streaming.LoadScene(-338.5, -578.8, 10.6);
                    $.player1.setCoordinates(-338.5, -578.8, 10.6);
                    $.float_heading = 270.0;
                    await vehicle_heading();  // SCM GOSUB vehicle_heading
                    //SET_PLAYER_HEADING player1 270.0
                    World.SetExtraColors(8, false /* FALSE */);
                    //SET_CAMERA_IN_FRONT_OF_PLAYER

                  }
                  else {
                    // SCM GOTO → interiors_inner (not lowered; manual jump required)
                    throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                  }
                  await transition_2();  // SCM GOSUB transition_2
                }
              }
            }
            if ($.flag_player_in_mansion == 1) {
              if ($.player1.locateAnyMeans3D(-346.3, -578.8, 10.6, 1.5, 1.5, 3.0, false /* FALSE */)) {
                Text.PrintBig("STARI", 3000, 2);
                await transition_1();  // SCM GOSUB transition_1
                if ($.flag_eject == 0) {
                  await outgoing();  // SCM GOSUB outgoing
                  $.flag_player_in_mansion = 0;
                  Path.SwitchPedRoadsOff(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0); // LOWER FLOOR
                  World.ClearArea(-354.0, -586.0, 10.6, 1.0, false /* FALSE */);
                  Streaming.LoadScene(-354.0, -586.0, 10.6);
                  $.player1.setCoordinates(-354.0, -586.0, 10.6);
                  $.float_heading = 180.0;
                  await vehicle_heading();  // SCM GOSUB vehicle_heading
                  //SET_PLAYER_HEADING player1 180.0
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }




    if ($.player1.isPlaying()) {
      if ($.flag_bankjob_mission4_passed == 1) {
        if ($.player1.isInZone("HAVANA") || $.flag_player_on_rc_mission == 1) {
          if ($.pooz_counter == 2) {
            // ******************** THE BANK ***********************************************************
            if ($.player1.isInRemoteMode()) {
              $.player_car_interiors = Rc.GetCar($.player1);
              if (!(Car.IsDead($.player_car_interiors))) {
                if ($.player_car_interiors.locate3D(-896.5, -341.0, 13.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
                  Rc.BlowUpBuggy();
                }
              }
            }
            else {
              if ($.player1.locateAnyMeans3D(-896.5, -341.0, 13.4, 1.4, 1.4, 3.0, false /* FALSE */)) {
                if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike()) && !($.player1.isInModel(CADDY))) {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                Text.PrintBig("BANKINT", 3000, 2);
                await transition_1();  // SCM GOSUB transition_1
                if ($.player1.isPlaying()) {
                  if ($.player1.isOnAnyBike() || $.player1.isInModel(CADDY)) {
                    $.player_car_interiors = $.player1.storeCarIsInNoSave();
                    $.player1.warpFromCarToCoord(-903.0, -341.0, 12.5);
                    $.player_car_interiors.delete();
                  }
                }
                if ($.flag_eject == 0) {
                  Streaming.SetAreaVisible(VIS_BANK);
                  World.SwitchRubbish(false /* OFF */);
                  if (ONMISSION == 0) {
                    Path.SwitchPedRoadsOn(-918.5, -355.0, 5.0, -898.0, -328.0, 16.0); // LOWER FLOOR
                  }
                  Streaming.LoadScene(-903.0, -341.0, 13.4);
                  $.player1.setCoordinates(-903.0, -341.0, 12.5);
                  $.flag_player_in_bank = 1;
                  $.player1.setHeading(90.0);
                  World.SetExtraColors(4, false /* FALSE */);
                  //SET_CAMERA_IN_FRONT_OF_PLAYER

                }
                else {
                  // SCM GOTO → interiors_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
                }
                await transition_2();  // SCM GOSUB transition_2
              }
            }
            if ($.player1.locateAnyMeans3D(-900.0, -340.9, 13.4, 1.5, 1.5, 3.0, false /* FALSE */)) {
              if ($.player1.isInAnyCar() && !($.player1.isOnAnyBike())) {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              Text.PrintBig("HAVANA", 3000, 2);
              await transition_1();  // SCM GOSUB transition_1
              if ($.flag_eject == 0) {
                await outgoing();  // SCM GOSUB outgoing
                Path.SwitchPedRoadsOff(-956.0, -355.0, 5.0, -898.0, -328.0, 25.0);
                World.ClearArea(-893.0, -341.0, 13.5, 1.0, false /* FALSE */);
                Streaming.LoadScene(-893.0, -341.0, 13.5);
                $.player1.setCoordinates(-893.0, -341.0, 12.0);
                $.flag_player_in_bank = 0;
                $.player1.setHeading(270.0);
                Camera.SetInFrontOfPlayer();
              }
              else {
                // SCM GOTO → interiors_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO interiors_inner"); // fallback: would break linear control flow
              }
              await transition_2();  // SCM GOSUB transition_2
            }
          }
        }
      }
    }
    else {
      await interiors_cleanup();  // SCM GOSUB interiors_cleanup
    }


    await populate_strip();  // SCM GOSUB populate_strip
    await populate_malibu();  // SCM GOSUB populate_malibu
    if ($.pooz_counter > 1) {
      $.pooz_counter = 0;
    }
    //GOSUB populate_shops

  }
}








async function transition_1() {
  if ($.player1.isPlaying()) {
    $.player1.setControl(false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
    //STORE_WANTED_LEVEL player1 wanted_interior
    //CLEAR_WANTED_LEVEL player1
    Camera.SetFadingColor(0, 0, 1);
    if ($.flag_player_on_bank_2 == 0 && $.flag_player_on_lawyer_2 == 0 && $.flag_player_on_counter_1 == 0) {
      Camera.DoFade(500, 0 /* FADE_OUT */);
    }
    else {
      if ($.flag_player_in_malibu == 1) {
        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1500, 0 /* FADE_OUT */);
      }
      else {
        Camera.DoFade(500, 0 /* FADE_OUT */);
      }
    }
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        //GOSUB interiors_cleanup
        $.flag_eject = 1;
      }
      else {
        $.flag_eject = 0;
      }
      if ($.flag_player_in_stripclub == 1) {
        await populate_strip();  // SCM GOSUB populate_strip
      }
      if ($.flag_player_in_malibu == 1) {
        await populate_malibu();  // SCM GOSUB populate_malibu
      }
    }
    World.SetCarDensityMultiplier(0.0);
  }
}






async function transition_2() {
  Camera.SetFadingColor(0, 0, 1);
  if ($.flag_player_on_bank_2 == 0 && $.flag_player_on_lawyer_2 == 0 && $.flag_player_on_counter_1 == 0) {
    Camera.DoFade(500, 1 /* FADE_IN */);
  }
  else {
    if ($.flag_player_in_malibu == 1) {
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1500, 1 /* FADE_IN */);
    }
    else {
      Camera.DoFade(500, 1 /* FADE_IN */);
    }
  }
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      //GOSUB interiors_cleanup
      $.flag_eject = 1;
    }
    else {
      $.flag_eject = 0;
    }
  }
  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  }
}



async function outgoing() {
  World.ClearExtraColors(false /* FALSE */);
  World.SetCarDensityMultiplier(1.0);
  World.SwitchRubbish(true /* ON */);
  Streaming.SetAreaVisible(VIS_MAIN_MAP);
}




async function interiors_cleanup() {


  if ($.flag_interiors_cleanup == 0) {
    //SET_AREA_VISIBLE VIS_MAIN_MAP
    World.SwitchRubbish(true /* ON */);
    //CLEAR_MISSION_AUDIO 1
    //CLEAR_MISSION_AUDIO 2
    World.ClearExtraColors(false /* FALSE */);
    Path.SwitchPedRoadsOff(-956.0, -355.0, 5.0, -898.0, -328.0, 25.0); // BANK
    Path.SwitchPedRoadsOff(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0); // MANSION
    Path.SwitchPedRoadsOff(474.0, 1250.0, 17.0, 356.0, 1003.0, 32.0); // LOWER FLOOR
    Path.SwitchPedRoadsOff(354.9, -483.1, 21.0, 406.0, -490.0, 0.0); //POLICE STATION
    Path.SwitchPedRoadsOff(468.0, -77.0, 0.0, 490.0, -54.0, 30.0);
    Zone.SetPedInfo("STREET2", 1 /* DAY */, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20); //POLICE STATION
    Zone.SetPedInfo("STREET2", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10);

    //SET_PLAYER_CONTROL player1 ON
    //SET_EVERYONE_IGNORE_PLAYER player1 OFF
    //SET_CHAR_WAIT_STATE player_char	WAITSTATE_FALSE	0
    //CLEAR_PRINTS
    //CLEAR_HELP
    $.flag_player_in_cafe = 0;
    $.flag_player_in_malibu = 0;
    $.flag_player_in_stripclub = 0;
    $.flag_player_in_mall = 0;
    $.flag_player_in_hotel = 0;
    $.flag_player_in_cop_shop = 0;
    $.flag_player_in_shooting_range = 0;
    $.flag_player_in_apartment3c = 0;
    $.flag_player_in_mansion = 0;
    World.SetCarDensityMultiplier(1.0);
    $.flag_interiors_cleanup = 1;
  }
}






async function populate_strip() {


  if ($.flag_player_in_stripclub == 1) {
    if ($.flag_strip_populate == 1) {
      await waitstate_every_frame();  // SCM GOSUB waitstate_every_frame
      if ($.player1.isPlaying() && $.player1.isScoreGreater(5) && ONMISSION == 0) {
        if ($.player1.locateOnFoot2D(69.3, -1455.9, 1.0, 1.0, true /* TRUE */) && $.player1.canStartMission()) {
          //MAKE_PLAYER_SAFE_FOR_CUTSCENE player1
          await the_groovy_room();  // SCM GOSUB the_groovy_room
        }
      }
      if ($.player1.isPlaying() && $.flag_strip_asset_cutscene == 1 && ONMISSION == 0) {
        if ($.player1.locateOnFoot2D(70.0, -1443.64, 1.0, 1.0, true /* TRUE */) && $.player1.canStartMission()) {
          $.player1.makeSafeForCutscene();
          await the_groovier_room();  // SCM GOSUB the_groovier_room
        }
      }
      /*
      GET_GAME_TIMER timer_populate_now
      timer_populate_lapsed = timer_populate_now - timer_populate_start
      IF timer_populate_lapsed > 300000
      GOSUB waitstate_every_frame
      ENDIF
      */

    }
    if ($.flag_strip_populate == 0) {
      $.ped_routine_1 = 24;
      $.ped_routine_2 = 24;
      $.ped_routine_3 = 25;
      $.ped_routine_4 = 29;
      $.ped_routine_5 = 19;
      //ped_routine_6 =
      //ped_routine_7 =
      //ped_routine_8 =
      //ped_routine_9 =
      //ped_routine_10 =

      Streaming.RequestModel(WFYG1); //
      Streaming.RequestModel(WFYBE); //
      Streaming.RequestModel(BFYPR);
      Streaming.RequestModel(WFOBE); // dancers


      while (!(Streaming.HasModelLoaded(WFYG1)) || !(Streaming.HasModelLoaded(WFYBE)) || !(Streaming.HasModelLoaded(BFYPR)) || !(Streaming.HasModelLoaded(WFOBE))) {
        Streaming.RequestModel(WFYG1);
        Streaming.RequestModel(WFYBE);
        Streaming.RequestModel(BFYPR);
        Streaming.RequestModel(WFOBE);
        await asyncWait(0);
      }
      Streaming.RequestModel(BFYRI); // bar staff
      Streaming.RequestModel(HFYMD); // bar staff
      Streaming.RequestModel(WMOCA); // punter
      Streaming.RequestModel(BKa); // punter
      while (!(Streaming.HasModelLoaded(BFYRI)) || !(Streaming.HasModelLoaded(HFYMD)) || !(Streaming.HasModelLoaded(WMOCA)) || !(Streaming.HasModelLoaded(BKa))) {
        Streaming.RequestModel(BFYRI); // bar staff
        Streaming.RequestModel(HFYMD); // bar staff
        Streaming.RequestModel(WMOCA); // punter
        Streaming.RequestModel(BKa); // punter
        await asyncWait(0);
      }
      Streaming.RequestModel(BKb); // PUNTERS
      Streaming.RequestModel(WMOST); // PUNTERS
      Streaming.RequestModel(WMOBE); // Punter
      Streaming.RequestModel(BMYBB); // punter
      while (!(Streaming.HasModelLoaded(BKb)) || !(Streaming.HasModelLoaded(WMOST)) || !(Streaming.HasModelLoaded(WMOBE)) || !(Streaming.HasModelLoaded(BMYBB))) {
        Streaming.RequestModel(BKb); // PUNTERS
        Streaming.RequestModel(WMOST); // PUNTERS
        Streaming.RequestModel(WMOBE); // Punter
        Streaming.RequestModel(BMYBB); // punter
        await asyncWait(0);
      }
      Streaming.RequestModel(HMOST); // bouncer
      Streaming.RequestModel(WMYBU); // bouncer
      while (!(Streaming.HasModelLoaded(HMOST)) || !(Streaming.HasModelLoaded(WMYBU))) {
        Streaming.RequestModel(HMOST); // bouncer
        Streaming.RequestModel(WMYBU); // bouncer
        await asyncWait(0);
      }
      Streaming.RequestAnimation("RIOT"); //riot
      Streaming.RequestAnimation("STRIP"); //STRIP
      while (!(Streaming.HasAnimationLoaded("RIOT")) || !(Streaming.HasAnimationLoaded("STRIP"))) {
        Streaming.RequestAnimation("RIOT"); //riot
        Streaming.RequestAnimation("STRIP"); //STRIP
        await asyncWait(0);
      }


      // ********************* BOUNCERS **************************************************

      $.bouncer_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, HMOST, 89.8, -1456.2, 9.4); // back room far right
      $.bouncer_1.setHeading(287.0);
      $.bouncer_1.clearThreatSearch();
      $.bouncer_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYBU, 89.15, -1461.3, 9.6); // back room far right
      $.bouncer_2.setHeading(48.7);
      $.bouncer_2.clearThreatSearch();

      // ********************************************************************************
      /*
      CREATE_CHAR PEDTYPE_CIVMALE WFYG1 90.8 -1456.15 9.6 dancer_4 // back room far right
      SET_CHAR_HEADING dancer_4 168.0
      CLEAR_CHAR_THREAT_SEARCH dancer_4
      //CHAR_SET_IDLE dancer_4
      ///ADD_BLIP_FOR_CHAR  dancer_4	testblip_4
      SET_CHAR_WAIT_STATE dancer_4 32 999999
      */
      // *********************** FAT BLOKE **********************************************

      $.dancer_2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYPR, 79.67, -1461.34, 10.6); // far left pole
      $.dancer_2.setHeading(168.0);
      $.dancer_2.clearThreatSearch();
      //CHAR_SET_IDLE dancer_2
      //ADD_BLIP_FOR_CHAR  dancer_2	testblip_2
      $.dancer_2.setWaitState(WAITSTATE_STRIPPER, 999999);
      $.s_punter_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMOST, 79.5, -1463.1, 9.6); // back room far left
      $.s_punter_6.setHeading(5.0);
      $.s_punter_6.clearThreatSearch();
      //CHAR_SET_IDLE s_punter_3
      //CHAR_LOOK_AT_CHAR_ALWAYS s_punter_6 dancer_2
      $.s_punter_6.setWaitState(29, 999999);

      // ************ WEE CAB DRIVER ****************************

      $.s_punter_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMOCA, 87.3, -1462.85, 9.6);
      $.s_punter_1.setHeading(117.0);
      $.s_punter_1.clearThreatSearch();
      //CHAR_SET_IDLE s_punter_1
      //ADD_BLIP_FOR_CHAR  s_punter_1 testblip_6

      $.dancer_3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBE, 86.06, -1463.6, 10.4); // far left pole
      $.dancer_3.setHeading(295.0);
      $.dancer_3.clearThreatSearch();
      //CHAR_SET_IDLE dancer_3
      //ADD_BLIP_FOR_CHAR  dancer_3	testblip_3
      $.dancer_3.setWaitState(WAITSTATE_STRIPPER, 999999);

      // ***************** BIKERS & FAT BINT **************************************

      $.s_punter_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, BKb, 79.0, -1466.31, 9.6); // back room far right
      $.s_punter_2.setHeading(58.0);
      $.s_punter_2.clearThreatSearch();
      //CHAR_SET_IDLE s_punter_2
      //ADD_BLIP_FOR_CHAR  s_punter_2 testblip_7

      $.s_punter_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, BKa, 77.46, -1466.06, 9.6); // back room far left
      $.s_punter_3.setHeading(265.0);
      $.s_punter_3.clearThreatSearch();
      //CHAR_SET_IDLE s_punter_3
      //ADD_BLIP_FOR_CHAR  s_punter_3 testblip_8

      $.dancer_5 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFOBE, 78.07, -1465.7, 10.4); // back room far left
      $.dancer_5.setHeading(168.0);
      $.dancer_5.clearThreatSearch();
      //CHAR_SET_IDLE dancer_5
      //ADD_BLIP_FOR_CHAR  dancer_5	testblip_5
      $.dancer_5.setWaitState(WAITSTATE_STRIPPER, 999999);

      // ************************** EXCITED PUNTERS & DANCER ***************************

      $.s_punter_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYBB, 81.35, -1459.9, 9.6); // back room far left
      $.s_punter_4.setHeading(5.0);
      $.s_punter_4.clearThreatSearch();
      //CHAR_SET_IDLE s_punter_3
      $.s_punter_4.setWaitState(29, 999999);
      $.s_punter_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMOBE, 83.4, -1458.9, 9.6); // back room far left
      $.s_punter_5.setHeading(60.0);
      $.s_punter_5.clearThreatSearch();
      //CHAR_SET_IDLE s_punter_3
      $.s_punter_5.setWaitState(29, 999999);
      $.dancer_1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, 81.45, -1457.44, 10.6); // Central pole
      $.dancer_1.setHeading(210.0);
      $.dancer_1.clearThreatSearch();
      //CHAR_SET_IDLE dancer_1
      //ADD_BLIP_FOR_CHAR dancer_1 testblip_1
      $.dancer_1.setWaitState(WAITSTATE_STRIPPER, 999999);

      // ****************** BAR STAFF **************************************************

      $.bar_staff1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, 88.6, -1450.0, 9.6);
      $.bar_staff1.setHeading(325.0);
      $.bar_staff1.clearThreatSearch();
      $.bar_staff1.setIdle();
      $.bar_staff2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYMD, 91.44, -1455.3, 9.6);
      $.bar_staff2.setHeading(128.0);
      $.bar_staff2.clearThreatSearch();
      $.bar_staff2.setIdle();
      await waitstate_every_frame();  // SCM GOSUB waitstate_every_frame
      $.flag_strip_populate = 1;
    }
  }
  else {
    if ($.flag_strip_populate > 0) {
      while (!($.player1.isPlaying())) {
        await asyncWait(0);
      }
      /*
      WAIT 500
      WHILE GET_FADING_STATUS
      WAIT 0
      ENDWHILE
      */
      $.dancer_1.delete();
      $.dancer_2.delete();
      $.dancer_3.delete();
      //DELETE_CHAR dancer_4
      $.dancer_5.delete();
      //DELETE_CHAR dancer_6
      //DELETE_CHAR dancer_7
      //DELETE_CHAR dancer_8

      $.s_punter_1.delete();
      $.s_punter_2.delete();
      $.s_punter_3.delete();
      $.s_punter_4.delete();
      $.s_punter_5.delete();
      $.s_punter_6.delete();
      //DELETE_CHAR s_punter_7
      //DELETE_CHAR s_punter_8

      $.bar_staff1.delete();
      $.bar_staff2.delete();
      $.bouncer_1.delete();
      $.bouncer_2.delete();

      /*
      REQUEST_MODEL WFYPR	// dancers
      REQUEST_MODEL WFYG1
      REQUEST_MODEL HFYBE
      REQUEST_MODEL WFYBE
      REQUEST_MODEL BFYPR
      REQUEST_MODEL WFOBE	// dancers
      REQUEST_MODEL BFYRI	// bar staff
      REQUEST_MODEL HFYMD	// bar staff
      REQUEST_MODEL WMOCA	// punter
      REQUEST_MODEL BKb	 // PUNTERS
      REQUEST_MODEL HMORI
      REQUEST_MODEL BMYST
      REQUEST_MODEL BMYBU
      */
      /*
      ped_cancel_wait = dancer_1
      GOSUB ped_cleanup
      ped_cancel_wait = dancer_2
      GOSUB ped_cleanup
      ped_cancel_wait = dancer_3
      GOSUB ped_cleanup
      ped_cancel_wait = dancer_4
      GOSUB ped_cleanup
      ped_cancel_wait = dancer_5
      GOSUB ped_cleanup
      ped_cancel_wait = s_punter_1
      GOSUB ped_cleanup
      ped_cancel_wait = s_punter_2
      GOSUB ped_cleanup
      ped_cancel_wait = s_punter_3
      GOSUB ped_cleanup
      ped_cancel_wait = s_punter_4
      GOSUB ped_cleanup
      ped_cancel_wait = s_punter_5
      GOSUB ped_cleanup
      ped_cancel_wait = s_punter_6
      GOSUB ped_cleanup
      ped_cancel_wait = bar_staff1
      GOSUB ped_cleanup
      ped_cancel_wait = bar_staff2
      GOSUB ped_cleanup
      */

      /*
      MARK_CHAR_AS_NO_LONGER_NEEDED dancer_1
      MARK_CHAR_AS_NO_LONGER_NEEDED dancer_2
      MARK_CHAR_AS_NO_LONGER_NEEDED dancer_3
      MARK_CHAR_AS_NO_LONGER_NEEDED dancer_4
      MARK_CHAR_AS_NO_LONGER_NEEDED dancer_5
      MARK_CHAR_AS_NO_LONGER_NEEDED s_punter_1
      MARK_CHAR_AS_NO_LONGER_NEEDED s_punter_2
      MARK_CHAR_AS_NO_LONGER_NEEDED s_punter_3
      MARK_CHAR_AS_NO_LONGER_NEEDED s_punter_4
      MARK_CHAR_AS_NO_LONGER_NEEDED s_punter_5
      MARK_CHAR_AS_NO_LONGER_NEEDED s_punter_6
      MARK_CHAR_AS_NO_LONGER_NEEDED bar_staff1
      MARK_CHAR_AS_NO_LONGER_NEEDED bar_staff2

      WFYPR	// dancers
      WFYG1	//
      WFYBE	//
      BFYPR
      WFOBE	// dancers
      BFYRI	// bar staff
      HFYMD	// bar staff
      WMOCA	// punter
      BKa	// punter
      BKb	 // PUNTERS
      HMOBE	 // PUNTERS
      BMYST	 // Punter
      BMYBU	 // punter
      HMOST	 // bouncer
      WMYBU	 // bouncer

      */

      //MARK_MODEL_AS_NO_LONGER_NEEDED WFYPR
      Streaming.MarkModelAsNoLongerNeeded(WFYG1);
      Streaming.MarkModelAsNoLongerNeeded(WFYBE);
      Streaming.MarkModelAsNoLongerNeeded(BFYPR);
      Streaming.MarkModelAsNoLongerNeeded(WFOBE);
      Streaming.MarkModelAsNoLongerNeeded(BFYRI);
      Streaming.MarkModelAsNoLongerNeeded(HFYMD);
      Streaming.MarkModelAsNoLongerNeeded(WMOCA);
      Streaming.MarkModelAsNoLongerNeeded(BKa);
      Streaming.MarkModelAsNoLongerNeeded(BKb);
      Streaming.MarkModelAsNoLongerNeeded(WMOST);
      Streaming.MarkModelAsNoLongerNeeded(WMOBE);
      Streaming.MarkModelAsNoLongerNeeded(BMYBB);
      Streaming.MarkModelAsNoLongerNeeded(HMOST);
      Streaming.MarkModelAsNoLongerNeeded(WMYBU);
      Streaming.MarkModelAsNoLongerNeeded(machete);
      Streaming.MarkModelAsNoLongerNeeded(knifecur);
      Streaming.UnloadSpecialCharacter(19);
      Streaming.UnloadSpecialCharacter(18);
      Streaming.UnloadSpecialCharacter(17);
      Streaming.RemoveAnimation("RIOT");
      Streaming.RemoveAnimation("STRIP");
      //SET_NEAR_CLIP 1.0
      $.flag_arm_bouncers = 0;
      $.flag_launch_bouncers = 0;
      $.flag_arm_barstaff = 0;
      $.flag_strip_populate = 0;
    }
  }
}






async function waitstate_every_frame() {


  if ($.player1.isPlaying()) {
    if (!(Char.IsDead($.bouncer_1)) && !(Char.IsDead($.bouncer_2))) {
      if (!($.bouncer_1.isHealthGreater(95)) || !($.bouncer_2.isHealthGreater(95))) {
        await bouncers();  // SCM GOSUB bouncers
      }
    }
    else {
      await bouncers();  // SCM GOSUB bouncers
    }

    // ******************* The Wide-eyed Oggler & Blade Bitch **********

    if (!(Char.IsDead($.dancer_2)) && !(Char.IsDead($.s_punter_6))) {
      if (!($.dancer_2.isHealthGreater(95)) || !($.s_punter_6.isHealthGreater(95))) {
        await geeble();  // SCM GOSUB geeble
      }
    }
    else {
      await geeble();  // SCM GOSUB geeble
    }

    // ************ WEE CAB DRIVER ****************************
    if (!(Char.IsDead($.s_punter_1)) && !(Char.IsDead($.dancer_3))) {
      if ($.s_punter_1.isHealthGreater(95) && $.dancer_3.isHealthGreater(95)) {
        $.s_punter_1.setWaitState($.ped_routine_2, 999999);
      }
      else {
        await gubble();  // SCM GOSUB gubble
      }
    }
    else {
      await gubble();  // SCM GOSUB gubble
    }
    // ************ BIKERS & FAT CHICK ************************
    if (!(Char.IsDead($.s_punter_2)) && !(Char.IsDead($.s_punter_3)) && !(Char.IsDead($.dancer_5))) {
      if ($.s_punter_2.isHealthGreater(95) && $.s_punter_3.isHealthGreater(95) && $.dancer_5.isHealthGreater(95)) {
        $.s_punter_2.setWaitState($.ped_routine_2, 999999);
        $.s_punter_3.setWaitState($.ped_routine_2, 999999);
      }
      else {
        await gobble();  // SCM GOSUB gobble
      }
    }
    else {
      await gobble();  // SCM GOSUB gobble
    }

    // ****************** EXCITED PUNTERS *********************
    if (!(Char.IsDead($.s_punter_4)) && !(Char.IsDead($.s_punter_5)) && !(Char.IsDead($.dancer_1))) {
      if (!($.s_punter_4.isHealthGreater(95)) || !($.s_punter_5.isHealthGreater(95)) || !($.dancer_1.isHealthGreater(95))) {
        await gibble();  // SCM GOSUB gibble
      }
    }
    else {
      await gibble();  // SCM GOSUB gibble
    }

    /*
    IF NOT IS_CHAR_DEAD s_punter_6
    SET_CHAR_WAIT_STATE s_punter_6 ped_routine_1 999999
    ENDIF
    IF NOT IS_CHAR_DEAD s_punter_7
    SET_CHAR_WAIT_STATE s_punter_7 ped_routine_1 999999
    ENDIF
    IF NOT IS_CHAR_DEAD s_punter_8
    SET_CHAR_WAIT_STATE s_punter_8 ped_routine_1 999999
    ENDIF
    */
    // ****************** BAR STAFF ***************************
    if (!(Char.IsDead($.bar_staff1)) && !(Char.IsDead($.bar_staff2))) {
      if ($.bar_staff1.isHealthGreater(95) && $.bar_staff2.isHealthGreater(95)) {
        $.bar_staff1.setWaitState($.ped_routine_3, 999999);
        $.bar_staff2.setWaitState($.ped_routine_5, 999999);
      }
      else {
        await gabble();  // SCM GOSUB gabble
      }
    }
    else {
      await gabble();  // SCM GOSUB gabble
    }
    /*
    IF NOT IS_CHAR_DEAD bouncer_1
    SET_CHAR_WAIT_STATE bouncer_1 ped_routine_4 999999
    ENDIF
    IF NOT IS_CHAR_DEAD bouncer_2
    SET_CHAR_WAIT_STATE bouncer_2 ped_routine_4 999999
    ENDIF
    */

  }
  $.timer_populate_start = Clock.GetGameTimer();
}



async function bouncers() {
  if ($.flag_arm_bouncers == 0) {
    Streaming.RequestModel(172 /* bat */);
    while (!(Streaming.HasModelLoaded(172 /* bat */))) {
      Streaming.RequestModel(172 /* bat */);
      await asyncWait(0);
    }
    $.flag_arm_bouncers = 1;
  }
  $.ped_rumble = $.bouncer_1;
  if (!(Game.IsAustralian())) {
    await battage();  // SCM GOSUB battage
  }
  await rumble();  // SCM GOSUB rumble
  $.ped_rumble = $.bouncer_2;
  if (!(Game.IsAustralian())) {
    await battage();  // SCM GOSUB battage
  }
  await rumble();  // SCM GOSUB rumble
}



async function battage() {
  if (!(Char.IsDead($.ped_rumble))) {
    $.ped_rumble.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 0);
  }
}



async function geeble() {
  if (!(Char.IsDead($.s_punter_6))) {
    $.s_punter_6.stopLooking();
  }
  $.ped_flee = $.s_punter_6;
  await flee();  // SCM GOSUB flee
  if ($.flag_arm_dancer2 == 0) {
    if (!(Game.IsAustralian())) {
      Streaming.RequestModel(knifecur);
      while (!(Streaming.HasModelLoaded(knifecur))) {
        Streaming.RequestModel(knifecur);
        await asyncWait(0);
      }
    }
    if (!(Char.IsDead($.dancer_2))) {
      if (!(Game.IsAustralian())) {
        $.dancer_2.giveWeapon(WEAPONTYPE_KNIFE, 0);
      }
      $.ped_rumble = $.dancer_2;
      await rumble();  // SCM GOSUB rumble
    }
    $.flag_arm_dancer2 = 1;
  }
  await bouncers();  // SCM GOSUB bouncers
}



async function gubble() {
  $.ped_flee = $.s_punter_1;
  await flee();  // SCM GOSUB flee
  $.ped_rumble = $.dancer_3;
  await rumble();  // SCM GOSUB rumble
  await bouncers();  // SCM GOSUB bouncers
}



async function gibble() {
  $.ped_rumble = $.s_punter_4;
  await rumble();  // SCM GOSUB rumble
  $.ped_rumble = $.s_punter_5;
  await rumble();  // SCM GOSUB rumble
  $.ped_flee = $.dancer_1;
  await flee();  // SCM GOSUB flee
  await bouncers();  // SCM GOSUB bouncers
}



async function gobble() {
  $.ped_rumble = $.s_punter_2;
  await rumble();  // SCM GOSUB rumble
  $.ped_rumble = $.s_punter_3;
  await rumble();  // SCM GOSUB rumble
  $.ped_flee = $.dancer_5;
  await flee();  // SCM GOSUB flee
  await bouncers();  // SCM GOSUB bouncers
}



async function gabble() {
  if ($.flag_arm_barstaff == 0) {
    if (!(Game.IsAustralian())) {
      Streaming.RequestModel(machete);
      while (!(Streaming.HasModelLoaded(machete))) {
        Streaming.RequestModel(machete);
        await asyncWait(0);
      }
    }
    if (!(Char.IsDead($.bar_staff1))) {
      if (!(Game.IsAustralian())) {
        $.bar_staff1.giveWeapon(WEAPONTYPE_MACHETE, 0);
      }
      $.ped_rumble = $.bar_staff1;
      await rumble();  // SCM GOSUB rumble
    }
    $.flag_arm_barstaff = 1;
  }
  $.ped_rumble = $.bar_staff2;
  await rumble();  // SCM GOSUB rumble
  await bouncers();  // SCM GOSUB bouncers
}




async function rumble() {
  if (!(Char.IsDead($.ped_rumble))) {
    $.ped_rumble.setWaitState(0, 0);
    if ($.player1.isPlaying()) {
      $.ped_rumble.setObjKillPlayerOnFoot($.player1);
    }
    //TURN_CHAR_TO_FACE_PLAYER ped_rumble player1
    //SET_CHAR_THREAT_SEARCH ped_rumble THREAT_PLAYER1

  }
}



async function flee() {
  if (!(Char.IsDead($.ped_flee))) {
    $.ped_flee.setWaitState(0, 0);
    $.ped_flee.setObjRunToCoord(65.8, -1444.0);
    $.ped_flee.markAsNoLongerNeeded();
  }
}

/*
ped_cleanup:
IF NOT IS_CHAR_DEAD ped_cancel_wait
CLEAR_CHAR_WAIT_STATE ped_cancel_wait
SET_CHAR_WAIT_STATE ped_cancel_wait 0 0
MARK_CHAR_AS_NO_LONGER_NEEDED ped_cancel_wait
ENDIF
RETURN
*/


async function the_groovy_room() {
  if ($.player1.isPlaying()) {
    ONMISSION = 1;
    $.player1.setControl(false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
    Camera.SetNearClip(0.1);
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        return;
      }
    }
    if ($.counter_tittycash_spent < 100) {
      Streaming.LoadSpecialCharacter(19, "stripc");
      while (!(Streaming.HasSpecialCharacterLoaded(19))) {
        Streaming.LoadSpecialCharacter(19, "stripc");
        await asyncWait(0);
      }
      $.dancer_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 66.6, -1455.46, 9.56); // back room far right
      //flag_stripper_create = 1

    }
    if ($.counter_tittycash_spent > 99 && $.counter_tittycash_spent < 200) {
      Streaming.LoadSpecialCharacter(19, "stripa");
      while (!(Streaming.HasSpecialCharacterLoaded(19))) {
        Streaming.LoadSpecialCharacter(19, "stripa");
        await asyncWait(0);
      }
      $.dancer_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 66.6, -1455.46, 9.56); // back room far right
      //flag_stripper_create = 1

    }
    if ($.counter_tittycash_spent > 199) {
      Streaming.LoadSpecialCharacter(19, "stripb");
      while (!(Streaming.HasSpecialCharacterLoaded(19))) {
        Streaming.LoadSpecialCharacter(19, "stripb");
        await asyncWait(0);
      }
      $.dancer_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 66.6, -1455.46, 9.56); // back room far right
      //flag_stripper_create = 1

    }
    $.dancer_4.setHeading(33.0);
    $.dancer_4.clearThreatSearch();
    $.dancer_4.setWaitState(WAITSTATE_STRIPPER, 999999);
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.setCoordinates(65.5, -1453.7, 9.6);
      $.scplayer.setWaitState($.ped_routine_2, 999999);
      $.scplayer.setHeading(210.0);
      //CHAR_LOOK_AT_CHAR_ALWAYS scplayer dancer_4

    }
    $.counter_strip_cam = 0;
    Camera.SetFixedPosition(68.45, -1456.37, 12.0, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(66.0, -1454.5, 10.5, 2 /* JUMP_CUT */);
    Camera.DoFade(500, 1 /* FADE_IN */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        return;
      }
    }
    Text.PrintHelp("EXIT_1"); // Press X button to exit.
    TIMERA = 5000;
    while ($.player1.isScoreGreater(5)) {
      await asyncWait(0);
      //GOSUB waitstate_every_frame
      if (!($.player1.isPlaying())) {
        return;
      }
      else {
        $.scplayer.setWaitState($.ped_routine_2, 999999);
      }
      if (TIMERA > 5000) {
        $.player1.addScore(-5);
        TIMERA = 0;
        $.counter_tittycash_spent = $.counter_tittycash_spent + 5;
        ++$.counter_strip_cam;
        if ($.counter_strip_cam == 6) {
          $.counter_strip_cam = 0;
        }
        if ($.counter_strip_cam == 1) {
          Camera.SetFixedPosition(68.45, -1456.37, 12.0, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(66.0, -1454.5, 10.5, 2 /* JUMP_CUT */);
        }
        if ($.counter_strip_cam == 2) {
          Camera.SetFixedPosition(65.21, -1454.1, 9.56, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(67.36, -1456.33, 11.58, 2 /* JUMP_CUT */);
        }
        if ($.counter_strip_cam == 3) {
          Camera.SetFixedPosition(68.0, -1455.6, 10.0, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(64.9, -1454.5, 10.89, 2 /* JUMP_CUT */);
        }
        if ($.counter_strip_cam == 4) {
          Camera.SetFixedPosition(67.47, -1456.14, 10.0, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(65.4, -1454.25, 11.37, 2 /* JUMP_CUT */);
        }
        if ($.counter_strip_cam == 5) {
          Camera.SetFixedPosition(65.93, -1454.6, 11.65, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(68.42, -1458.24, 8.36, 2 /* JUMP_CUT */);
        }
      }
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        // SCM GOTO → prude (not lowered; manual jump required)
        throw new Error("unresolved GOTO prude"); // fallback: would break linear control flow
      }


    }
    Text.PrintNow("STRIP_1", 5000, 1); // Not ehough cash, you cheap sleezebag.
    // SCM GOTO → prude_2 (not lowered; manual jump required)
    throw new Error("unresolved GOTO prude_2"); // fallback: would break linear control flow
    // SCM label prude
    while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        return;
      }
    }
    // SCM label prude_2
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        return;
      }
    }
    $.dancer_4.delete();
    Streaming.UnloadSpecialCharacter(19);

    //counter_tittycash_spent = 600  // TEST! TEST! TEST!
    Text.ClearHelp();
    if ($.counter_tittycash_spent > 299 && $.flag_strip_asset_cutscene == 0) {
      await outgoing();  // SCM GOSUB outgoing
      Streaming.LoadScene(93.3, -1472.14, $.strpbuyZ);
      Camera.SetFixedPosition(103.0, -1488.0, 15.7, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(99.5, -1476.6, 16.75, 2 /* JUMP_CUT */);

      //REMOVE_BLIP bankjob_contact_blip
      //ADD_SHORT_RANGE_SPRITE_BLIP_FOR_COORD strpbuyX strpbuyY strpbuyZ the_bankjob_blip bankjob_contact_blip
      $.strip_cash_pickup = Pickup.CreateProtection(93.3, -1472.14, $.strpbuyZ, $.stripclub_revenue, $.stripclub_revenue);
      Camera.DoFade(1000, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      TIMERA = 0;
      while (TIMERA < 2000) {
        await asyncWait(0);
      }
      Text.PrintBig("ASSET_C", 10000, 6); //BANK HEIST ASSET COMPLETED!
      Text.PrintWithNumberNow("ASSET_D", $.stripclub_revenue, 10000, 1);

      //SET_FIXED_CAMERA_POSITION 511.1 -61.0 14.0 0.0 0.0 0.0

      Camera.PointAtPoint(93.3, -1472.14, $.strpbuyZ, 1 /* INTERPOLATION */);
      Audio.PlayMissionPassedTune(1);
      TIMERA = 0;
      while (TIMERA < 5000) {
        await asyncWait(0);
      }
      Camera.DoFade(500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Streaming.LoadScene(72.0, -1454.7, 9.45);
      $.strip_door_poledance.delete();
      Streaming.SetAreaVisible(VIS_STRIP_CLUB);
      World.SetExtraColors(2, false /* FALSE */);
      World.SetCarDensityMultiplier(0.1);
      World.SwitchRubbish(false /* OFF */);
      $.flag_strip_asset_cutscene = 1;
      ++$.counter_60_percent;
      Stat.PlayerMadeProgress(1);
    }
    if ($.player1.isPlaying()) {
      $.scplayer.setWaitState(0, 0);
      $.player1.setCoordinates(72.0, -1454.7, 9.45);
      $.player1.setHeading(208.0);
    }
    Text.ClearPrints();
    Camera.RestoreJumpcut();
    Camera.SetBehindPlayer();
    //SET_NEAR_CLIP 1.0
    Camera.DoFade(500, 1 /* FADE_IN */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        return;
      }
    }
    if ($.player1.isPlaying()) {
      $.player1.setControl(true /* ON */);
      Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
      ONMISSION = 0;
    }
  }
}



async function the_groovier_room() {
  ONMISSION = 1;
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Camera.SetNearClip(0.1);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return;
    }
  }


  Streaming.Switch(false /* OFF */);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  if ($.counter_private_dancer == 0) {
    //LOAD_SPECIAL_CHARACTER 19 stripc
    Streaming.LoadSpecialCharacter(19, "stripa");
  }
  if ($.counter_private_dancer == 1) {
    Streaming.LoadSpecialCharacter(19, "stripa");
    //LOAD_SPECIAL_CHARACTER 19 stripc

  }
  if ($.counter_private_dancer == 2) {
    Streaming.LoadSpecialCharacter(19, "stripa");
    //LOAD_SPECIAL_CHARACTER 19 stripb

  }


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(19))) {
    Streaming.LoadSpecialCharacter(1, "CSplay");
    Streaming.LoadSpecialCharacter(19, "stripa");
    await asyncWait(0);
  }


  Cutscene.Load("STRIPA");


  Cutscene.SetOffset(69.5133, -1444.6984, 9.5255);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.private_dancer = CutsceneObject.Create(SPECIAL19);
  $.private_dancer.setAnim("stripa");


  if ($.player1.isPlaying()) {
    $.player1.setCoordinates(66.5, -1445.5, 9.6);
    $.player1.setHeading(220.0);
  }



  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text

  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 25000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }




  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  Cutscene.Clear();
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(19);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  ++$.counter_private_dancer;
  if ($.counter_private_dancer > 2) {
    $.counter_private_dancer = 0;
  }
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
    ONMISSION = 0;
  }
}




// oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
//     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
// oooo    oooo    oooo    oooo    oooo    oooo      POPULATE MALIBU       oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
//     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
// oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
//     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo


async function populate_malibu() {
  if ($.flag_player_in_malibu == 1) {
    if ($.flag_malibu_populate == 0) {
      $.ped_routine_1 = 24;
      $.ped_routine_2 = 24;
      $.ped_routine_3 = 25;
      $.ped_routine_4 = 29;
      $.ped_routine_5 = 19;
      //ped_routine_6 =
      //ped_routine_7 =
      //ped_routine_8 =
      //ped_routine_9 =
      //ped_routine_10 =

      Streaming.RequestModel(WFYG1); //
      //REQUEST_MODEL BFYST	//
      Streaming.RequestModel(HFYRI); //
      Streaming.RequestModel(BFYRI); //


      while (!(Streaming.HasModelLoaded(WFYG1)) || !(Streaming.HasModelLoaded(HFYRI)) || !(Streaming.HasModelLoaded(BFYRI))) {
        //OR NOT HAS_MODEL_LOADED BFYST
        Streaming.RequestModel(WFYG1); //
        //REQUEST_MODEL BFYST	//
        Streaming.RequestModel(HFYRI); //
        Streaming.RequestModel(BFYRI); //
        await asyncWait(0);
      }
      Streaming.RequestModel(CBa); //
      Streaming.RequestModel(BMYRI); //
      Streaming.RequestModel(BMYBB); //
      //REQUEST_MODEL BGa	//


      while (!(Streaming.HasModelLoaded(CBa)) || !(Streaming.HasModelLoaded(BMYRI)) || !(Streaming.HasModelLoaded(BMYBB))) {
        //OR NOT HAS_MODEL_LOADED BGa
        Streaming.RequestModel(CBa); //
        Streaming.RequestModel(BMYRI); //
        Streaming.RequestModel(BMYBB); //
        await asyncWait(0);
      }
      Streaming.RequestModel(FIREMAN);
      Streaming.RequestModel(WMYCW);
      Streaming.RequestModel(ARMY);
      Streaming.RequestModel(BKa);
      while (!(Streaming.HasModelLoaded(FIREMAN)) || !(Streaming.HasModelLoaded(WMYCW)) || !(Streaming.HasModelLoaded(ARMY)) || !(Streaming.HasModelLoaded(BKa))) {
        Streaming.RequestModel(FIREMAN);
        Streaming.RequestModel(WMYCW);
        Streaming.RequestModel(ARMY);
        Streaming.RequestModel(BKa);
        await asyncWait(0);
      }
      Streaming.LoadSpecialCharacter(19, "BGa");
      while (!(Streaming.HasSpecialCharacterLoaded(19))) {
        Streaming.LoadSpecialCharacter(19, "BGa");
        await asyncWait(0);
      }


      Streaming.RequestAnimation("STRIP"); //STRIP
      while (!(Streaming.HasAnimationLoaded("STRIP"))) {
        Streaming.RequestAnimation("STRIP"); //STRIP
        await asyncWait(0);
      }
      Streaming.RequestModel(brassknuckle);
      while (!(Streaming.HasModelLoaded(brassknuckle))) {
        Streaming.RequestModel(brassknuckle);
        await asyncWait(0);
      }


      while ($.counter_dancers < 26) {
        await asyncWait(0);
        await dance_floor_boogey();  // SCM GOSUB dance_floor_boogey
        if ($.counter_dancers == 1) {
          $.dancer_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_1;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 2) {
          $.dancer_2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_2;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 3) {
          $.dancer_3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_3;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 4) {
          $.dancer_4 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_4;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 5) {
          $.dancer_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBa, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_5;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 6) {
          $.dancer_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_6;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 7) {
          $.dancer_7 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYBB, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_7;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 8) {
          $.dancer_8 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_8;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 9) {
          $.dancer_9 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_9;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 10) {
          $.dancer_10 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_10;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 11) {
          $.dancer_11 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_11;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 12) {
          $.dancer_12 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_12;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 13) {
          $.dancer_13 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_13;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 14) {
          $.dancer_14 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYBB, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_14;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 15) {
          $.dancer_15 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_15;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 16) {
          $.dancer_16 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYBB, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_16;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 17) {
          $.dancer_17 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_17;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 18) {
          $.dancer_18 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_18;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 19) {
          $.dancer_19 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_19;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 20) {
          $.dancer_20 = Char.Create(4 /* PEDTYPE_CIVMALE */, BFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_20;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 21) {
          $.dancer_21 = Char.Create(4 /* PEDTYPE_CIVMALE */, BMYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_21;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 22) {
          $.dancer_22 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_22;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 23) {
          $.dancer_23 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_23;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 24) {
          $.dancer_24 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYG1, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_24;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        if ($.counter_dancers == 25) {
          $.dancer_25 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, $.dancer_x, $.dancer_y, $.dancer_z); // far left pole
          $.var_dancer = $.dancer_25;
          await dancer_stuff();  // SCM GOSUB dancer_stuff
        }
        /*
        IF counter_dancers = 26
        CREATE_CHAR PEDTYPE_CIVMALE BMYRI dancer_x dancer_y dancer_z dancer_26 // far left pole
        var_dancer = dancer_26
        GOSUB dancer_stuff
        ENDIF
        IF counter_dancers = 27
        CREATE_CHAR PEDTYPE_CIVMALE CBa dancer_x dancer_y dancer_z dancer_27 // far left pole
        var_dancer = dancer_27
        GOSUB dancer_stuff
        ENDIF
        IF counter_dancers = 28
        CREATE_CHAR PEDTYPE_CIVFEMALE HFYRI dancer_x dancer_y dancer_z dancer_28 // far left pole
        var_dancer = dancer_28
        GOSUB dancer_stuff
        ENDIF
        IF counter_dancers = 29
        CREATE_CHAR PEDTYPE_CIVFEMALE WFYG1 dancer_x dancer_y dancer_z dancer_29 // far left pole
        var_dancer = dancer_29
        GOSUB dancer_stuff
        ENDIF
        IF counter_dancers = 30
        CREATE_CHAR PEDTYPE_CIVFEMALE BFYST dancer_x dancer_y dancer_z dancer_30 // far left pole
        var_dancer = dancer_30
        GOSUB dancer_stuff
        ENDIF
        */

      }

      // ************************** VILLAGE PEOPLE ******************************************************************

      $.dancer_26 = Char.Create(4 /* PEDTYPE_CIVMALE */, FIREMAN, 474.0, -72.14, 9.5);
      $.dancer_26.setHeading(310.0);
      $.var_dancer = $.dancer_26;
      await dancer_stuff();  // SCM GOSUB dancer_stuff
      $.dancer_27 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 473.2, -70.9, 9.5);
      $.dancer_27.setHeading(310.0);
      $.var_dancer = $.dancer_27;
      await dancer_stuff();  // SCM GOSUB dancer_stuff
      $.dancer_28 = Char.Create(4 /* PEDTYPE_CIVMALE */, BKa, 472.4, -69.65, 9.5);
      $.dancer_28.setHeading(310.0);
      $.var_dancer = $.dancer_28;
      await dancer_stuff();  // SCM GOSUB dancer_stuff
      $.dancer_29 = Char.Create(4 /* PEDTYPE_CIVMALE */, ARMY, 471.6, -68.4, 9.5);
      $.dancer_29.setHeading(310.0);
      $.var_dancer = $.dancer_29;
      await dancer_stuff();  // SCM GOSUB dancer_stuff
      $.dancer_30 = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 470.8, -67.15, 9.5);
      $.dancer_30.setHeading(310.0);
      $.var_dancer = $.dancer_30;
      await dancer_stuff();  // SCM GOSUB dancer_stuff

      // ************************** BOUNCERS *************************************************************************

      $.bouncer_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 487.8, -77.3, 10.5);
      $.bouncer_1.setHeading(55.0);
      $.bouncer_1.setPersonality(30 /* PEDSTAT_PSYCHO */);
      $.bouncer_1.giveWeapon(WEAPONTYPE_BRASSKNUCKLE, 0);
      $.bouncer_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 490.9, -74.4, 10.5);
      $.bouncer_2.setHeading(55.0);
      $.bouncer_2.setPersonality(30 /* PEDSTAT_PSYCHO */);
      $.bouncer_2.giveWeapon(WEAPONTYPE_BRASSKNUCKLE, 0);
      if ($.flag_bought_malibu == 0) {
        $.bouncer_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 463.2, -58.16, 10.5);
        $.bouncer_3.setHeading(250.0);
        $.bouncer_3.setPersonality(30 /* PEDSTAT_PSYCHO */);
        $.bouncer_3.setHealth(200);
        $.bouncer_3.giveWeapon(WEAPONTYPE_BRASSKNUCKLE, 0);
        $.bouncer_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 465.5, -51.7, 14.7);
        $.bouncer_4.setHeading(134.0);
        $.bouncer_4.setPersonality(30 /* PEDSTAT_PSYCHO */);
        $.bouncer_4.giveWeapon(WEAPONTYPE_BRASSKNUCKLE, 0);
        $.bar_staff1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, BFYRI, 465.25, -54.66, 10.5);
        $.bar_staff1.setHeading(50.0);
        $.bar_staff1.setPersonality(30 /* PEDSTAT_PSYCHO */);


      }
      else {
        $.bouncer_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 467.65, -60.36, 9.5);
        $.bouncer_3.setHeading(250.0);
        $.bouncer_3.setPersonality(30 /* PEDSTAT_PSYCHO */);
        $.bouncer_3.giveWeapon(WEAPONTYPE_BRASSKNUCKLE, 0);
        $.bouncer_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL19, 468.0, -55.6, 10.5);
        $.bouncer_4.setHeading(60.0);
        $.bouncer_4.setPersonality(30 /* PEDSTAT_PSYCHO */);
        $.bouncer_4.giveWeapon(WEAPONTYPE_BRASSKNUCKLE, 0);
        Streaming.LoadSpecialCharacter(18, "stripa");
        while (!(Streaming.HasSpecialCharacterLoaded(18))) {
          Streaming.LoadSpecialCharacter(18, "stripa");
          await asyncWait(0);
        }
        $.bar_staff1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, SPECIAL18, 466.6, -54.56, 10.5);
        $.bar_staff1.setHeading(245.0);
        $.bar_staff1.setPersonality(30 /* PEDSTAT_PSYCHO */);
        $.bar_staff1.setWaitState(25, 8000);


      }
      TIMERA = 0;
      $.flag_malibu_populate = 1;
    }


    if ($.flag_malibu_populate == 1) {
      if ($.player1.isPlaying()) {
        if ($.player1.isShooting() || $.player1.isWantedLevelGreater(0)) {
          if ($.flag_bought_malibu == 0) {
            await attack_the_bastard();  // SCM GOSUB attack_the_bastard
            //					ELSE
            //						IF NOT IS_CHAR_DEAD bouncer_1
            //							SET_PLAYER_AS_LEADER bouncer_1 player1
            //						ENDIF
            //						IF NOT IS_CHAR_DEAD bouncer_2
            //							SET_PLAYER_AS_LEADER bouncer_2 player1
            //						ENDIF
            //						IF NOT IS_CHAR_DEAD bouncer_3
            //							SET_PLAYER_AS_LEADER bouncer_3 player1
            //						ENDIF
            //						IF NOT IS_CHAR_DEAD bouncer_4
            //							SET_PLAYER_AS_LEADER bouncer_4 player1
            //						ENDIF

          }
        }
        if (TIMERA > 10000 && $.flag_launch_bouncers == 0) {
          if (!(Char.IsDead($.bar_staff1))) {
            $.bar_staff1.setWaitState(25, 8000);
          }
        }
        if ($.flag_bought_malibu == 0 && $.flag_launch_bouncers == 0 && !(Char.IsDead($.bar_staff1))) {
          if ($.player1.locateOnFoot3D(462.7, -57.3, 11.5, 1.5, 1.5, 2.0, false /* FALSE */)) {
            Streaming.RequestModel(buddyshot);
            while (!(Streaming.HasModelLoaded(buddyshot))) {
              Streaming.RequestModel(buddyshot);
              await asyncWait(0);
            }
            if (!(Char.IsDead($.bar_staff1)) && $.player1.isPlaying()) {
              $.bar_staff1.giveWeapon(WEAPONTYPE_STUBBY_SHOTGUN, 20);
              $.bar_staff1.setObjKillPlayerOnFoot($.player1);
            }
            await attack_the_bastard();  // SCM GOSUB attack_the_bastard
            $.flag_launch_bouncers = 1;
          }
        }
        if (TIMERA > 10000) {
          $.flag_ymca = 1;
          $.radial_float = Math.RandomFloatInRange(0.0, 360.0);
          if (!(Char.IsDead($.dancer_26))) {
            $.var_dancer = $.dancer_26;
            await dancer_stuff();  // SCM GOSUB dancer_stuff
          }
          if (!(Char.IsDead($.dancer_27))) {
            $.var_dancer = $.dancer_27;
            await dancer_stuff();  // SCM GOSUB dancer_stuff
          }
          if (!(Char.IsDead($.dancer_28))) {
            $.var_dancer = $.dancer_28;
            await dancer_stuff();  // SCM GOSUB dancer_stuff
          }
          if (!(Char.IsDead($.dancer_29))) {
            $.var_dancer = $.dancer_29;
            await dancer_stuff();  // SCM GOSUB dancer_stuff
          }
          if (!(Char.IsDead($.dancer_30))) {
            $.var_dancer = $.dancer_30;
            await dancer_stuff();  // SCM GOSUB dancer_stuff
          }
          TIMERA = 0;


        }


      }
    }
  }
  else {
    if ($.flag_malibu_populate > 0) {
      while (!($.player1.isPlaying())) {
        await asyncWait(0);
      }
      $.dancer_1.delete();
      $.dancer_2.delete();
      $.dancer_3.delete();
      $.dancer_4.delete();
      $.dancer_5.delete();
      $.dancer_6.delete();
      $.dancer_7.delete();
      $.dancer_8.delete();
      $.dancer_9.delete();
      $.dancer_10.delete();
      $.dancer_11.delete();
      $.dancer_12.delete();
      $.dancer_13.delete();
      $.dancer_14.delete();
      $.dancer_15.delete();
      $.dancer_16.delete();
      $.dancer_17.delete();
      $.dancer_18.delete();
      $.dancer_19.delete();
      $.dancer_20.delete();
      $.dancer_21.delete();
      $.dancer_22.delete();
      $.dancer_23.delete();
      $.dancer_24.delete();
      $.dancer_25.delete();
      $.dancer_26.delete();
      $.dancer_27.delete();
      $.dancer_28.delete();
      $.dancer_29.delete();
      $.dancer_30.delete();
      $.bar_staff1.delete();
      //DELETE_CHAR bar_staff2

      $.bouncer_1.delete();
      $.bouncer_2.delete();
      $.bouncer_3.delete();
      $.bouncer_4.delete();
      /*
      REQUEST_MODEL FIREMAN
      REQUEST_MODEL WMYCW
      REQUEST_MODEL ARMYSKIN
      REQUEST_MODEL BKa
      REQUEST_MODEL BGa

      REQUEST_MODEL WFYG1	//
      REQUEST_MODEL BFYST	//
      REQUEST_MODEL HFYRI	//
      REQUEST_MODEL BFYRI	//
      REQUEST_MODEL CBa	//
      REQUEST_MODEL BMYRI	//
      REQUEST_MODEL BMYBB	//
      */
      Streaming.MarkModelAsNoLongerNeeded(FIREMAN);
      Streaming.MarkModelAsNoLongerNeeded(WMYCW);
      Streaming.MarkModelAsNoLongerNeeded(ARMY);
      Streaming.MarkModelAsNoLongerNeeded(BKa);
      //MARK_MODEL_AS_NO_LONGER_NEEDED BGa

      Streaming.MarkModelAsNoLongerNeeded(WFYG1);
      //MARK_MODEL_AS_NO_LONGER_NEEDED BFYST
      Streaming.MarkModelAsNoLongerNeeded(HFYRI);
      Streaming.MarkModelAsNoLongerNeeded(BFYRI);
      Streaming.MarkModelAsNoLongerNeeded(CBa);
      Streaming.MarkModelAsNoLongerNeeded(BMYRI);
      Streaming.MarkModelAsNoLongerNeeded(BMYBB);
      Streaming.MarkModelAsNoLongerNeeded(brassknuckle);
      //MARK_MODEL_AS_NO_LONGER_NEEDED PSYCHO
      //MARK_MODEL_AS_NO_LONGER_NEEDED WFYBE

      Streaming.UnloadSpecialCharacter(19);
      if ($.flag_bought_malibu == 0) {
        if ($.flag_launch_bouncers == 1) {
          Streaming.MarkModelAsNoLongerNeeded(buddyshot);
        }
      }
      else {
        Streaming.UnloadSpecialCharacter(18);
      }
      Streaming.RemoveAnimation("STRIP");
      $.flag_malibu_populate = 0;
      $.counter_dancers = 0;
      $.dancer_x = 0.0;
      $.dancer_y = 0.0;
      $.radius = 0.0;
      $.radial_float = 0.0;
      $.flag_launch_bouncers = 0;
      $.flag_ymca = 0;
    }
  }
}





async function dance_floor_boogey() {


  $.dancer_x = Math.RandomFloatInRange(474.0, 481.0);
  $.dancer_y = Math.RandomFloatInRange(-69.0, -61.0);
  $.radial_float = Math.RandomFloatInRange(0.0, 360.0);
  /*
  radial_float = radial_float + radial_step
  radius = radius + radius_increment
  SIN radial_float dancer_x
  dancer_x = dancer_x * radius
  dancer_x = dancer_x + dancefloor_x
  COS radial_float dancer_y
  dancer_y = dancer_y * radius
  dancer_y = dancer_y + dancefloor_y
  */

  ++$.counter_dancers;
}



async function dancer_stuff() {
  if ($.flag_ymca < 1) {
    $.var_dancer.clearThreatSearch();
    $.var_dancer.setHeedThreats(true /* TRUE */);
    $.var_dancer.setPersonality(11 /* PEDSTAT_STREET_GUY */);
    $.var_dancer.setWaitState(WAITSTATE_STRIPPER, 999999);
    /*
    GENERATE_RANDOM_INT_IN_RANGE 1 3 var_pedstat
    IF var_pedstat = 1
    SET_CHAR_PERSONALITY var_dancer PEDSTAT_TOUGH_GUY
    ENDIF
    IF var_pedstat = 2
    SET_CHAR_PERSONALITY var_dancer PEDSTAT_STREET_GUY
    ENDIF
    IF var_pedstat = 3
    SET_CHAR_PERSONALITY var_dancer PEDSTAT_GEEK_GIRL
    ENDIF
    */

  }
  if ($.flag_ymca < 2) {
    $.var_dancer.setHeading($.radial_float);
  }
  //TURN_CHAR_TO_FACE_COORD var_dancer dancefloor_x dancefloor_y dancefloor_z
}




async function doorman_delete() {
  if ($.flag_create_doorman == 1) {
    Streaming.UnloadSpecialCharacter(15);
    //DELETE_CHAR door_man1
    //DELETE_CHAR door_man2
    $.door_man1.removeElegantly();
    $.door_man2.removeElegantly();
    $.flag_create_doorman = 0;
    $.flag_launch_doorman = 0;
  }
}



async function attack_the_bastard() {
  if ($.player1.isPlaying()) {
    if (!(Char.IsDead($.bouncer_1))) {
      $.bouncer_1.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.bouncer_2))) {
      $.bouncer_2.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.bouncer_3))) {
      $.bouncer_3.setObjKillPlayerOnFoot($.player1);
    }
    if (!(Char.IsDead($.bouncer_4))) {
      $.bouncer_4.setObjKillPlayerOnFoot($.player1);
    }
  }
}




async function aussie() {
  Streaming.RequestModel($.weapon_strip);
  while (!(Streaming.HasModelLoaded($.weapon_strip))) {
    await asyncWait(0);
  }
}



async function aussie2() {
  Streaming.MarkModelAsNoLongerNeeded($.weapon_strip);
}




async function vehicle_heading() {
  if ($.player1.isPlaying()) {
    if ($.player1.isOnAnyBike() || $.player1.isInModel(CADDY)) {
      $.player_car_interiors = $.player1.storeCarIsInNoSave();
      $.player_car_interiors.setHeading($.float_heading);
    }
    else {
      $.player1.setHeading($.float_heading);
    }
  }
}

export async function interiors() {
  // MissionBoundary

  // ********** DECLARE VARIABLES *************************************


  // VAR_INT wanted_interior
  // VAR_INT flag_player_in_bank
  // VAR_INT flag_player_in_malibu
  // VAR_INT flag_player_in_cop_shop
  // VAR_INT flag_player_in_shooting_range
  // VAR_INT flag_player_in_cafe
  // VAR_INT flag_player_in_apartment3c
  // VAR_INT flag_player_in_mansion


  // VAR_INT flag_eject

  //VAR_INT flag_bank_job

  // VAR_INT flag_player_on_lawyer_2
  // VAR_INT flag_player_on_counter_1
  // VAR_INT flag_player_on_bank_2
  // VAR_INT flag_kent_mission_active
  // VAR_INT flag_player_on_bank1_mission
  // VAR_INT flag_player_control
  // VAR_INT flag_membership
  // VAR_INT flag_player_on_colonel1_mission flag_open_mansion


  // VAR_INT flag_player_in_stripclub flag_player_in_mall player_car_interiors
  // VAR_INT flag_strip_doors_closed flag_strip_doors_open strip_doors


  // VAR_INT flag_cop_doors_closed flag_cop_doors_open cop_doors
  // VAR_INT flag_malibu_doors_closed flag_malibu_doors_open malibu_doors


  // VAR_INT flag_strip_populate
  // VAR_INT ped_routine_1 ped_routine_2 ped_routine_3 ped_routine_4 ped_routine_5
  //VAR_INT ped_routine_6 ped_routine_7 ped_routine_8 ped_routine_9 ped_routine_10


  // VAR_INT s_punter_1 s_punter_2 s_punter_3 s_punter_4
  // VAR_INT s_punter_5 s_punter_6


  // VAR_INT bar_staff1 bar_staff2 flag_arm_barstaff
  // VAR_INT bouncer_1 bouncer_2 bouncer_3 bouncer_4
  // VAR_INT flag_launch_bouncers flag_arm_bouncers
  // VAR_INT ped_rumble ped_flee
  // VAR_INT door_man1 door_man2 flag_create_doorman flag_launch_doorman


  // VAR_INT dancer_1 dancer_2 dancer_3 dancer_4
  // VAR_INT dancer_5 dancer_6 dancer_7 dancer_8
  // VAR_INT dancer_9 dancer_10 dancer_11 dancer_12
  // VAR_INT dancer_13 dancer_14 dancer_15 dancer_16
  // VAR_INT dancer_17 dancer_18 dancer_19 dancer_20
  // VAR_INT dancer_21 dancer_22 dancer_23 dancer_24
  // VAR_INT dancer_25 dancer_26 dancer_27 dancer_28
  // VAR_INT dancer_29 dancer_30
  // VAR_INT club_owner
  // VAR_INT flag_arm_dancer2


  // VAR_INT jobby_1 jobby_2 jobby_3 jobby_4
  // VAR_INT jobby_5 jobby_6 jobby_7 jobby_8
  // VAR_INT jobby_9 stroop weapon_strip


  // VAR_INT flag_player_on_rc_mission

  //VAR_INT testblip_1 testblip_2 testblip_3 testblip_4
  //VAR_INT testblip_5 testblip_6 testblip_7 testblip_8


  // VAR_INT timer_populate_start


  // VAR_INT counter_tittycash_spent counter_strip_cam
  // VAR_INT flag_player_in_hotel


  // VAR_INT flag_malibu_populate counter_dancers var_dancer flag_bought_malibu
  // VAR_INT flag_ymca


  // VAR_INT flag_interiors_cleanup


  // VAR_INT pooz_counter
  // VAR_INT flag_strip_asset_cutscene private_dancer
  // VAR_INT counter_private_dancer

  //VAR_FLOAT dancefloor_x dancefloor_y dancefloor_z

  // VAR_FLOAT dancer_x dancer_y dancer_z
  // VAR_FLOAT radial_float radius
  // VAR_FLOAT float_heading

  //VAR_INT flag_shooting_range_blob
  //VAR_FLOAT

  // ********** SET FLAGS AND VARIABLES *******************************


  $.wanted_interior = 0;
  //flag_player_inside = 0

  $.flag_player_on_bank_2 = 0;
  $.flag_player_on_bank1_mission = 0;
  $.flag_player_on_colonel1_mission = 0;
  //flag_player_on_kent_1 = 0

  $.flag_player_on_lawyer_2 = 0;
  $.flag_player_on_counter_1 = 0;
  $.flag_kent_mission_active = 0;


  $.flag_player_in_stripclub = 0;
  $.flag_player_in_mall = 0;
  $.flag_player_in_hotel = 0;
  $.flag_player_in_shooting_range = 0;
  $.flag_player_in_cop_shop = 0;
  $.flag_player_in_cafe = 0;
  $.flag_player_in_mansion = 0;
  $.flag_player_in_malibu = 0;
  $.flag_player_in_bank = 0;
  $.flag_player_in_apartment3c = 0;


  $.flag_open_mansion = 0;


  $.flag_strip_doors_open = 0;
  $.flag_strip_doors_closed = 0;
  $.flag_cop_doors_open = 0;
  $.flag_cop_doors_closed = 0;
  $.flag_malibu_doors_closed = 0;
  $.flag_malibu_doors_open = 0;


  $.flag_strip_populate = 0;
  //flag_ws_set_once = 0


  $.flag_launch_bouncers = 0;
  $.flag_arm_barstaff = 0;
  $.flag_arm_dancer2 = 0;
  $.flag_membership = 0;
  //flag_membership = 1 // TEST TO COME OUT!!!

  $.flag_arm_bouncers = 0;


  $.flag_create_doorman = 0;
  $.flag_launch_doorman = 0;


  $.counter_tittycash_spent = 0;
  $.counter_strip_cam = 0;


  $.flag_malibu_populate = 0;

  //dancefloor_x = 477.0
  //dancefloor_y = -64.7
  //dancefloor_z = 9.98


  $.dancer_z = 9.0;
  $.radial_float = 0.0;
  $.radius = 0.0;


  $.counter_dancers = 0;
  $.flag_bought_malibu = 0;
  $.flag_ymca = 0;


  $.flag_interiors_cleanup = 0;
  //flag_stripper_create = 0

  $.flag_strip_asset_cutscene = 0;


  $.pooz_counter = 0;
  $.counter_private_dancer = 0;


  $.flag_player_on_rc_mission = 0;


  // ********** MAIN SCRIPT *******************************************


  // SCRIPT_NAME INTERIO


  // SET_DEATHARREST_STATE(false /* OFF */); //stops script being terminated if Player dies/arrested



}
