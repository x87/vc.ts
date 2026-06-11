// Generated from main/security.sc

import { $ } from "../utils/vars.mts";

async function mission_start_security() {




  // START_NEW_SCRIPT security 
  //START_NEW_SCRIPT airport_security
  //START_NEW_SCRIPT aport2_security


  // MissionBoundary
}




/*
SWITCH_ROADS_OFF 84.0 286.0 0.0 88.0 290.0 30.0
SWITCH_ROADS_OFF 92.0 301.0 0.0 96.0 305.0 30.0
SWITCH_ROADS_OFF 76.0 312.0 0.0 80.0 316.0 30.0
SWITCH_ROADS_OFF 144.0 458.0 0.0 148.0 502.0 30.0
SWITCH_ROADS_OFF 109.0 483.0 0.0 113.0 487.0 30.0
SWITCH_ROADS_OFF 96.0 492.0 0.0 100.0 496.0 30.0
SWITCH_ROADS_OFF -96.0 557.0 0.0 -100.0 561.0 30.0
SWITCH_ROADS_OFF -121.0 571.0 0.0 -117.0 575.0 30.0
SWITCH_ROADS_OFF -176.0 481.0 0.0 -172.0 485.0 30.0
SWITCH_ROADS_OFF 15.6 102.0 0.0 19.6 106.0 30.0
SWITCH_ROADS_OFF 144.0 66.5 0.0 148.0 70.5 30.0
*/

async function security() {





  // SCRIPT_NAME SECURI


  Path.SwitchRoadsOff(-291.0, -287.0, 0.0, 208.0, 648.0, 35.0);
  Path.SwitchRoadsOff(-291.0, -287.0, 0.0, 208.0, 648.0, 35.0);
  Path.SwitchRoadsOff(-283.0, 372.0, 0.0, -137.0, 608.0, 35.0);


  // SCM GOTO → filopastry (not lowered; manual jump required)
  throw new Error("unresolved GOTO filopastry"); // fallback: would break linear control flow
  $.slot1_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot2_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot3_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot4_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot5_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot6_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot7_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot8_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.slot9_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
  $.security_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, $.gate_security_1_x, $.gate_security_1_y, $.gate_security_1_z);
  $.security_bloke2 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, $.gate_security_1_x, $.gate_security_1_y, $.gate_security_1_z);
}



async function filopastry() {

}



