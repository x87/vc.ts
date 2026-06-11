// Generated from main/junkfud.sc

import { $ } from "../utils/vars.mts";

async function mission_start_junkfud() {




  // START_NEW_SCRIPT junkfud 
  //START_NEW_SCRIPT airport_security
  //START_NEW_SCRIPT aport2_security


  // MissionBoundary
}






async function junkfud() {





  // SCM GOTO → fokker (not lowered; manual jump required)
  throw new Error("unresolved GOTO fokker"); // fallback: would break linear control flow
  $.fastfud_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fastfud_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fastfud_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fastfud_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fastfud_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fastfud_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fastfud_7 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fastfud_8 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
  $.fud_blob1 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
  $.fud_blob2 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
  $.fud_blob3 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
  $.fud_blob4 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
  $.fud_blob5 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
  $.fud_blob6 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
  $.fud_blob7 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
  $.fud_blob8 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
}

async function fokker() {

}



async function junkfud_inner() {
  // SCM GOTO → junkfud_inner lowered to endless loop
  while (true) {


    // SCRIPT_NAME FUD


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      ++$.fud_count;
      const _res301 = $.player1.getCoordinates();
$.fud_x = _res301.x;
$.fud_y = _res301.y;
$.fud_z = _res301.z;
      // **************************** THE MALL ********************************************
      if ($.fud_count == 1) {
        if ($.player1.isInZone("BEACH3")) {
          if ($.flag_player_in_mall == 1) {
            if ($.fud_x > 415.0) {
              if ($.flag_create_mall_fuddies_1 == 1 && $.flag_cell_nation == 0) {
                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_1)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(445.66, 1100.54, 18.3, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud1_area == 0) {
                        $.flag_fud1_area = 1;
                        $.fud_blob1.remove();
                        $.flag_fud_audio = 1;
                        $.ped_control = $.fastfud_1;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud1_area == 1) {
                        $.fud_blob1.remove();
                        $.fud_blob1 = Sphere.Create(445.66, 1100.54, 18.3, 1.0);
                        $.flag_fud1_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud1_area = 1;
                    $.fud_blob1.remove();
                  }
                }
                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_2)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(436.75, 1105.8, 18.2, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud2_area == 0) {
                        $.flag_fud2_area = 1;
                        $.fud_blob2.remove();
                        $.flag_fud_audio = 2;
                        $.ped_control = $.fastfud_2;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud2_area == 1) {
                        $.fud_blob2.remove();
                        $.fud_blob2 = Sphere.Create(436.75, 1105.8, 18.2, 1.0);
                        $.flag_fud2_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud2_area = 1;
                    $.fud_blob2.remove();
                  }
                }
                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_3)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(434.5, 1139.3, 18.2, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud3_area == 0) {
                        $.flag_fud3_area = 1;
                        $.fud_blob3.remove();
                        $.flag_fud_audio = 3;
                        $.ped_control = $.fastfud_3;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud3_area == 1) {
                        $.fud_blob3.remove();
                        $.fud_blob3 = Sphere.Create(434.5, 1139.3, 18.2, 1.0);
                        $.flag_fud3_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud3_area = 1;
                    $.fud_blob3.remove();
                  }
                }
                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_4)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(451.24, 1146.5, 18.24, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud4_area == 0) {
                        $.flag_fud4_area = 1;
                        $.fud_blob4.remove();
                        $.flag_fud_audio = 4;
                        $.ped_control = $.fastfud_4;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud4_area == 1) {
                        $.fud_blob4.remove();
                        $.fud_blob4 = Sphere.Create(451.24, 1146.5, 18.24, 1.0);
                        $.flag_fud4_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud4_area = 1;
                    $.fud_blob4.remove();
                  }
                }
              }


              if ($.flag_create_mall_fuddies_1 == 0) {
                Streaming.LoadSpecialCharacter(20, "burger");
                while (!(Streaming.HasSpecialCharacterLoaded(20))) {
                  await asyncWait(0);
                  Streaming.LoadSpecialCharacter(20, "burger");
                }
                $.fastfud_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 445.8, 1098.5, 18.25); //burger shot
                $.fastfud_1.setHeading(46.0);
                $.ped_control = $.fastfud_1;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob1.remove();
                $.fud_blob1 = Sphere.Create(445.66, 1100.54, 18.3, 1.0);
                $.fastfud_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 435.46, 1104.0, 18.27); //cheesy crust
                $.fastfud_2.setHeading(350.0);
                $.ped_control = $.fastfud_2;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob2.remove();
                $.fud_blob2 = Sphere.Create(436.75, 1105.8, 18.2, 1.0);
                $.fastfud_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 433.0, 1140.5, 18.29); // shaft
                $.fastfud_3.setHeading(215.0);
                $.ped_control = $.fastfud_3;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob3.remove();
                $.fud_blob3 = Sphere.Create(434.5, 1139.3, 18.2, 1.0);
                $.fastfud_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 451.4, 1148.42, 18.23); //bandit
                $.fastfud_4.setHeading(173.0);
                $.ped_control = $.fastfud_4;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob4.remove();
                $.fud_blob4 = Sphere.Create(451.24, 1146.5, 18.24, 1.0);
                $.flag_create_mall_fuddies_1 = 1;
              }
            }
            else {
              await fud_cleanup();  // SCM GOSUB fud_cleanup
            }

            // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
            // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
            // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


            if ($.fud_x < 410.0) {
              if ($.flag_create_mall_fuddies_2 == 1 && $.flag_cell_nation == 0) {
                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_5)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(375.76, 1147.7, 18.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud5_area == 0) {
                        $.flag_fud5_area = 1;
                        $.fud_blob5.remove();
                        $.flag_fud_audio = 1;
                        $.ped_control = $.fastfud_5;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud5_area == 1) {
                        $.fud_blob5.remove();
                        $.fud_blob5 = Sphere.Create(375.76, 1147.7, 18.6, 1.0);
                        $.flag_fud5_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud5_area = 1;
                    $.fud_blob5.remove();
                  }
                }


                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_6)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(394.16, 1139.12, 18.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud6_area == 0) {
                        $.flag_fud6_area = 1;
                        $.fud_blob6.remove();
                        $.flag_fud_audio = 2;
                        $.ped_control = $.fastfud_6;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud6_area == 1) {
                        $.fud_blob6.remove();
                        $.fud_blob6 = Sphere.Create(394.16, 1139.12, 18.6, 1.0);
                        $.flag_fud6_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud6_area = 1;
                    $.fud_blob6.remove();
                  }
                }


                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_7)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(392.96, 1108.7, 18.55, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud7_area == 0) {
                        $.flag_fud7_area = 1;
                        $.fud_blob7.remove();
                        $.flag_fud_audio = 3;
                        $.ped_control = $.fastfud_7;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud7_area == 1) {
                        $.fud_blob7.remove();
                        $.fud_blob7 = Sphere.Create(392.96, 1108.7, 18.55, 1.0);
                        $.flag_fud7_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud7_area = 1;
                    $.fud_blob7.remove();
                  }
                }
                if ($.player1.isPlaying()) {
                  if (!(Char.IsDead($.fastfud_8)) && $.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99))) {
                    if ($.player1.locateOnFoot3D(376.47, 1101.7, 18.58, 1.0, 1.0, 2.0, false /* FALSE */)) {
                      if ($.flag_fud8_area == 0) {
                        $.flag_fud8_area = 1;
                        $.fud_blob8.remove();
                        $.flag_fud_audio = 4;
                        $.ped_control = $.fastfud_8;
                        await fud_stuff();  // SCM GOSUB fud_stuff
                        // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                        throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                      }
                    }
                    else {
                      if ($.flag_fud8_area == 1) {
                        $.fud_blob8.remove();
                        $.fud_blob8 = Sphere.Create(376.47, 1101.7, 18.58, 1.0);
                        $.flag_fud8_area = 0;
                      }
                    }
                  }
                  else {
                    $.flag_fud8_area = 1;
                    $.fud_blob8.remove();
                  }
                }


              }


              if ($.flag_create_mall_fuddies_2 == 0) {
                Streaming.LoadSpecialCharacter(20, "burger");
                while (!(Streaming.HasSpecialCharacterLoaded(20))) {
                  await asyncWait(0);
                  Streaming.LoadSpecialCharacter(20, "burger");
                }
                $.fastfud_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 375.9, 1149.7, 18.6); //burger shot
                $.fastfud_5.setHeading(224.0);
                $.ped_control = $.fastfud_5;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob5.remove();
                $.fud_blob5 = Sphere.Create(375.76, 1147.7, 18.6, 1.0);
                $.fastfud_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 395.0, 1141.2, 18.55); //cheesy crust
                $.fastfud_6.setHeading(165.0);
                $.ped_control = $.fastfud_6;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob6.remove();
                $.fud_blob6 = Sphere.Create(394.16, 1139.12, 18.6, 1.0);
                $.fastfud_7 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 394.4, 1107.6, 18.6); // shaft
                $.fastfud_7.setHeading(49.0);
                $.ped_control = $.fastfud_7;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob7.remove();
                $.fud_blob7 = Sphere.Create(392.96, 1108.7, 18.55, 1.0);
                $.fastfud_8 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 375.87, 1099.75, 18.57); // bandit
                $.fastfud_8.setHeading(344.0);
                $.ped_control = $.fastfud_8;
                await fud_threat();  // SCM GOSUB fud_threat
                $.fud_blob8.remove();
                $.fud_blob8 = Sphere.Create(376.47, 1101.7, 18.58, 1.0);
                $.flag_create_mall_fuddies_2 = 1;
              }
            }
            else {
              await fud_cleanup();  // SCM GOSUB fud_cleanup
            }
          }
          else {
            await fud_cleanup();  // SCM GOSUB fud_cleanup
          }
        }
        else {
          await fud_cleanup();  // SCM GOSUB fud_cleanup
        }
      }
      // ********************************* Little Haiti ***********************************************
      // ********************************* Little Haiti ***********************************************
      // ********************************* Little Haiti ***********************************************
      if ($.fud_count == 2 && $.player1.isPlaying()) {
        if ($.player1.isInZone("HAITI")) {
          $.flag_player_in_haiti = 1;
          $.ground_z = 0.0000;
          $.ground_z = World.GetGroundZFor3DCoord(-1039.5, 80.0, 50.0);
          if ($.ground_z > 0.0000) {
            if ($.flag_create_haiti_fuddies == 0) {
              Streaming.LoadSpecialCharacter(20, "burger");
              while (!(Streaming.HasSpecialCharacterLoaded(20))) {
                await asyncWait(0);
                Streaming.LoadSpecialCharacter(20, "burger");
              }
              $.fastfud_ht1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, -1039.5, 80.0, 10.6); // back room far right
              $.fastfud_ht1.setHeading(80.0);
              $.ped_control = $.fastfud_ht1;
              await fud_threat();  // SCM GOSUB fud_threat
              $.fud_blob1.remove();
              $.fud_blob1 = Sphere.Create(-1041.3, 80.45, 10.6, 1.0);
              if (Streaming.HasModelLoaded(HNB)) {
                $.fastfud_ht2 = Char.Create(4 /* PEDTYPE_CIVMALE */, HNB, -1036.2, 77.5, 10.6); // back room far right
                $.fastfud_ht2.setHeading(190.0);
                $.fastfud_ht2.clearThreatSearch();
                $.fastfud_ht2.setWaitState(6 /* WAITSTATE_LOOK_ACCIDENT */, 999999);
              }
              $.flag_create_haiti_fuddies = 1;
            }
            //GOSUB fudelicious
            if ($.flag_create_haiti_fuddies == 1 && $.flag_cell_nation == 0) {
              if ($.player1.isPlaying()) {
                if ($.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99)) && !(Char.IsDead($.fastfud_ht1))) {
                  //IF IS_CHAR_HEALTH_GREATER fastfud_1 95
                  if ($.player1.locateOnFoot3D(-1041.3, 80.45, 10.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
                    if ($.flag_fud1_area == 0) {
                      $.flag_fud1_area = 1;
                      $.fud_blob1.remove();
                      $.flag_fud_audio = 2;
                      $.ped_control = $.fastfud_ht1;
                      await fud_stuff();  // SCM GOSUB fud_stuff
                      // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                    }
                  }
                  else {
                    if ($.flag_fud1_area == 1) {
                      $.fud_blob1.remove();
                      $.fud_blob1 = Sphere.Create(-1041.3, 80.45, 10.6, 1.0);
                      $.flag_fud1_area = 0;
                    }
                  }
                  //ENDIF

                }
                else {
                  $.flag_fud1_area = 1;
                  $.fud_blob1.remove();
                }
              }
            }
          }
          else {
            await fud_cleanup();  // SCM GOSUB fud_cleanup
          }
        }
        else {
          $.flag_player_in_haiti = 0;
          await fud_cleanup();  // SCM GOSUB fud_cleanup
        }
      }
      // ******************************************************************************************
      // ********************************* Down Town ***********************************************
      if ($.fud_count == 1 && $.player1.isPlaying()) {
        if ($.player1.isInZone("DTOWN")) {
          $.flag_player_in_downtown = 1;
          $.ground_z = 0.0000;
          $.ground_z = World.GetGroundZFor3DCoord(-591.4, 651.23, 10.5);
          if ($.ground_z > 0.0000) {
            if (Streaming.HasModelLoaded(BKa)) {
              if ($.flag_create_biker_dude == 0) {
                $.biker_doorman1 = Char.Create(4 /* PEDTYPE_CIVMALE */, BKa, -591.4, 651.23, 10.5); // back room far right
                $.biker_doorman1.setHeading(25.0);
                $.biker_doorman1.setHealth(150);
                $.biker_doorman1.clearThreatSearch();
                $.biker_doorman1.setHeedThreats(true /* TRUE */);
                $.biker_doorman1.setPersonality(11 /* PEDSTAT_STREET_GUY */);
                $.flag_create_biker_dude = 1;
              }
            }
          }
          else {
            if ($.flag_create_biker_dude == 1) {
              $.biker_doorman1.delete(); // back room far right
              $.flag_create_biker_dude = 0;
            }
          }
          $.ground_z = 0.0000;
          $.ground_z = World.GetGroundZFor3DCoord(-904.7, 800.4, 10.5);
          if ($.ground_z > 0.0000) {
            if ($.flag_create_dtown_fuddies == 0) {
              Streaming.LoadSpecialCharacter(20, "burger");
              while (!(Streaming.HasSpecialCharacterLoaded(20))) {
                await asyncWait(0);
                Streaming.LoadSpecialCharacter(20, "burger");
              }

              //						REQUEST_MODEL HNB
              //						WHILE NOT HAS_MODEL_LOADED HNB
              //							WAIT 0
              //						ENDWHILE

              $.fastfud_dt = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, -904.7, 800.4, 10.5); // back room far right
              $.fastfud_dt.setHeading(270.0);
              $.ped_control = $.fastfud_dt;
              await fud_threat();  // SCM GOSUB fud_threat
              $.fud_blob1.remove();
              $.fud_blob1 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);

              /*
              CREATE_CHAR PEDTYPE_CIVMALE HNB -1036.2 77.5 10.6 fastfud_2 // back room far right
              SET_CHAR_HEADING fastfud_2 190.0
              CLEAR_CHAR_THREAT_SEARCH fastfud_2
              SET_CHAR_WAIT_STATE fastfud_2 WAITSTATE_LOOK_ACCIDENT 999999
              */
              $.flag_create_dtown_fuddies = 1;
            }
            //GOSUB fudelicious
            if ($.flag_create_dtown_fuddies == 1 && $.flag_cell_nation == 0) {
              if ($.player1.isPlaying()) {
                if ($.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99)) && !(Char.IsDead($.fastfud_dt))) {
                  //IF IS_CHAR_HEALTH_GREATER fastfud_1 95
                  if ($.player1.locateOnFoot3D(-903.0, 800.3, 10.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
                    if ($.flag_fud1_area == 0) {
                      $.flag_fud1_area = 1;
                      $.fud_blob1.remove();
                      $.flag_fud_audio = 2;
                      $.ped_control = $.fastfud_dt;
                      await fud_stuff();  // SCM GOSUB fud_stuff
                      // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                    }
                  }
                  else {
                    if ($.flag_fud1_area == 1) {
                      $.fud_blob1.remove();
                      $.fud_blob1 = Sphere.Create(-903.0, 800.3, 10.5, 1.0);
                      $.flag_fud1_area = 0;
                    }
                  }
                  //ENDIF

                }
                else {
                  $.flag_fud1_area = 1;
                  $.fud_blob1.remove();
                }
              }
            }
          }
          else {
            await fud_cleanup();  // SCM GOSUB fud_cleanup
          }
        }
        else {
          if ($.flag_create_biker_dude == 1) {
            $.biker_doorman1.delete(); // back room far right
            $.flag_create_biker_dude = 0;
          }
          $.flag_player_in_downtown = 0;
          await fud_cleanup();  // SCM GOSUB fud_cleanup
        }
      }
      // ******************************************************************************************
      // ********************************* Vice Point ***********************************************
      if ($.fud_count == 2 && $.player1.isPlaying()) {
        if ($.player1.isInZone("BEACH3")) {
          $.flag_player_in_vpoint = 1;
          $.ground_z = 0.0000;
          $.ground_z = World.GetGroundZFor3DCoord(419.4, 89.7, 50.0);
          if ($.ground_z > 0.0000) {
            if ($.flag_create_vpoint_fuddies == 0) {
              Streaming.LoadSpecialCharacter(20, "burger");
              while (!(Streaming.HasSpecialCharacterLoaded(20))) {
                await asyncWait(0);
                Streaming.LoadSpecialCharacter(20, "burger");
              }

              //						REQUEST_MODEL HNB
              //						WHILE NOT HAS_MODEL_LOADED HNB
              //							WAIT 0
              //						ENDWHILE

              $.fastfud_vp = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL20, 419.4, 89.7, 10.3); // back room far right
              $.fastfud_vp.setHeading(250.0);
              $.ped_control = $.fastfud_vp;
              await fud_threat();  // SCM GOSUB fud_threat
              $.fud_blob1.remove();
              $.fud_blob1 = Sphere.Create(421.1, 88.8, 10.5, 1.0);

              /*
              CREATE_CHAR PEDTYPE_CIVMALE HNB -1036.2 77.5 10.6 fastfud_2 // back room far right
              SET_CHAR_HEADING fastfud_2 190.0
              CLEAR_CHAR_THREAT_SEARCH fastfud_2
              SET_CHAR_WAIT_STATE fastfud_2 WAITSTATE_LOOK_ACCIDENT 999999
              */
              $.flag_create_vpoint_fuddies = 1;
            }
            //GOSUB fudelicious
            if ($.flag_create_vpoint_fuddies == 1 && $.flag_cell_nation == 0) {
              if ($.player1.isPlaying()) {
                if ($.player1.isScoreGreater(0) && !($.player1.isHealthGreater(99)) && !(Char.IsDead($.fastfud_vp))) {
                  //IF IS_CHAR_HEALTH_GREATER fastfud_1 95
                  if ($.player1.locateOnFoot3D(421.1, 88.8, 10.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
                    if ($.flag_fud1_area == 0) {
                      $.flag_fud1_area = 1;
                      $.fud_blob1.remove();
                      $.flag_fud_audio = 2;
                      $.ped_control = $.fastfud_vp;
                      await fud_stuff();  // SCM GOSUB fud_stuff
                      // SCM GOTO → junkfud_inner (not lowered; manual jump required)
                      throw new Error("unresolved GOTO junkfud_inner"); // fallback: would break linear control flow
                    }
                  }
                  else {
                    if ($.flag_fud1_area == 1) {
                      $.fud_blob1.remove();
                      $.fud_blob1 = Sphere.Create(421.1, 88.8, 10.5, 1.0);
                      $.flag_fud1_area = 0;
                    }
                  }
                  //ENDIF

                }
                else {
                  $.flag_fud1_area = 1;
                  $.fud_blob1.remove();
                }
              }
            }
          }
          else {
            await fud_cleanup();  // SCM GOSUB fud_cleanup
          }
        }
        else {
          $.flag_player_in_vpoint = 0;
          await fud_cleanup();  // SCM GOSUB fud_cleanup
        }
      }
      // ******************************************************************************************

    }
    else {
      await fud_cleanup();  // SCM GOSUB fud_cleanup
    }
    if ($.fud_count > 1) {
      $.fud_count = 0;
    }


  }
}