async function security_inner() {
  // SCM GOTO → security_inner lowered to endless loop
  while (true) {


    await asyncWait(0);
    ++$.sec_counter;
    if ($.player1.isPlaying()) {
      /*
      IF IS_PLAYER_IN_AREA_3D player1	-306.0 292.0 0.0 203.0 614.0 30.0 FALSE
      ENDIF
      */
      $.var_rampage_check = KillFrenzy.ReadStatus();
      if (!($.var_rampage_check == 1)) {
        if ($.sec_counter == 1) {
          if ($.player1.isInZone("GOLFC")) {


            $.flag_zone = 1;
            $.metal_detector_x = 95.0;
            $.metal_detector_y = 267.7;
            $.metal_detector_z = 21.0;
            $.security_cam_x_subject = $.metal_detector_x;
            $.security_cam_y_subject = $.metal_detector_y;
            $.security_cam_z_subject = $.metal_detector_z;
            $.pickup_x = $.metal_detector_x;
            $.pickup_y = $.metal_detector_y;
            $.pickup_z = $.metal_detector_z + 1.0;
            $.security_cam_1_x = 99.0;
            $.security_cam_1_y = 257.0;
            $.security_cam_1_z = 24.4;
            $.security_cam_2_x = 90.3;
            $.security_cam_2_y = 277.6;
            $.security_cam_2_z = 24.5;
            $.gate_security_1_x = 91.1;
            $.gate_security_1_y = 270.0;
            $.gate_security_1_z = 21.8;
            $.gate_security_2_x = 95.8;
            $.gate_security_2_y = 271.5;
            $.gate_security_2_z = 21.8;

            //IF LOCATE_PLAYER_ANY_MEANS_3D player1 metal_detector_x metal_detector_y metal_detector_z 35.0 35.0 35.0 FALSE
            if ($.player1.locateAnyMeans3D($.metal_detector_x, $.metal_detector_y, $.metal_detector_z, 8.0, 8.0, 3.0, false /* FALSE */)) {
              const _res466 = $.player1.getCoordinates();
$.zob_x = _res466.x;
$.zob_y = _res466.y;
$.zob_z = _res466.z;
              if ($.zob_y < $.metal_detector_y) {
                if ($.flag_cam_switch == 0) {
                  Camera.SetFixedPosition($.security_cam_1_x, $.security_cam_1_y, $.security_cam_1_z, 0.0, 0.0, 0.0);
                  Camera.PointAtPoint($.security_cam_x_subject, $.security_cam_y_subject, $.security_cam_z_subject, 2 /* JUMP_CUT */);
                  Camera.SwitchSecurity(true /* ON */);
                  $.flag_cam_switch = 1;
                }
              }
              if ($.zob_y > $.metal_detector_y) {
                if ($.flag_cam_switch == 0) {
                  Camera.SetFixedPosition($.security_cam_2_x, $.security_cam_2_y, $.security_cam_2_z, 0.0, 0.0, 0.0);
                  Camera.PointAtPoint($.security_cam_x_subject, $.security_cam_y_subject, $.security_cam_z_subject, 2 /* JUMP_CUT */);
                  Camera.SwitchSecurity(true /* ON */);
                  $.flag_cam_switch = 2;
                }
              }


              if ($.player1.locateAnyMeans3D($.metal_detector_x, $.metal_detector_y, $.metal_detector_z, 1.0, 1.0, 1.5, false /* FALSE */)) {
                await get_ammo();  // SCM GOSUB get_ammo
                await security_pickups();  // SCM GOSUB security_pickups
                await is_player_on_bike();  // SCM GOSUB is_player_on_bike
              }
            }
            else {
              if (!($.flag_cam_switch == 0)) {
                $.player_heading = $.player1.getHeading();
                if ($.flag_cam_switch == 1) {
                  if ($.player_heading > 155.0 && $.player_heading < 245.0) {
                    Camera.RestoreJumpcut();
                    Camera.SwitchSecurity(false /* OFF */);
                    Camera.SetInFrontOfPlayer();
                  }
                  else {
                    Camera.RestoreJumpcut();
                    Camera.SwitchSecurity(false /* OFF */);
                  }
                }
                if ($.flag_cam_switch == 2) {
                  if ($.player_heading > 290.0 || $.player_heading < 110.0) {
                    Camera.RestoreJumpcut();
                    Camera.SwitchSecurity(false /* OFF */);
                    Camera.SetInFrontOfPlayer();
                  }
                  else {
                    Camera.RestoreJumpcut();
                    Camera.SwitchSecurity(false /* OFF */);
                  }
                }
                $.flag_cam_switch = 0;
              }
            }
            if ($.flag_goons_created == 1) {
              if (!(Char.IsDead($.security_bloke1))) {
                if (!($.security_bloke1.isHealthGreater(90))) {
                  await kill_them_all_1();  // SCM GOSUB kill_them_all_1
                  await kill_them_all_2();  // SCM GOSUB kill_them_all_2
                }
              }
              else {
                $.security_bloke1.markAsNoLongerNeeded();
                await kill_them_all_2();  // SCM GOSUB kill_them_all_2
              }
              if (!(Char.IsDead($.security_bloke2))) {
                if (!($.security_bloke2.isHealthGreater(90))) {
                  await kill_them_all_1();  // SCM GOSUB kill_them_all_1
                  await kill_them_all_2();  // SCM GOSUB kill_them_all_2
                }
              }
              else {
                $.security_bloke2.markAsNoLongerNeeded();
                await kill_them_all_1();  // SCM GOSUB kill_them_all_1
              }
              if ($.flag_player_on_bike == 1) {
                await kill_them_all_1();  // SCM GOSUB kill_them_all_1
                await kill_them_all_2();  // SCM GOSUB kill_them_all_2
              }
            }
            if ($.flag_goons_created == 0) {
              $.ground_z = 0.0000;
              $.flag_security_model_loaded = 0;
              $.ground_z = World.GetGroundZFor3DCoord($.gate_security_1_x, $.gate_security_1_y, 50.0);
              if (!($.ground_z == 0.0000)) {
                if (Streaming.HasModelLoaded(GDa)) {
                  $.flag_security_model_loaded = 1;
                }
                if ($.flag_security_model_loaded == 0) {
                  Streaming.RequestModel(GDa);
                  while (!(Streaming.HasModelLoaded(GDa))) {
                    await asyncWait(0);
                  }
                }
                $.security_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, $.gate_security_1_x, $.gate_security_1_y, $.gate_security_1_z);
                $.security_bloke1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                $.security_bloke1.setHeading(300.0);
                $.security_bloke1.setIdle();
                $.security_bloke2 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, $.gate_security_2_x, $.gate_security_2_y, $.gate_security_2_z);
                $.security_bloke2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                $.security_bloke2.setHeading(130.0);
                $.security_bloke2.setIdle();
                if ($.flag_security_model_loaded == 0) {
                  Streaming.MarkModelAsNoLongerNeeded(GDa);
                }
                $.flag_security_model_loaded = 0;
                $.flag_goons_created = 1;
              }
            }



            //GOSUB pickup_check


          }
          else {
            if ($.flag_zone == 1) {
              if ($.flag_goons_created == 1) {
                if (!(Char.IsDead($.security_bloke1))) {
                  $.security_bloke1.markAsNoLongerNeeded();
                }
                if (!(Char.IsDead($.security_bloke2))) {
                  $.security_bloke2.markAsNoLongerNeeded();
                }
                $.flag_goons_created = 0;
                $.flag_1_tooled = 0;
                $.flag_2_tooled = 0;
              }
              await security_zone_cleanup();  // SCM GOSUB security_zone_cleanup
              $.flag_zone = 0;
            }

            //flag_player_been_frisked = 0
            $.outer_switch_quickstep = 0;
          }
        }
      }
    }
    else {
      await security_zone_cleanup();  // SCM GOSUB security_zone_cleanup
    }

    // ******************** AIRPORT ************************************************************************************


    if ($.player1.isPlaying()) {
      $.var_rampage_check = KillFrenzy.ReadStatus();
      if (!($.var_rampage_check == 1)) {
        if ($.sec_counter == 2) {
          if ($.player1.isInZone("A_PORT")) {


            $.flag_zone = 2;

            // *********** GATE 1 ************************************************************************************
            $.metal_detector_x = -1464.1;
            $.metal_detector_y = -830.6;
            $.metal_detector_z = 13.9;
            $.pickup_z = $.metal_detector_z + 1.0;
            if ($.player1.locateAnyMeans3D($.metal_detector_x, $.metal_detector_y, $.metal_detector_z, 1.0, 1.0, 1.5, false /* FALSE */)) {
              if ($.flag_gate == 2) {
                $.outer_switch_quickstep = 0;
              }
              $.flag_gate = 1;
              await get_ammo();  // SCM GOSUB get_ammo
              await security_pickups();  // SCM GOSUB security_pickups
              await is_player_on_bike();  // SCM GOSUB is_player_on_bike
            }
            //GOSUB pickup_check

            // *********** GATE 2 ************************************************************************************
            $.metal_detector_x = -1408.3;
            $.metal_detector_y = -831.5;
            $.metal_detector_z = 13.9;
            $.pickup_z = $.metal_detector_z + 1.0;
            if ($.player1.locateAnyMeans3D($.metal_detector_x, $.metal_detector_y, $.metal_detector_z, 1.0, 1.0, 1.5, false /* FALSE */)) {
              if ($.flag_gate == 1) {
                $.outer_switch_quickstep = 0;
              }
              $.flag_gate = 2;
              await get_ammo();  // SCM GOSUB get_ammo
              await security_pickups();  // SCM GOSUB security_pickups
              await is_player_on_bike();  // SCM GOSUB is_player_on_bike
            }
            //GOSUB pickup_check
            if ($.flag_player_on_bike == 1) {
              Game.SetThreatForPedType(11 /* PEDTYPE_GANG_SECURITY */, 1 /* THREAT_PLAYER1 */);
            }
          }
          else {
            if ($.flag_zone == 2) {
              await security_zone_cleanup();  // SCM GOSUB security_zone_cleanup
              Game.ClearThreatForPedType(11 /* PEDTYPE_GANG_SECURITY */, 1 /* THREAT_PLAYER1 */);
              $.flag_player_on_bike = 0;
              $.theta_security = 0.0;
              $.flag_gate = 0;
              $.flag_zone = 0;
            }

            //flag_player_been_frisked = 0
            $.outer_switch_quickstep = 0;
          }
        }
      }
    }
    else {
      await security_zone_cleanup();  // SCM GOSUB security_zone_cleanup
    }

    // ************************* POLICE HQ WANTED LEVEL **********************************************


    if ($.player1.isPlaying() && ONMISSION == 0) {
      if ($.player1.isInZone("BEACH2")) {
        if ($.flag_player_in_cop_shop == 1) {
          if (!($.player1.isWearing("player6"))) {
            if (!($.player1.locateAnyMeans3D(392.0, -478.5, 12.4, 5.0, 5.0, 5.0, false /* FALSE */))) {
              $.player1.alterWantedLevelNoDrop(2);
            }
          }
        }
      }
    }


    // ***************************** GOLF CARS *******************************************************


    if ($.player1.isPlaying()) {
      if ($.player1.isInInfoZone("GOLF1") || $.player1.isInInfoZone("GOLF2")) {
        if ($.flag_golf_course_nodes == 0) {
          Path.SwitchRoadsOn(-291.0, -287.0, 0.0, 208.0, 648.0, 35.0);
          Path.SwitchRoadsOn(-291.0, -287.0, 0.0, 208.0, 648.0, 35.0);
          Path.SwitchRoadsOn(-283.0, 372.0, 0.0, -137.0, 608.0, 35.0);
          if ($.flag_baron_mission2_passed == 0) {
            Path.SwitchRoadsOff(189.8, 230.3, 0.0, 248.0, 258.5, 30.0); //  Golf course road block
            Path.SwitchRoadsOff(-38.0, 84.3, 0.0, -102.3, 95.1, 30.0); //  Golf course road block
          }
          /*
          SWITCH_ROADS_ON 84.0 286.0 0.0 88.0 290.0 30.0
          SWITCH_ROADS_ON 92.0 301.0 0.0 96.0 305.0 30.0
          SWITCH_ROADS_ON 76.0 312.0 0.0 80.0 316.0 30.0
          SWITCH_ROADS_ON 144.0 458.0 0.0 148.0 502.0 30.0
          SWITCH_ROADS_ON 109.0 483.0 0.0 113.0 487.0 30.0
          SWITCH_ROADS_ON 96.0 492.0 0.0 100.0 496.0 30.0
          SWITCH_ROADS_ON -96.0 557.0 0.0 -100.0 561.0 30.0
          SWITCH_ROADS_ON -121.0 571.0 0.0 -117.0 575.0 30.0
          SWITCH_ROADS_ON -176.0 481.0 0.0 -172.0 485.0 30.0
          SWITCH_ROADS_ON 15.6 102.0 0.0 19.6 106.0 30.0
          SWITCH_ROADS_ON 144.0 66.5 0.0 148.0 70.5 30.0
          */
          $.flag_golf_course_nodes = 1;
        }
      }
      else {
        if ($.flag_golf_course_nodes == 1) {
          Path.SwitchRoadsOff(-291.0, -287.0, 0.0, 208.0, 648.0, 35.0);
          Path.SwitchRoadsOff(-291.0, -287.0, 0.0, 208.0, 648.0, 35.0);
          Path.SwitchRoadsOff(-283.0, 372.0, 0.0, -137.0, 608.0, 35.0);

          /*
          SWITCH_ROADS_OFF 84.0 286.0 0.0 88.0 290.0 30.0
          SWITCH_ROADS_OFF 92.0 301.0 0.0 96.0 305.0 30.0
          SWITCH_ROADS_OFF 76.0 312.0 0.0 80.0 316.0 30.0
          SWITCH_ROADS_OFF 144.0 458.0 0.0 148.0 502.0 30.0
          SWITCH_ROADS_OFF 109.0 483.0 0.0 113.0 487.0 30.0
          SWITCH_ROADS_OFF 96.0 492.0 0.0 100.0 496.0 30.0
          SWITCH_ROADS_OFF -96.0 557.0 0.0 -100.0 561.0 30.0
          SWITCH_ROADS_OFF -121.0 571.0 0.0 -117.0 575.0 30.0
          SWITCH_ROADS_OFF -176.0 481.0 0.0 -172.0 485.0 30.0
          SWITCH_ROADS_OFF 15.6 102.0 0.0 19.6 106.0 30.0
          SWITCH_ROADS_OFF 144.0 66.5 0.0 148.0 70.5 30.0
          */
          $.flag_golf_course_nodes = 0;
        }
      }
    }



    //	IF IS_PLAYER_PLAYING player1
    //		IF IS_PLAYER_IN_ZONE player1



    if ($.sec_counter > 1) {
      $.sec_counter = 0;
    }
  }
}





async function get_ammo() {
  const _res467 = $.scplayer.getWeaponInSlot(1);
$.bollox_1 = _res467.weaponType;
$.ammo_slot_1 = _res467.weaponAmmo;
$.weapon_model_slot_1 = _res467.weaponModel;
  const _res468 = $.scplayer.getWeaponInSlot(2);
$.bollox_2 = _res468.weaponType;
$.ammo_slot_2 = _res468.weaponAmmo;
$.weapon_model_slot_2 = _res468.weaponModel;
  const _res469 = $.scplayer.getWeaponInSlot(3);
$.bollox_3 = _res469.weaponType;
$.ammo_slot_3 = _res469.weaponAmmo;
$.weapon_model_slot_3 = _res469.weaponModel;
  const _res470 = $.scplayer.getWeaponInSlot(4);
$.bollox_3 = _res470.weaponType;
$.ammo_slot_4 = _res470.weaponAmmo;
$.weapon_model_slot_4 = _res470.weaponModel;
  const _res471 = $.scplayer.getWeaponInSlot(5);
$.bollox_3 = _res471.weaponType;
$.ammo_slot_5 = _res471.weaponAmmo;
$.weapon_model_slot_5 = _res471.weaponModel;
  const _res472 = $.scplayer.getWeaponInSlot(6);
$.bollox_3 = _res472.weaponType;
$.ammo_slot_6 = _res472.weaponAmmo;
$.weapon_model_slot_6 = _res472.weaponModel;
  const _res473 = $.scplayer.getWeaponInSlot(7);
$.bollox_3 = _res473.weaponType;
$.ammo_slot_7 = _res473.weaponAmmo;
$.weapon_model_slot_7 = _res473.weaponModel;
  const _res474 = $.scplayer.getWeaponInSlot(8);
$.bollox_3 = _res474.weaponType;
$.ammo_slot_8 = _res474.weaponAmmo;
$.weapon_model_slot_8 = _res474.weaponModel;
  const _res475 = $.scplayer.getWeaponInSlot(9);
$.bollox_3 = _res475.weaponType;
$.ammo_slot_9 = _res475.weaponAmmo;
$.weapon_model_slot_9 = _res475.weaponModel;


  $.player1.removeAllWeapons();


  if ($.flag_zone == 1) {
    if ($.weapon_model_slot_1 > 0) {
      $.player1.giveWeapon($.bollox_1, $.ammo_slot_1);
    }
    if ($.weapon_model_slot_2 > 0) {
      $.player1.giveWeapon($.bollox_2, $.ammo_slot_2);
    }
  }

  //shotgun_ammo = 10 //test stuff to come out!
  //PRINT_WITH_NUMBER_NOW QTY_1 shotgun_ammo 3000 2	// test stuff to come out!

  $.outer_switch_quickstep = 0;
  $.counter_quickstep = 0;
}