async function fud_threat() {
  $.ped_control.clearThreatSearch();
  $.ped_control.setThreatSearch(1048576 /* THREAT_GUN */);
  $.ped_control.setThreatSearch(8388608 /* THREAT_EXPLOSION */);
  $.ped_control.setCrouchWhenThreatened(true);
  $.ped_control.setStayInSamePlace(true /* TRUE */);
}



async function fud_stuff() {
  $.flag_cell_nation = 1;
  if (!(Char.IsDead($.ped_control))) {
    await control_player_off();  // SCM GOSUB control_player_off
    if (ONMISSION == 0) {
      await fud_audio_gimme();  // SCM GOSUB fud_audio_gimme
      await fud_audio_reply();  // SCM GOSUB fud_audio_reply
    }
    await transaction();  // SCM GOSUB transaction
    await control_player_on();  // SCM GOSUB control_player_on
  }
  $.flag_cell_nation = 0;
}



async function control_player_off() {
  if ($.player1.isPlaying() && !(Char.IsDead($.ped_control))) {
    $.player1.setControl(false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
    $.scplayer.turnToFaceChar($.ped_control);
  }
  else {
    return;
  }
}



async function control_player_on() {
  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  }
}



async function fud_audio_gimme() {


  if ($.player1.isPlaying() && !(Char.IsDead($.ped_control))) {
    $.player_gimme_int = Math.RandomIntInRange(1, 15);
    if ($.player_gimme_int == 1) {
      Audio.LoadMissionAudio(2, "gimme01" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME01 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 2) {
      Audio.LoadMissionAudio(2, "gimme02" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME02 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 3) {
      Audio.LoadMissionAudio(2, "gimme03" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME03 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 4) {
      Audio.LoadMissionAudio(2, "gimme04" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME04 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 5) {
      Audio.LoadMissionAudio(2, "gimme05" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME05 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 6) {
      Audio.LoadMissionAudio(2, "gimme06" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME06 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 7) {
      Audio.LoadMissionAudio(2, "gimme07" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME07 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 8) {
      Audio.LoadMissionAudio(2, "gimme08" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME08 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 9) {
      Audio.LoadMissionAudio(2, "gimme09" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME09 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 10) {
      Audio.LoadMissionAudio(2, "gimme10" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME10 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 11) {
      Audio.LoadMissionAudio(2, "gimme11" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME11 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 12) {
      Audio.LoadMissionAudio(2, "gimme12" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME12 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 13) {
      Audio.LoadMissionAudio(2, "gimme13" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME13 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 14) {
      Audio.LoadMissionAudio(2, "gimme14" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME14 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
    if ($.player_gimme_int == 15) {
      Audio.LoadMissionAudio(2, "gimme15" as any);
      await fud_audio_loading();  // SCM GOSUB fud_audio_loading
      //PRINT_NOW GIMME15 10000 1
      await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
    }
  }
}



async function fud_audio_reply() {
  if ($.player1.isPlaying() && !(Char.IsDead($.ped_control)) && ONMISSION == 0) {
    $.fastfud_reply_int = Math.RandomIntInRange(1, 30);
    if ($.fastfud_reply_int < 11) {
      if ($.flag_fud_audio == 1) {
        $.fastfud_reply_int = Math.RandomIntInRange(1, 12);
        if ($.fastfud_reply_int == 1) {
          Audio.LoadMissionAudio(2, "burg_01" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_01 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 2) {
          Audio.LoadMissionAudio(2, "burg_02" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_02 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 3) {
          Audio.LoadMissionAudio(2, "burg_03" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_03 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 4) {
          Audio.LoadMissionAudio(2, "burg_04" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_04 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 5) {
          Audio.LoadMissionAudio(2, "burg_05" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_05 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 6) {
          Audio.LoadMissionAudio(2, "burg_06" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_06 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 7) {
          Audio.LoadMissionAudio(2, "burg_07" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_07 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 8) {
          Audio.LoadMissionAudio(2, "burg_08" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_08 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 9) {
          Audio.LoadMissionAudio(2, "burg_09" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_09 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 10) {
          Audio.LoadMissionAudio(2, "burg_10" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_10 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 11) {
          Audio.LoadMissionAudio(2, "burg_11" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_11 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 12) {
          Audio.LoadMissionAudio(2, "burg_12" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BURG_12 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
      }
      if ($.flag_fud_audio == 2) {
        $.fastfud_reply_int = Math.RandomIntInRange(1, 9);
        if ($.fastfud_reply_int == 1) {
          Audio.LoadMissionAudio(2, "crust01" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST01 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 2) {
          Audio.LoadMissionAudio(2, "crust02" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST02 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 3) {
          Audio.LoadMissionAudio(2, "crust03" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST03 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 4) {
          Audio.LoadMissionAudio(2, "crust04" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST04 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 5) {
          Audio.LoadMissionAudio(2, "crust05" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST05 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 6) {
          Audio.LoadMissionAudio(2, "crust06" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST06 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 7) {
          Audio.LoadMissionAudio(2, "crust07" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST07 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 8) {
          Audio.LoadMissionAudio(2, "crust08" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST08 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 9) {
          Audio.LoadMissionAudio(2, "crust09" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW CRUST09 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
      }
      if ($.flag_fud_audio == 3) {
        $.fastfud_reply_int = Math.RandomIntInRange(1, 8);
        if ($.fastfud_reply_int == 1) {
          Audio.LoadMissionAudio(2, "shaft01" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT01 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 2) {
          Audio.LoadMissionAudio(2, "shaft02" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT02 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 3) {
          Audio.LoadMissionAudio(2, "shaft03" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT03 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 4) {
          Audio.LoadMissionAudio(2, "shaft04" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT04 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 5) {
          Audio.LoadMissionAudio(2, "shaft05" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT05 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 6) {
          Audio.LoadMissionAudio(2, "shaft06" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT06 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 7) {
          Audio.LoadMissionAudio(2, "shaft07" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT07 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 8) {
          Audio.LoadMissionAudio(2, "shaft08" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW SHAFT08 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
      }
      if ($.flag_fud_audio == 4) {
        $.fastfud_reply_int = Math.RandomIntInRange(1, 8);
        if ($.fastfud_reply_int == 1) {
          Audio.LoadMissionAudio(2, "band_01" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_01 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 2) {
          Audio.LoadMissionAudio(2, "band_02" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_02 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 3) {
          Audio.LoadMissionAudio(2, "band_03" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_03 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 4) {
          Audio.LoadMissionAudio(2, "band_04" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_04 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 5) {
          Audio.LoadMissionAudio(2, "band_05" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_05 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 6) {
          Audio.LoadMissionAudio(2, "band_06" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_06 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 7) {
          Audio.LoadMissionAudio(2, "band_07" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_07 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
        if ($.fastfud_reply_int == 8) {
          Audio.LoadMissionAudio(2, "band_08" as any);
          await fud_audio_loading();  // SCM GOSUB fud_audio_loading
          //PRINT_NOW BAND_08 10000 1
          await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
        }
      }
    }
    else {
      $.fastfud_reply_int = Math.RandomIntInRange(1, 20);
      if ($.fastfud_reply_int == 1) {
        Audio.LoadMissionAudio(2, "fud_01" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_01 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 2) {
        Audio.LoadMissionAudio(2, "fud_02" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_02 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 3) {
        Audio.LoadMissionAudio(2, "fud_03" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_03 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 4) {
        Audio.LoadMissionAudio(2, "fud_04" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_04 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 5) {
        Audio.LoadMissionAudio(2, "fud_05" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_05 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 6) {
        Audio.LoadMissionAudio(2, "fud_06" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_06 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 7) {
        Audio.LoadMissionAudio(2, "fud_07" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_07 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 8) {
        Audio.LoadMissionAudio(2, "fud_08" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_08 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 9) {
        Audio.LoadMissionAudio(2, "fud_09" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_09 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 10) {
        Audio.LoadMissionAudio(2, "fud_10" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_10 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 11) {
        Audio.LoadMissionAudio(2, "fud_11" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_11 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 12) {
        Audio.LoadMissionAudio(2, "fud_12" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_12 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 13) {
        Audio.LoadMissionAudio(2, "fud_13" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_13 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 14) {
        Audio.LoadMissionAudio(2, "fud_14" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_14 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 15) {
        Audio.LoadMissionAudio(2, "fud_15" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_15 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 16) {
        Audio.LoadMissionAudio(2, "fud_16" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_16 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 17) {
        Audio.LoadMissionAudio(2, "fud_17" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_17 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 18) {
        Audio.LoadMissionAudio(2, "fud_18" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_18 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 19) {
        Audio.LoadMissionAudio(2, "fud_19" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_19 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
      if ($.fastfud_reply_int == 20) {
        Audio.LoadMissionAudio(2, "fud_20" as any);
        await fud_audio_loading();  // SCM GOSUB fud_audio_loading
        //PRINT_NOW FUD_20 10000 1
        await fud_audio_finishing();  // SCM GOSUB fud_audio_finishing
      }
    }
  }
}




async function fud_audio_loading() {
  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return;
    }
  }
  Audio.PlayMissionAudio(2);
}



async function fud_audio_finishing() {
  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      return;
    }
  }
  Text.ClearPrints();
}



async function transaction() {
  if ($.player1.isPlaying() && !(Char.IsDead($.ped_control))) {
    $.fud_health = $.player1.getHealth();
    $.fud_health = $.fud_health * -1;
    $.fud_health = $.fud_health + 100;
    $.player_score_fud = $.player1.storeScore();
    if ($.fud_health > $.player_score_fud) {
      $.fud_health = $.player_score_fud;
    }
    $.fud_health = $.fud_health * -1;
    $.player1.addScore($.fud_health);
    $.player1.setHealth(100);
    Sound.AddOneOffSound($.fud_x, $.fud_y, $.fud_z, 1 /* SOUND_PART_MISSION_COMPLETE */);
  }
}

/*
fudelicious:
IF flag_create_mall_fuddies_1 = 1
IF NOT IS_CHAR_DEAD fastfud_1
ped_fud = fastfud_1
GOSUB fud_fight_2
ENDIF
IF NOT IS_CHAR_DEAD fastfud_2
ped_fud = fastfud_2
GOSUB fud_fight_2
ENDIF
IF NOT IS_CHAR_DEAD fastfud_3
ped_fud = fastfud_3
GOSUB fud_fight_2
ENDIF
IF NOT IS_CHAR_DEAD fastfud_4
ped_fud = fastfud_4
GOSUB fud_fight_2
ENDIF
ENDIF
IF flag_create_mall_fuddies_2 = 1
IF NOT IS_CHAR_DEAD fastfud_5
ped_fud = fastfud_5
GOSUB fud_fight_2
ENDIF
IF NOT IS_CHAR_DEAD fastfud_6
ped_fud = fastfud_6
GOSUB fud_fight_2
ENDIF
IF NOT IS_CHAR_DEAD fastfud_7
ped_fud = fastfud_7
GOSUB fud_fight_2
ENDIF
IF NOT IS_CHAR_DEAD fastfud_8
ped_fud = fastfud_8
GOSUB fud_fight_2
ENDIF
ENDIF
IF flag_create_haiti_fuddies = 1
IF NOT IS_CHAR_DEAD fastfud_1
AND NOT IS_CHAR_DEAD fastfud_2
IF NOT IS_CHAR_HEALTH_GREATER fastfud_1 95
OR NOT IS_CHAR_HEALTH_GREATER fastfud_2 95
GOSUB fud_fight_1
ELSE
SET_CHAR_WAIT_STATE fastfud_2 WAITSTATE_LOOK_ACCIDENT 999999
ENDIF
ELSE
GOSUB fud_fight_1
ENDIF
ENDIF
IF flag_create_dtown_fuddies = 1
IF NOT IS_CHAR_DEAD fastfud_1
IF NOT IS_CHAR_HEALTH_GREATER fastfud_1 95
ped_fud = fastfud_1
GOSUB fud_fight_1
ENDIF
ENDIF
ENDIF
RETURN

fud_fight_1:
ped_fud = fastfud_1
GOSUB fud_fight_2
ped_fud = fastfud_2
GOSUB fud_fight_2
RETURN


fud_fight_2:
IF IS_PLAYER_PLAYING player1
AND NOT IS_CHAR_DEAD ped_fud
SET_CHAR_WAIT_STATE ped_fud 0 0
SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS ped_fud player1
IF flag_create_haiti_fuddies = 1
AND HAS_MODEL_LOADED tec9
IF NOT IS_CHAR_DEAD ped_fud
GIVE_WEAPON_TO_CHAR ped_fud	WEAPONTYPE_TEC9 999
ENDIF
ENDIF
ENDIF
RETURN
*/


async function fud_cleanup() {
  if ($.player1.isPlaying()) {
    const _res302 = $.player1.getCoordinates();
$.fud_x = _res302.x;
$.fud_y = _res302.y;
$.fud_z = _res302.z;
  }
  else {
    await fudelete();  // SCM GOSUB fudelete
    $.flag_create_mall_fuddies_1 = 0;
    $.flag_create_mall_fuddies_2 = 0;
    $.flag_create_haiti_fuddies = 0;
    $.flag_create_dtown_fuddies = 0;
    $.flag_create_vpoint_fuddies = 0;
  }
  if ($.flag_create_mall_fuddies_1 == 1) {
    if ($.fud_x < 410.0 || $.flag_player_in_mall == 0) {
      $.fastfud_1.delete();
      $.fastfud_2.delete();
      $.fastfud_3.delete();
      $.fastfud_4.delete();
      $.fud_blob1.remove();
      $.fud_blob2.remove();
      $.fud_blob3.remove();
      $.fud_blob4.remove();
      Streaming.UnloadSpecialCharacter(20);
      $.flag_create_mall_fuddies_1 = 0;
    }
  }
  if ($.flag_create_mall_fuddies_2 == 1) {
    if ($.fud_x > 415.0 || $.flag_player_in_mall == 0) {
      $.fastfud_5.delete();
      $.fastfud_6.delete();
      $.fastfud_7.delete();
      $.fastfud_8.delete();
      $.fud_blob5.remove();
      $.fud_blob6.remove();
      $.fud_blob7.remove();
      $.fud_blob8.remove();
      Streaming.UnloadSpecialCharacter(20);
      $.flag_create_mall_fuddies_2 = 0;
    }
  }
  if ($.flag_create_haiti_fuddies == 1 && $.flag_player_in_haiti == 0) {
    $.fastfud_ht1.delete();
    $.fastfud_ht2.delete();
    Streaming.UnloadSpecialCharacter(20);
    $.fud_blob1.remove();
    //MARK_MODEL_AS_NO_LONGER_NEEDED tec9
    //MARK_MODEL_AS_NO_LONGER_NEEDED
    $.flag_create_haiti_fuddies = 0;
  }
  if ($.flag_create_dtown_fuddies == 1 && $.flag_player_in_downtown == 0) {
    $.fastfud_dt.delete();
    Streaming.UnloadSpecialCharacter(20);
    $.fud_blob1.remove();
    //MARK_MODEL_AS_NO_LONGER_NEEDED
    $.flag_create_dtown_fuddies = 0;
  }
  if ($.flag_create_vpoint_fuddies == 1 && $.flag_player_in_vpoint == 0) {
    $.fastfud_vp.delete();
    Streaming.UnloadSpecialCharacter(20);
    $.fud_blob1.remove();
    //MARK_MODEL_AS_NO_LONGER_NEEDED
    $.flag_create_vpoint_fuddies = 0;
  }
  //CLEAR_MISSION_AUDIO 1
  //SET_PLAYER_CONTROL player1 ON
  //SET_EVERYONE_IGNORE_PLAYER player1 OFF
}





async function fudelete() {
  $.fastfud_1.delete();
  $.fastfud_2.delete();
  $.fastfud_3.delete();
  $.fastfud_4.delete();
  $.fastfud_5.delete();
  $.fastfud_6.delete();
  $.fastfud_7.delete();
  $.fastfud_8.delete();
  $.fastfud_vp.delete();
  $.fastfud_dt.delete();
  $.fastfud_ht1.delete();
  $.fastfud_ht2.delete();
  $.fud_blob1.remove();
  $.fud_blob2.remove();
  $.fud_blob3.remove();
  $.fud_blob4.remove();
  $.fud_blob5.remove();
  $.fud_blob6.remove();
  $.fud_blob7.remove();
  $.fud_blob8.remove();
  //MARK_MODEL_AS_NO_LONGER_NEEDED tec9

  Streaming.UnloadSpecialCharacter(20);
}

export async function junkfud() {
  // MissionBoundary

  // ********** DECLARE VARIABLES *************************************

  //VAR_INT ped_fud

  // VAR_INT flag_create_mall_fuddies_1 flag_create_mall_fuddies_2 flag_create_haiti_fuddies flag_create_dtown_fuddies flag_create_vpoint_fuddies
  // VAR_INT fastfud_1 fastfud_2 fastfud_3 fastfud_4
  // VAR_INT fastfud_5 fastfud_6 fastfud_7 fastfud_8
  // VAR_INT flag_fud_audio
  // VAR_INT player_gimme_int fastfud_reply_int
  // VAR_INT ped_control fud_health player_score_fud


  // VAR_INT flag_fud1_area flag_fud2_area flag_fud3_area flag_fud4_area
  // VAR_INT flag_fud5_area flag_fud6_area flag_fud7_area flag_fud8_area


  // VAR_INT fud_count
  // VAR_INT fud_blob1 fud_blob2 fud_blob3 fud_blob4
  // VAR_INT fud_blob5 fud_blob6 fud_blob7 fud_blob8


  // VAR_INT flag_player_in_haiti flag_player_in_downtown flag_player_in_vpoint
  // VAR_FLOAT fud_x fud_y fud_z


  // VAR_INT fastfud_vp fastfud_dt fastfud_ht1 fastfud_ht2


  // VAR_INT biker_doorman1
  // VAR_INT flag_create_biker_dude

  // ********** SET FLAGS AND VARIABLES *******************************

  $.flag_create_mall_fuddies_1 = 0;
  $.flag_create_mall_fuddies_2 = 0;
  $.flag_create_haiti_fuddies = 0;
  $.flag_create_dtown_fuddies = 0;
  $.flag_create_vpoint_fuddies = 0;
  $.flag_fud_audio = 0;

  //flag_player_in_beach3 = 0

  $.flag_player_in_haiti = 0;
  $.flag_player_in_downtown = 0;
  $.flag_player_in_vpoint = 0;


  $.flag_create_biker_dude = 0;


  $.flag_fud1_area = 0;
  $.flag_fud2_area = 0;
  $.flag_fud3_area = 0;
  $.flag_fud4_area = 0;
  $.flag_fud5_area = 0;
  $.flag_fud6_area = 0;
  $.flag_fud7_area = 0;
  $.flag_fud8_area = 0;


  $.fud_count = 0;

  //flag_shaft = 0
  //flag_crust = 0
  //flag_burger = 0


  // ********** MAIN SCRIPT *******************************************


  // SCRIPT_NAME JUNKFUD


  // SET_DEATHARREST_STATE(false /* OFF */); //stops script being terminated if Player dies/arrested



}