async function security_pickups() {


  if ($.flag_zone == 2) {
    if ($.weapon_model_slot_1 > 0) {
      //++ outer_switch_quickstep
      /*
      REQUEST_MODEL weapon_model_slot_1
      WHILE NOT HAS_MODEL_LOADED weapon_model_slot_1
      WAIT 0
      ENDWHILE
      */
      $.slot1_pickup_security.remove();
      await quick_stepping();  // SCM GOSUB quick_stepping
      $.slot1_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_1, 3 /* PICKUP_ONCE */, $.ammo_slot_1, $.pickup_x, $.pickup_y, $.pickup_z);
      //flag_slot1_pickup = 1

    }
    if ($.weapon_model_slot_2 > 0) {
      //++ outer_switch_quickstep
      /*
      REQUEST_MODEL weapon_model_slot_2
      WHILE NOT HAS_MODEL_LOADED weapon_model_slot_2
      WAIT 0
      ENDWHILE
      */
      $.slot2_pickup_security.remove();
      await quick_stepping();  // SCM GOSUB quick_stepping
      $.slot2_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_2, 3 /* PICKUP_ONCE */, $.ammo_slot_2, $.pickup_x, $.pickup_y, $.pickup_z);
      //ADD_BLIP_FOR_COORD pickup_x pickup_y pickup_z blippage_de_test2 // TEST TO COME OUT !!!!
      //flag_slot2_pickup = 1

    }
  }


  if ($.weapon_model_slot_3 > 0) {
    //++ outer_switch_quickstep
    /*
    REQUEST_MODEL weapon_model_slot_3
    WHILE NOT HAS_MODEL_LOADED weapon_model_slot_3
    WAIT 0
    ENDWHILE
    */
    $.slot3_pickup_security.remove();
    await quick_stepping();  // SCM GOSUB quick_stepping
    $.slot3_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_3, 3 /* PICKUP_ONCE */, $.ammo_slot_3, $.pickup_x, $.pickup_y, $.pickup_z);
    //ADD_BLIP_FOR_COORD pickup_x pickup_y pickup_z blippage_de_test // TEST TO COME OUT !!!!
    //flag_slot3_pickup = 1

  }


  if ($.weapon_model_slot_4 > 0) {
    //++ outer_switch_quickstep
    /*
    REQUEST_MODEL weapon_model_slot_4
    WHILE NOT HAS_MODEL_LOADED weapon_model_slot_4
    WAIT 0
    ENDWHILE
    */
    $.slot4_pickup_security.remove();
    await quick_stepping();  // SCM GOSUB quick_stepping
    $.slot4_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_4, 3 /* PICKUP_ONCE */, $.ammo_slot_4, $.pickup_x, $.pickup_y, $.pickup_z);
    //flag_slot4_pickup = 1

  }


  if ($.weapon_model_slot_5 > 0) {
    //++ outer_switch_quickstep
    /*
    REQUEST_MODEL weapon_model_slot_5
    WHILE NOT HAS_MODEL_LOADED weapon_model_slot_5
    WAIT 0
    ENDWHILE
    */
    $.slot5_pickup_security.remove();
    await quick_stepping();  // SCM GOSUB quick_stepping
    $.slot5_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_5, 3 /* PICKUP_ONCE */, $.ammo_slot_5, $.pickup_x, $.pickup_y, $.pickup_z);
    //flag_slot5_pickup = 1

  }


  if ($.weapon_model_slot_6 > 0) {
    //++ outer_switch_quickstep
    /*
    REQUEST_MODEL weapon_model_slot_6
    WHILE NOT HAS_MODEL_LOADED weapon_model_slot_6
    WAIT 0
    ENDWHILE
    */
    $.slot6_pickup_security.remove();
    await quick_stepping();  // SCM GOSUB quick_stepping
    $.slot6_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_6, 3 /* PICKUP_ONCE */, $.ammo_slot_6, $.pickup_x, $.pickup_y, $.pickup_z);
    //flag_slot6_pickup = 1

  }


  if ($.weapon_model_slot_7 > 0) {
    //++ outer_switch_quickstep
    /*
    REQUEST_MODEL weapon_model_slot_7
    WHILE NOT HAS_MODEL_LOADED weapon_model_slot_7
    WAIT 0
    ENDWHILE
    */
    $.slot7_pickup_security.remove();
    await quick_stepping();  // SCM GOSUB quick_stepping
    $.slot7_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_7, 3 /* PICKUP_ONCE */, $.ammo_slot_7, $.pickup_x, $.pickup_y, $.pickup_z);
    //flag_slot7_pickup = 1

  }


  if ($.weapon_model_slot_8 > 0) {
    //++ outer_switch_quickstep
    /*
    REQUEST_MODEL weapon_model_slot_8
    WHILE NOT HAS_MODEL_LOADED weapon_model_slot_8
    WAIT 0
    ENDWHILE
    */
    $.slot8_pickup_security.remove();
    await quick_stepping();  // SCM GOSUB quick_stepping
    $.slot8_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_8, 3 /* PICKUP_ONCE */, $.ammo_slot_8, $.pickup_x, $.pickup_y, $.pickup_z);
    //flag_slot8_pickup = 1

  }


  if ($.weapon_model_slot_9 > 0) {
    //++ outer_switch_quickstep
    /*
    REQUEST_MODEL weapon_model_slot_8
    WHILE NOT HAS_MODEL_LOADED weapon_model_slot_8
    WAIT 0
    ENDWHILE
    */
    $.slot9_pickup_security.remove();
    await quick_stepping();  // SCM GOSUB quick_stepping
    $.slot9_pickup_security = Pickup.CreateWithAmmo($.weapon_model_slot_9, 3 /* PICKUP_ONCE */, $.ammo_slot_9, $.pickup_x, $.pickup_y, $.pickup_z);
    //flag_slot8_pickup = 1

  }
}









async function quick_stepping() {

}



async function quick_stepping_inner() {
  await asyncWait(0);
  ++$.outer_switch_quickstep;
  if ($.flag_zone == 1) {
    if ($.outer_switch_quickstep > 1) {
      if ($.counter_quickstep == 4) {
        $.pickup_x = $.pickup_x + 3.7;
        $.pickup_y = $.pickup_y + 1.5;
        ++$.counter_quickstep;
      }
      if ($.counter_quickstep == 3) {
        $.pickup_y = $.pickup_y - 1.85;
        $.pickup_x = $.pickup_x + 0.75;
        ++$.counter_quickstep;
      }
      if ($.counter_quickstep == 2) {
        $.pickup_x = $.pickup_x - 3.7;
        $.pickup_y = $.pickup_y - 1.5;
        ++$.counter_quickstep;
      }
      if ($.counter_quickstep == 1) {
        $.pickup_y = $.pickup_y - 1.85;
        $.pickup_x = $.pickup_x + 0.75;
        ++$.counter_quickstep;
      }
      if ($.counter_quickstep == 0) {
        $.pickup_x = $.pickup_x + 3.7;
        $.pickup_y = $.pickup_y + 1.5;
        ++$.counter_quickstep;
      }
      if ($.counter_quickstep > 4) {
        $.counter_quickstep = 0;
      }
    }
    else {
      $.pickup_x = $.metal_detector_x - 1.4;
      $.pickup_y = $.metal_detector_y - 2.6;
    }
  }
  if ($.flag_zone == 2) {
    if ($.flag_gate == 1) {
      $.theta_mod = -5.0;
    }
    else {
      $.theta_mod = 5.0;
    }
    if ($.outer_switch_quickstep > 1) {
      if ($.counter_quickstep < 10) {
        $.theta_security = $.theta_security + $.theta_mod;
        await radial_malarkey();  // SCM GOSUB radial_malarkey
        ++$.counter_quickstep;
      }
      else {
        $.counter_quickstep = 0;
      }
    }
    else {
      if ($.flag_gate == 1) {
        $.theta_security = 220.0;
        await radial_malarkey();  // SCM GOSUB radial_malarkey
      }
      if ($.flag_gate == 2) {
        $.theta_security = 140.0;
        await radial_malarkey();  // SCM GOSUB radial_malarkey
      }
    }
  }
  if (World.IsAnyPickupAtCoords($.pickup_x, $.pickup_y, $.pickup_z)) {
    // SCM GOTO → quick_stepping_inner (not lowered; manual jump required)
    throw new Error("unresolved GOTO quick_stepping_inner"); // fallback: would break linear control flow
  }
}




async function radial_malarkey() {
  $.pickup_x = Math.Sin($.theta_security);
  $.pickup_x = $.pickup_x * 34.5;
  $.pickup_x = $.pickup_x + $.cent_x;
  $.pickup_y = Math.Cos($.theta_security);
  $.pickup_y = $.pickup_y * 34.5;
  $.pickup_y = $.pickup_y + $.cent_y;
}


/*
pickup_check:

IF IS_PLAYER_PLAYING player1
AND flag_zone > 0
GET_CHAR_WEAPON_IN_SLOT scplayer 1 bollox_1 ammo_slot_1 weapon_model_slot_1
GET_CHAR_WEAPON_IN_SLOT scplayer 2 bollox_2 ammo_slot_2 weapon_model_slot_2
GET_CHAR_WEAPON_IN_SLOT scplayer 3 bollox_3 ammo_slot_3 weapon_model_slot_3
GET_CHAR_WEAPON_IN_SLOT scplayer 4 bollox_4 ammo_slot_4 weapon_model_slot_4
GET_CHAR_WEAPON_IN_SLOT scplayer 5 bollox_5 ammo_slot_5 weapon_model_slot_5
GET_CHAR_WEAPON_IN_SLOT scplayer 6 bollox_6 ammo_slot_6 weapon_model_slot_6
GET_CHAR_WEAPON_IN_SLOT scplayer 7 bollox_7 ammo_slot_7 weapon_model_slot_7
GET_CHAR_WEAPON_IN_SLOT scplayer 8 bollox_8 ammo_slot_8 weapon_model_slot_8


IF flag_slot1_pickup = 1
AND bollox_1 > 0
REMOVE_PICKUP slot1_pickup_security
flag_slot1_pickup = 0
ENDIF
IF flag_slot2_pickup = 1
AND bollox_2 > 0
REMOVE_PICKUP slot2_pickup_security
flag_slot2_pickup = 0
ENDIF
IF flag_slot3_pickup = 1
AND bollox_3	> 0
REMOVE_PICKUP slot3_pickup_security
flag_slot3_pickup = 0
ENDIF
IF flag_slot4_pickup = 1
AND bollox_4 > 0
REMOVE_PICKUP slot4_pickup_security
flag_slot4_pickup = 0
ENDIF
IF flag_slot5_pickup = 1
AND bollox_5 > 0
REMOVE_PICKUP slot5_pickup_security
flag_slot5_pickup = 0
ENDIF
IF flag_slot6_pickup = 1
AND bollox_6 > 0
REMOVE_PICKUP slot6_pickup_security
flag_slot6_pickup = 0
ENDIF
IF flag_slot7_pickup = 1
AND bollox_7 > 0
REMOVE_PICKUP slot7_pickup_security
flag_slot7_pickup = 0
ENDIF
IF flag_slot8_pickup = 1
AND bollox_8 > 0
REMOVE_PICKUP slot8_pickup_security
flag_slot8_pickup = 0
ENDIF
ENDIF

RETURN
*/





async function security_zone_cleanup() {


  if ($.flag_cam_switch > 0) {
    Camera.RestoreJumpcut();
  }
  Camera.SwitchSecurity(false /* OFF */);
  /*
  REMOVE_PICKUP slot1_pickup_security
  REMOVE_PICKUP slot2_pickup_security
  REMOVE_PICKUP slot3_pickup_security
  REMOVE_PICKUP slot4_pickup_security
  REMOVE_PICKUP slot5_pickup_security
  REMOVE_PICKUP slot6_pickup_security
  REMOVE_PICKUP slot7_pickup_security
  REMOVE_PICKUP slot8_pickup_security
  flag_slot1_pickup = 0
  flag_slot2_pickup = 0
  flag_slot3_pickup = 0
  flag_slot4_pickup = 0
  flag_slot5_pickup = 0
  flag_slot6_pickup = 0
  flag_slot7_pickup = 0
  flag_slot8_pickup = 0
  */

  $.flag_player_on_bike = 0;
  $.flag_player_been_frisked = 0;
}






async function is_player_on_bike() {
  if ($.player1.isPlaying()) {
    if ($.player1.isOnAnyBike()) {
      $.flag_player_on_bike = 1;
    }
  }
}





async function kill_them_all_1() {
  if (!(Char.IsDead($.security_bloke1))) {
    if ($.player1.isPlaying()) {
      $.security_bloke1.setObjKillPlayerAnyMeans($.player1);
      if ($.flag_1_tooled == 0 && Streaming.HasModelLoaded(nitestick)) {
        $.security_bloke1.giveWeapon(4 /* WEAPONTYPE_NIGHTSTICK */, 0);
        $.flag_1_tooled = 1;
      }
    }
  }
}






async function kill_them_all_2() {
  if (!(Char.IsDead($.security_bloke2))) {
    if ($.player1.isPlaying()) {
      $.security_bloke2.setObjKillPlayerAnyMeans($.player1);
      if ($.flag_2_tooled == 0) {
        $.security_bloke2.giveWeapon(4 /* WEAPONTYPE_NIGHTSTICK */, 0);
        $.flag_2_tooled = 1;
      }
    }
  }
}

export async function security() {
  // MissionBoundary

  //VAR_INT	camera_golf camera_aport1 camera_aport2

  // VAR_INT security_bloke1 security_bloke2
  //VAR_INT golf_colt45 golf_uzi
  //VAR_INT	golf_grenade  golf_sniper golf_ak47 golf_flame golf_molotov


  // VAR_INT flag_goons_created
  // VAR_INT flag_player_been_frisked flag_1_tooled flag_2_tooled
  // VAR_INT flag_zone flag_gate
  // VAR_INT outer_switch_quickstep counter_quickstep


  // VAR_INT weapon_model_slot_1 weapon_model_slot_2 weapon_model_slot_3 weapon_model_slot_4
  // VAR_INT weapon_model_slot_5 weapon_model_slot_6 weapon_model_slot_7 weapon_model_slot_8
  // VAR_INT weapon_model_slot_9


  // VAR_INT bollox_1 bollox_2 bollox_3
  //VAR_INT bollox_5 bollox_6 bollox_7 bollox_8
  //VAR_INT bollox_9 bollox_4


  // VAR_INT flag_golf_course_nodes

  //VAR_INT check_1 check_2 check_3 check_4
  //VAR_INT check_5 check_6 check_7 check_8


  // VAR_INT ammo_slot_1 ammo_slot_2 ammo_slot_3 ammo_slot_4
  // VAR_INT ammo_slot_5 ammo_slot_6 ammo_slot_7 ammo_slot_8
  // VAR_INT ammo_slot_9


  // VAR_INT slot1_pickup_security slot2_pickup_security slot3_pickup_security slot4_pickup_security
  // VAR_INT slot5_pickup_security slot6_pickup_security slot7_pickup_security slot8_pickup_security
  // VAR_INT slot9_pickup_security
  /*
  VAR_INT	flag_slot1_pickup flag_slot2_pickup flag_slot3_pickup flag_slot4_pickup
  VAR_INT	flag_slot5_pickup flag_slot6_pickup flag_slot7_pickup flag_slot8_pickup
  */
  //VAR_INT blippage_de_test blippage_de_test2


  // VAR_FLOAT metal_detector_x metal_detector_y metal_detector_z
  //VAR_FLOAT metal_detector2_x metal_detector2_y metal_detector2_z


  // VAR_FLOAT gate_security_1_x gate_security_1_y gate_security_1_z
  // VAR_FLOAT gate_security_2_x gate_security_2_y gate_security_2_z
  //VAR_FLOAT gate_security_3_x gate_security_3_y gate_security_3_z
  //VAR_FLOAT gate_security_4_x gate_security_4_y gate_security_4_z


  // VAR_INT flag_cam_switch flag_security_model_loaded flag_player_on_bike
  // VAR_INT var_rampage_check


  // VAR_FLOAT security_cam_1_x security_cam_1_y security_cam_1_z
  // VAR_FLOAT security_cam_2_x security_cam_2_y security_cam_2_z
  // VAR_FLOAT security_cam_x_subject security_cam_y_subject security_cam_z_subject
  // VAR_FLOAT pickup_x pickup_y pickup_z
  // VAR_FLOAT player_heading


  // VAR_FLOAT zob_x zob_y zob_z


  // VAR_FLOAT cent_x cent_y theta_security theta_mod


  // VAR_INT sec_counter


  $.flag_player_been_frisked = 0;
  $.flag_zone = 0;
  $.flag_gate = 0;
  $.flag_goons_created = 0;
  $.flag_cam_switch = 0;
  $.flag_1_tooled = 0;
  $.flag_2_tooled = 0;
  $.flag_security_model_loaded = 0;
  $.flag_player_on_bike = 0;


  $.flag_golf_course_nodes = 0;


  $.outer_switch_quickstep = 0;


  $.theta_security = 0.0;
  $.cent_x = -1436.0;
  $.cent_y = -805.0;


  $.sec_counter = 0;


  // SCRIPT_NAME SECURE


  // SET_DEATHARREST_STATE(false /* OFF */); //stops script being terminated if Player arrested



}
