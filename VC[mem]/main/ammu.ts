// Generated from main/ammu.sc

import { $ } from "../utils/vars.mts";

async function mission_start_ammu() {




  // START_NEW_SCRIPT shop_ammu1 
  // START_NEW_SCRIPT shop_ammu2 
  // START_NEW_SCRIPT shop_ammu3 
  // START_NEW_SCRIPT shop_hardware1 
  // START_NEW_SCRIPT shop_hardware2 
  // START_NEW_SCRIPT shop_hardware3 


  // MissionBoundary
}





async function shop_ammu1() {


  // AMMU NATION OCEAN BEACH**************************************************************************


  // SCRIPT_NAME AMMU1
}



async function shop_ammu1_inner() {
  // SCM GOTO → shop_ammu1_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH1")) {
        if ($.player1.locateAnyMeans3D($.ammu1X, $.ammu1Y, $.ammu1Z, 35.0, 35.0, 20.0, false /* FALSE */)) {
          if ($.camera_ammu1 == 0) {
            await load_up_sam();  // SCM GOSUB load_up_sam
            $.time_difference1 = $.current_time - $.time_since_murdering_shopkeeper1;
            $.ammu_gun1 = ScriptObject.Create(colt45, -60.793, -1488.141, 12.24);
            $.ammu_gun1.setDynamic(false /* FALSE */);
            $.ammu_gun1.setRotation(0.0, 8.0, 0.0);
            $.ammu_gun2 = ScriptObject.Create(ingramsl, -62.293, -1488.241, 12.223);
            $.ammu_gun2.setDynamic(false /* FALSE */);
            $.ammu_gun2.setRotation(0.0, 2.0, 0.0);
            $.ammu_gun3 = ScriptObject.Create(chromegun, -63.993, -1488.241, 12.24);
            $.ammu_gun3.setDynamic(false /* FALSE */);
            $.ammu_gun3.setRotation(0.0, 7.0, 0.0);
            $.ammu_gun4 = ScriptObject.Create(ruger, -65.393, -1488.221, 12.18);
            $.ammu_gun4.setDynamic(false /* FALSE */);
            $.ammu_gun5 = ScriptObject.Create(bodyarmour, -66.629, -1488.0, 12.113);
            $.ammu_gun5.setDynamic(false /* FALSE */);
            if ($.time_difference1 > 30000) {
              $.ammu_shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL21, -62.5, -1485.1, 9.6);
              $.ammu_shop_bloke1.clearThreatSearch();
              $.ammu_shop_bloke1.setStayInSamePlace(true /* TRUE */);
              await ammu_shop_keeper_setup();  // SCM GOSUB ammu_shop_keeper_setup
            }
            $.camera_ammu1 = 1;
          }
          else {
            if ($.player1.isInArea3D(-57.7, -1468.8, 13.4, -69.1, -1487.2, 9.0, false /* FALSE */)) {
              await ammu_bloke_goes_radge();  // SCM GOSUB ammu_bloke_goes_radge
            }


          }


          if (!(Char.IsDead($.ammu_shop_bloke1))) {
            if ($.ammu_bloke_kill_player == 0) {
              if ($.flag_cell_nation == 0) {
                $.frenzy_status_ammu = KillFrenzy.ReadStatus();
                if (!($.frenzy_status_ammu == 1)) {
                  if ($.player1.locateStoppedOnFoot3D($.ammu1X, $.ammu1Y, $.ammu1Z, 1.0, 1.0, 2.0, true /* TRUE */)) {
                    await ammu_chat();  // SCM GOSUB ammu_chat
                    while ($.in_shopping_mode1 == 0) {
                      $.flag_cell_nation = 1;
                      await asyncWait(0);
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 0) {
                          $.player1.setControl(false /* OFF */);
                          if (!(Char.IsDead($.ammu_shop_bloke1))) {
                            $.player1.turnToFaceChar($.ammu_shop_bloke1);
                          }
                          //SET_PLAYER_HEADING player1 180.0
                          Camera.SetFixedPosition(-60.508, -1486.245, 12.428, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(-60.593, -1487.241, 12.433, 1 /* INTERPOLATION */); //JUMP_CUT
                          if ($.first_interpolate == 0) {
                            Camera.SetInterpolationParameters(0.0, 1200);
                            $.first_interpolate = 1;
                          }
                          else {
                            Camera.SetInterpolationParameters(0.0, 800);
                          }
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu1X, $.ammu1Y, $.ammu1Z);
                            $.scplayer.freezePosition(true /* TRUE */);
                          }
                          while ($.dpad_statex == 0) {
                            await asyncWait(0);
                            Text.PrintBig("PISTOL", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 100, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1();  // SCM GOSUB check_dpad_state1
                              const _res4 = $.scplayer.getWeaponInSlot(4);
$.what_weapontype = _res4.weaponType;
$.returnedammo = _res4.weaponAmmo;
$.what_model = _res4.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.player1.hasGotWeapon(18 /* WEAPONTYPE_PYTHON */)) {
                                Text.PrintWithNumberNow("HELP54", 100, 1000, 1);
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                $.returnedammo = $.player1.getAmmoInWeapon(17 /* WEAPONTYPE_PISTOL */);
                                if ($.player1.isScoreGreater(99)) {
                                  if ($.returnedammo < 9999) {
                                    $.player1.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 68);
                                    if ($.returnedammo > 9999) {
                                      $.player1.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 9999);
                                    }
                                    $.player1.setCurrentWeapon(17 /* WEAPONTYPE_PISTOL */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-100);
                                    Stat.AddMoneySpentOnWeapons(100);
                                    await asyncWait(300);
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu1_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu1_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 1) {
                          Camera.SetFixedPosition(-62.008, -1486.245, 12.428, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(-62.093, -1487.241, 12.433, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu1X, $.ammu1Y, $.ammu1Z);
                          }
                          while ($.dpad_statex == 1) {
                            await asyncWait(0);
                            Text.PrintBig("INGRAM", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 300, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1();  // SCM GOSUB check_dpad_state1
                              const _res5 = $.scplayer.getWeaponInSlot(6);
$.what_weapontype = _res5.weaponType;
$.returnedammo = _res5.weaponAmmo;
$.what_model = _res5.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.player1.hasGotWeapon(25 /* WEAPONTYPE_MP5 */) || $.player1.hasGotWeapon(23 /* WEAPONTYPE_UZI */) || $.player1.hasGotWeapon(22 /* WEAPONTYPE_TEC9 */)) {
                                Text.PrintWithNumberNow("HELP54", 300, 1000, 1);
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                $.returnedammo = $.player1.getAmmoInWeapon(24 /* WEAPONTYPE_SILENCED_INGRAM */);
                                if ($.player1.isScoreGreater(299)) {
                                  if ($.returnedammo < 9999) {
                                    $.player1.giveWeapon(24 /* WEAPONTYPE_SILENCED_INGRAM */, 120);
                                    if ($.returnedammo > 9999) {
                                      $.player1.giveWeapon(24 /* WEAPONTYPE_SILENCED_INGRAM */, 9999);
                                    }
                                    $.player1.setCurrentWeapon(24 /* WEAPONTYPE_SILENCED_INGRAM */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-300);
                                    Stat.AddMoneySpentOnWeapons(300);
                                    await asyncWait(300);
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu1_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu1_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 2) {
                          Camera.SetFixedPosition(-63.508, -1486.245, 12.428, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(-63.593, -1487.241, 12.433, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu1X, $.ammu1Y, $.ammu1Z);
                          }
                          while ($.dpad_statex == 2) {
                            await asyncWait(0);
                            Text.PrintBig("SHOTGN1", 1000, 4);
                            if ($.shotgun_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 500, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1();  // SCM GOSUB check_dpad_state1
                              const _res6 = $.scplayer.getWeaponInSlot(5);
$.what_weapontype = _res6.weaponType;
$.returnedammo = _res6.weaponAmmo;
$.what_model = _res6.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.shotgun_in_stock == 1) {
                                if ($.player1.hasGotWeapon(20 /* WEAPONTYPE_SPAS12_SHOTGUN */) || $.player1.hasGotWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */)) {
                                  Text.PrintWithNumberNow("HELP54", 500, 1000, 1);
                                }
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.shotgun_in_stock == 1) {
                                  $.returnedammo = $.player1.getAmmoInWeapon(19 /* WEAPONTYPE_SHOTGUN */);
                                  if ($.player1.isScoreGreater(499)) {
                                    if ($.returnedammo < 9999) {
                                      $.player1.giveWeapon(19 /* WEAPONTYPE_SHOTGUN */, 32);
                                      if ($.returnedammo > 9999) {
                                        $.player1.giveWeapon(19 /* WEAPONTYPE_SHOTGUN */, 9999);
                                      }
                                      $.player1.setCurrentWeapon(19 /* WEAPONTYPE_SHOTGUN */);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-500);
                                      Stat.AddMoneySpentOnWeapons(500);
                                      await asyncWait(300);
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu1_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu1_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 3) {
                          Camera.SetFixedPosition(-65.008, -1486.245, 12.428, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(-65.093, -1487.241, 12.433, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu1X, $.ammu1Y, $.ammu1Z);
                          }
                          while ($.dpad_statex == 3) {
                            await asyncWait(0);
                            Text.PrintBig("RUGER", 1000, 4);
                            if ($.ruger_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 1000, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1();  // SCM GOSUB check_dpad_state1
                              const _res7 = $.scplayer.getWeaponInSlot(7);
$.what_weapontype = _res7.weaponType;
$.returnedammo = _res7.weaponAmmo;
$.what_model = _res7.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.ruger_in_stock == 1) {
                                if ($.player1.hasGotWeapon(26 /* WEAPONTYPE_M4 */)) {
                                  Text.PrintWithNumberNow("HELP54", 1000, 1000, 1);
                                }
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.ruger_in_stock == 1) {
                                  $.returnedammo = $.player1.getAmmoInWeapon(27 /* WEAPONTYPE_RUGER */);
                                  if ($.player1.isScoreGreater(999)) {
                                    if ($.returnedammo < 9999) {
                                      $.player1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 150);
                                      if ($.returnedammo > 9999) {
                                        $.player1.giveWeapon(27 /* WEAPONTYPE_RUGER */, 9999);
                                      }
                                      $.player1.setCurrentWeapon(27 /* WEAPONTYPE_RUGER */);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-1000);
                                      Stat.AddMoneySpentOnWeapons(1000);
                                      await asyncWait(300);
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu1_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu1_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 4) {
                          Camera.SetFixedPosition(-66.508, -1486.245, 12.428, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(-66.593, -1487.241, 12.433, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu1X, $.ammu1Y, $.ammu1Z);
                          }
                          while ($.dpad_statex == 4) {
                            await asyncWait(0);
                            Text.PrintBig("ARMOUR", 1000, 4);
                            if ($.armour_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 200, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1();  // SCM GOSUB check_dpad_state1
                              $.players_armour = $.scplayer.getArmor();
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.armour_in_stock == 1) {
                                  if ($.player1.isScoreGreater(199)) {
                                    if ($.players_armour < 100) {
                                      $.player1.addArmour(200);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-200);
                                      Stat.AddMoneySpentOnWeapons(200);
                                      await asyncWait(300);
                                    }
                                    else {
                                      if ($.done_copcar_progress == 1) {
                                        if ($.players_armour < 200) {
                                          $.player1.addArmour(200);
                                          await buy_noise();  // SCM GOSUB buy_noise
                                          $.player1.addScore(-200);
                                          Stat.AddMoneySpentOnWeapons(200);
                                          await asyncWait(300);
                                        }
                                      }
                                    }


                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu1_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu1_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                    }


                  }
                  else {
                    if (!($.player1.locateOnFoot3D($.ammu1X, $.ammu1Y, $.ammu1Z, 1.0, 1.0, 2.0, true /* TRUE */))) {
                      if ($.in_shopping_mode1 == 1) {
                        if ($.player1.isPlaying()) {
                          await not_in_wee_ammu_zone();  // SCM GOSUB not_in_wee_ammu_zone
                        }
                      }
                    }


                  }


                }


              }


            }


          }



        }
        else {
          if ($.camera_ammu1 == 1) {
            await not_in_big_ammu_zone();  // SCM GOSUB not_in_big_ammu_zone
          }


        }


      }


    }
    else {
      await not_in_big_ammu_zone();  // SCM GOSUB not_in_big_ammu_zone
    }



  }
}





async function shop_ammu2() {


  // AMMU NATION SHOPPING MALL**************************************************************************


  // SCRIPT_NAME AMMU2
}



async function shop_ammu2_inner() {
  // SCM GOTO → shop_ammu2_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.flag_player_in_mall == 1) {
        if ($.player1.isInArea3D(357.7, 1016.6, 30.1, 410.4, 1110.4, 16.0, false /* FALSE */)) {
          if ($.camera_ammu1 == 0) {
            await load_up_sam();  // SCM GOSUB load_up_sam
            $.time_difference1 = $.current_time - $.time_since_murdering_shopkeeper1;
            $.ammu_gun1 = ScriptObject.Create(colt45, 367.0, 1049.5, 21.09);
            $.ammu_gun1.setDynamic(false /* FALSE */);
            $.ammu_gun1.setRotation(0.0, 8.0, 0.0);
            $.ammu_gun2 = ScriptObject.Create(uzi, 366.0, 1049.5, 21.05);
            $.ammu_gun2.setDynamic(false /* FALSE */);
            $.ammu_gun2.setRotation(0.0, 4.0, 0.0);
            $.ammu_gun3 = ScriptObject.Create(buddyshot, 364.9, 1049.5, 21.067);
            $.ammu_gun3.setDynamic(false /* FALSE */);
            $.ammu_gun3.setRotation(0.0, 9.0, 0.0);
            $.ammu_gun4 = ScriptObject.Create(7 /* sniper */, 363.9, 1049.5, 21.05);
            $.ammu_gun4.setDynamic(false /* FALSE */);
            $.ammu_gun4.setRotation(0.0, 5.0, 0.0);
            $.ammu_gun5 = ScriptObject.Create(grenade, 363.1, 1049.5, 20.76);
            $.ammu_gun5.setDynamic(false /* FALSE */);
            $.ammu_gun6 = ScriptObject.Create(grenade, 363.0, 1049.5, 20.72);
            $.ammu_gun6.setDynamic(false /* FALSE */);
            $.ammu_gun7 = ScriptObject.Create(bodyarmour, 362.1, 1049.5, 20.9);
            $.ammu_gun7.setDynamic(false /* FALSE */);
            if ($.time_difference1 > 30000) {
              $.ammu_shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL21, 366.1, 1052.2, 18.2);
              $.ammu_shop_bloke1.clearThreatSearch();
              $.ammu_shop_bloke1.setStayInSamePlace(true /* TRUE */);
              //SET_CHAR_HEADING ammu_shop_bloke1 180.0
              await ammu_shop_keeper_setup();  // SCM GOSUB ammu_shop_keeper_setup
            }
            $.camera_ammu1 = 1;
          }
          else {
            if ($.player1.isInArea3D(369.9, 1068.7, 22.3, 359.8, 1048.5, 18.1, false /* FALSE */)) {
              await ammu_bloke_goes_radge();  // SCM GOSUB ammu_bloke_goes_radge
            }


          }


          if (!(Char.IsDead($.ammu_shop_bloke1))) {
            if ($.ammu_bloke_kill_player == 0) {
              if ($.flag_cell_nation == 0) {
                $.frenzy_status_ammu = KillFrenzy.ReadStatus();
                if (!($.frenzy_status_ammu == 1)) {
                  if ($.player1.locateStoppedOnFoot3D($.ammu2X, $.ammu2Y, $.ammu2Z, 1.0, 1.0, 2.0, true /* TRUE */)) {
                    await ammu_chat();  // SCM GOSUB ammu_chat
                    while ($.in_shopping_mode1 == 0) {
                      $.flag_cell_nation = 1;
                      await asyncWait(0);
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 0) {
                          $.player1.setControl(false /* OFF */);
                          if (!(Char.IsDead($.ammu_shop_bloke1))) {
                            $.player1.turnToFaceChar($.ammu_shop_bloke1);
                          }
                          Camera.SetFixedPosition(367.203, 1051.161, 21.269, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(367.152, 1050.163, 21.291, 1 /* INTERPOLATION */); //JUMP_CUT
                          if ($.first_interpolate == 0) {
                            Camera.SetInterpolationParameters(0.0, 1200);
                            $.first_interpolate = 1;
                          }
                          else {
                            Camera.SetInterpolationParameters(0.0, 800);
                          }
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu2X, $.ammu2Y, $.ammu2Z);
                            $.scplayer.freezePosition(true /* TRUE */);
                          }
                          while ($.dpad_statex == 0) {
                            await asyncWait(0);
                            Text.PrintBig("PISTOL", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 100, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                              const _res8 = $.scplayer.getWeaponInSlot(4);
$.what_weapontype = _res8.weaponType;
$.returnedammo = _res8.weaponAmmo;
$.what_model = _res8.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.player1.hasGotWeapon(18 /* WEAPONTYPE_PYTHON */)) {
                                Text.PrintWithNumberNow("HELP54", 100, 1000, 1);
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                $.returnedammo = $.player1.getAmmoInWeapon(17 /* WEAPONTYPE_PISTOL */);
                                if ($.player1.isScoreGreater(99)) {
                                  if ($.returnedammo < 9999) {
                                    $.player1.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 68);
                                    if ($.returnedammo > 9999) {
                                      $.player1.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 9999);
                                    }
                                    $.player1.setCurrentWeapon(17 /* WEAPONTYPE_PISTOL */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-100);
                                    Stat.AddMoneySpentOnWeapons(100);
                                    await asyncWait(300);
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 1) {
                          Camera.SetFixedPosition(366.203, 1051.161, 21.269, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(366.152, 1050.163, 21.291, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu2X, $.ammu2Y, $.ammu2Z);
                          }
                          while ($.dpad_statex == 1) {
                            await asyncWait(0);
                            Text.PrintBig("UZI", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 400, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                              const _res9 = $.scplayer.getWeaponInSlot(6);
$.what_weapontype = _res9.weaponType;
$.returnedammo = _res9.weaponAmmo;
$.what_model = _res9.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.player1.hasGotWeapon(25 /* WEAPONTYPE_MP5 */) || $.player1.hasGotWeapon(24 /* WEAPONTYPE_SILENCED_INGRAM */) || $.player1.hasGotWeapon(22 /* WEAPONTYPE_TEC9 */)) {
                                Text.PrintWithNumberNow("HELP54", 400, 1000, 1);
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                $.returnedammo = $.player1.getAmmoInWeapon(23 /* WEAPONTYPE_UZI */);
                                if ($.player1.isScoreGreater(399)) {
                                  if ($.returnedammo < 9999) {
                                    $.player1.giveWeapon(23 /* WEAPONTYPE_UZI */, 120);
                                    if ($.returnedammo > 9999) {
                                      $.player1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
                                    }
                                    $.player1.setCurrentWeapon(23 /* WEAPONTYPE_UZI */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-400);
                                    Stat.AddMoneySpentOnWeapons(400);
                                    await asyncWait(300);
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 2) {
                          Camera.SetFixedPosition(365.203, 1051.161, 21.269, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(365.152, 1050.163, 21.291, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu2X, $.ammu2Y, $.ammu2Z);
                          }
                          while ($.dpad_statex == 2) {
                            await asyncWait(0);
                            Text.PrintBig("SHOTGN3", 1000, 4);
                            if ($.stubby_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 600, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                              const _res10 = $.scplayer.getWeaponInSlot(5);
$.what_weapontype = _res10.weaponType;
$.returnedammo = _res10.weaponAmmo;
$.what_model = _res10.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.stubby_in_stock == 1) {
                                if ($.player1.hasGotWeapon(20 /* WEAPONTYPE_SPAS12_SHOTGUN */) || $.player1.hasGotWeapon(19 /* WEAPONTYPE_SHOTGUN */)) {
                                  Text.PrintWithNumberNow("HELP54", 600, 1000, 1);
                                }
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.stubby_in_stock == 1) {
                                  $.returnedammo = $.player1.getAmmoInWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */);
                                  if ($.player1.isScoreGreater(599)) {
                                    if ($.returnedammo < 9999) {
                                      $.player1.giveWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */, 20);
                                      if ($.returnedammo > 9999) {
                                        $.player1.giveWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */, 9999);
                                      }
                                      $.player1.setCurrentWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-600);
                                      Stat.AddMoneySpentOnWeapons(600);
                                      await asyncWait(300);
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 3) {
                          Camera.SetFixedPosition(364.203, 1051.161, 21.269, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(364.152, 1050.163, 21.291, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu2X, $.ammu2Y, $.ammu2Z);
                          }
                          while ($.dpad_statex == 3) {
                            await asyncWait(0);
                            Text.PrintBig("SNIPE", 1000, 4);
                            if ($.sniper_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 1500, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                              const _res11 = $.scplayer.getWeaponInSlot(9);
$.what_weapontype = _res11.weaponType;
$.returnedammo = _res11.weaponAmmo;
$.what_model = _res11.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.sniper_in_stock == 1) {
                                if ($.player1.hasGotWeapon(29 /* WEAPONTYPE_LASERSCOPE */)) {
                                  Text.PrintWithNumberNow("HELP54", 1500, 1000, 1);
                                }
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.sniper_in_stock == 1) {
                                  $.returnedammo = $.player1.getAmmoInWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */);
                                  if ($.player1.isScoreGreater(1499)) {
                                    if ($.returnedammo < 9999) {
                                      $.player1.giveWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */, 40);
                                      if ($.returnedammo > 9999) {
                                        $.player1.giveWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */, 9999);
                                      }
                                      $.player1.setCurrentWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-1500);
                                      Stat.AddMoneySpentOnWeapons(1500);
                                      await asyncWait(300);
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 4) {
                          Camera.SetFixedPosition(363.203, 1051.161, 21.269, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(363.152, 1050.163, 21.291, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu2X, $.ammu2Y, $.ammu2Z);
                          }
                          while ($.dpad_statex == 4) {
                            await asyncWait(0);
                            Text.PrintBig("GRENADE", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 300, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                              const _res12 = $.scplayer.getWeaponInSlot(3);
$.what_weapontype = _res12.weaponType;
$.returnedammo = _res12.weaponAmmo;
$.what_model = _res12.weaponModel;
                              await set_current_weapon();  // SCM GOSUB set_current_weapon
                              if ($.player1.hasGotWeapon(13 /* WEAPONTYPE_DETONATOR_GRENADE */) || $.player1.hasGotWeapon(15 /* WEAPONTYPE_MOLOTOV */) || $.player1.hasGotWeapon(14 /* WEAPONTYPE_TEARGAS */)) {
                                Text.PrintWithNumberNow("HELP54", 300, 1000, 1);
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                $.returnedammo = $.player1.getAmmoInWeapon(12 /* WEAPONTYPE_GRENADE */);
                                if ($.player1.isScoreGreater(299)) {
                                  if ($.returnedammo < 9999) {
                                    $.player1.giveWeapon(12 /* WEAPONTYPE_GRENADE */, 8);
                                    if ($.returnedammo > 9999) {
                                      $.player1.giveWeapon(12 /* WEAPONTYPE_GRENADE */, 9999);
                                    }
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-300);
                                    Stat.AddMoneySpentOnWeapons(300);
                                    await asyncWait(300);
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 5) {
                          Camera.SetFixedPosition(362.203, 1051.161, 21.269, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(362.152, 1050.163, 21.291, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.in_this_state1 = 0;
                          $.in_this_state2 = 0;
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.ammu2X, $.ammu2Y, $.ammu2Z);
                          }
                          while ($.dpad_statex == 5) {
                            await asyncWait(0);
                            Text.PrintBig("ARMOUR", 1000, 4);
                            if ($.armour_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 200, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                              $.players_armour = $.scplayer.getArmor();
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.armour_in_stock == 1) {
                                  if ($.player1.isScoreGreater(199)) {
                                    if ($.players_armour < 100) {
                                      $.player1.addArmour(200);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-200);
                                      Stat.AddMoneySpentOnWeapons(200);
                                      await asyncWait(300);
                                    }
                                    else {
                                      if ($.done_copcar_progress == 1) {
                                        if ($.players_armour < 200) {
                                          $.player1.addArmour(200);
                                          await buy_noise();  // SCM GOSUB buy_noise
                                          $.player1.addScore(-200);
                                          Stat.AddMoneySpentOnWeapons(200);
                                          await asyncWait(300);
                                        }
                                      }
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode1 == 1) {
                                // SCM GOTO → shop_ammu2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_ammu2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                    }



                  }
                  else {
                    if (!($.player1.locateOnFoot3D($.ammu2X, $.ammu2Y, $.ammu2Z, 1.0, 1.0, 2.0, true /* TRUE */))) {
                      if ($.in_shopping_mode1 == 1) {
                        if ($.player1.isPlaying()) {
                          await not_in_wee_ammu_zone();  // SCM GOSUB not_in_wee_ammu_zone
                        }
                      }
                    }


                  }


                }


              }


            }


          }



        }
        else {
          if ($.camera_ammu1 == 1) {
            await not_in_big_ammu_zone();  // SCM GOSUB not_in_big_ammu_zone
          }


        }


      }


    }
    else {
      await not_in_big_ammu_zone();  // SCM GOSUB not_in_big_ammu_zone
    }



  }
}







async function shop_ammu3() {


  // AMMU NATION DOWNTOWN**************************************************************************


  // SCRIPT_NAME AMMU3
}



async function shop_ammu3_inner() {
  // SCM GOTO → shop_ammu3_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("DTOWN")) {
        if ($.player1.locateAnyMeans3D($.ammu3X, $.ammu3Y, $.ammu3Z, 35.0, 35.0, 20.0, false /* FALSE */)) {
          if ($.camera_ammu1 == 0) {
            await load_up_sam();  // SCM GOSUB load_up_sam
            $.time_difference1 = $.current_time - $.time_since_murdering_shopkeeper1;
            $.ammu_gun1 = ScriptObject.Create(python, -683.6, 1200.549, 12.93);
            $.ammu_gun1.setDynamic(false /* FALSE */);
            $.ammu_gun1.setRotation(0.0, 4.0, 90.0);
            $.ammu_gun2 = ScriptObject.Create(mp5lng, -683.6, 1202.049, 12.86);
            $.ammu_gun2.setDynamic(false /* FALSE */);
            $.ammu_gun2.setRotation(0.0, 8.0, 95.0);
            $.ammu_gun3 = ScriptObject.Create(shotgspa, -683.6, 1203.449, 12.91);
            $.ammu_gun3.setDynamic(false /* FALSE */);
            $.ammu_gun3.setRotation(0.0, 9.0, 95.0);
            $.ammu_gun4 = ScriptObject.Create(m4, -683.6, 1205.049, 12.88);
            $.ammu_gun4.setDynamic(false /* FALSE */);
            $.ammu_gun4.setRotation(0.0, 3.0, 95.0);
            $.ammu_gun5 = ScriptObject.Create(laser, -683.6, 1206.549, 12.81);
            $.ammu_gun5.setDynamic(false /* FALSE */);
            $.ammu_gun5.setRotation(0.0, 2.0, 95.0);
            $.ammu_gun6 = ScriptObject.Create(bodyarmour, -683.5, 1208.189, 12.809);
            $.ammu_gun6.setDynamic(false /* FALSE */);
            $.ammu_gun6.setHeading(90.0);

            //IF flag_player_on_bank_2 = 0
            if ($.time_difference1 > 30000) {
              $.ammu_shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL21, -679.97, 1203.5, 10.0);
              $.ammu_shop_bloke1.setHeading(270.0);
              $.ammu_shop_bloke1.clearThreatSearch();
              $.ammu_shop_bloke1.setStayInSamePlace(true /* TRUE */);
              await ammu_shop_keeper_setup();  // SCM GOSUB ammu_shop_keeper_setup
            }
            //ENDIF
            $.camera_ammu1 = 1;
          }
          else {

            //IF LOCATE_PLAYER_ANY_MEANS_3D player1 ammu3X ammu3Y ammu3Z 6.0 6.0 6.0 FALSE
            if ($.player1.isInArea3D(-684.5, 1199.3, 16.9, -663.8, 1211.1, 10.0, false /* FALSE */)) {
              await ammu_bloke_goes_radge();  // SCM GOSUB ammu_bloke_goes_radge
            }


          }
          if ($.flag_player_on_bank_2 == 0) {
            if (!(Char.IsDead($.ammu_shop_bloke1))) {
              if ($.ammu_bloke_kill_player == 0) {
                if ($.flag_cell_nation == 0) {
                  $.frenzy_status_ammu = KillFrenzy.ReadStatus();
                  if (!($.frenzy_status_ammu == 1)) {
                    if ($.player1.locateStoppedOnFoot3D($.ammu3X, $.ammu3Y, $.ammu3Z, 1.0, 1.0, 2.0, true /* TRUE */)) {
                      await ammu_chat();  // SCM GOSUB ammu_chat
                      while ($.in_shopping_mode1 == 0) {
                        $.flag_cell_nation = 1;
                        await asyncWait(0);
                        if ($.player1.isPlaying()) {
                          if ($.dpad_statex == 0) {
                            $.player1.setControl(false /* OFF */);
                            if (!(Char.IsDead($.ammu_shop_bloke1))) {
                              $.player1.turnToFaceChar($.ammu_shop_bloke1);
                            }
                            Camera.SetFixedPosition(-682.161, 1200.594, 13.133, 0.0, 0.0, 0.0);
                            Camera.PointAtPoint(-683.155, 1200.697, 13.171, 1 /* INTERPOLATION */); //JUMP_CUT
                            if ($.first_interpolate == 0) {
                              Camera.SetInterpolationParameters(0.0, 1200);
                              $.first_interpolate = 1;
                            }
                            else {
                              Camera.SetInterpolationParameters(0.0, 800);
                            }
                            $.second_interpolate = 0;
                            await asyncWait(800);
                            if ($.player1.isPlaying()) {
                              $.player1.setCoordinates($.ammu3X, $.ammu3Y, $.ammu3Z);
                              $.scplayer.freezePosition(true /* TRUE */);
                            }
                            while ($.dpad_statex == 0) {
                              await asyncWait(0);
                              Text.PrintBig("PYTHON", 2000, 4);
                              if ($.python_in_stock == 0) {
                                Text.PrintNow("STOCK", 1000, 1);
                              }
                              else {
                                Text.PrintWithNumberNow("G_COST", 2000, 1000, 1);
                              }
                              if ($.player1.isPlaying()) {
                                await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                                const _res13 = $.scplayer.getWeaponInSlot(4);
$.what_weapontype = _res13.weaponType;
$.returnedammo = _res13.weaponAmmo;
$.what_model = _res13.weaponModel;
                                await set_current_weapon();  // SCM GOSUB set_current_weapon
                                if ($.python_in_stock == 1) {
                                  if ($.player1.hasGotWeapon(17 /* WEAPONTYPE_PISTOL */)) {
                                    Text.PrintWithNumberNow("HELP54", 2000, 1000, 1);
                                  }
                                }
                                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                  if ($.python_in_stock == 1) {
                                    $.returnedammo = $.player1.getAmmoInWeapon(18 /* WEAPONTYPE_PYTHON */);
                                    if ($.player1.isScoreGreater(1999)) {
                                      if ($.returnedammo < 9999) {
                                        $.player1.giveWeapon(18 /* WEAPONTYPE_PYTHON */, 24);
                                        if ($.returnedammo > 9999) {
                                          $.player1.giveWeapon(18 /* WEAPONTYPE_PYTHON */, 9999);
                                        }
                                        $.player1.setCurrentWeapon(18 /* WEAPONTYPE_PYTHON */);
                                        await buy_noise();  // SCM GOSUB buy_noise
                                        $.player1.addScore(-2000);
                                        Stat.AddMoneySpentOnWeapons(2000);
                                        await asyncWait(300);
                                      }
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                if ($.in_shopping_mode1 == 1) {
                                  // SCM GOTO → shop_ammu3_inner (not lowered; manual jump required)
                                  throw new Error("unresolved GOTO shop_ammu3_inner"); // fallback: would break linear control flow
                                }


                              }


                            }
                          }
                        }
                        if ($.player1.isPlaying()) {
                          if ($.dpad_statex == 1) {
                            Camera.SetFixedPosition(-682.161, 1202.094, 13.133, 0.0, 0.0, 0.0);
                            Camera.PointAtPoint(-683.155, 1202.197, 13.171, 1 /* INTERPOLATION */); //JUMP_CUT
                            Camera.SetInterpolationParameters(0.0, 800);
                            $.in_this_state1 = 0;
                            $.in_this_state2 = 0;
                            $.second_interpolate = 0;
                            await asyncWait(800);
                            if ($.player1.isPlaying()) {
                              $.player1.setCoordinates($.ammu3X, $.ammu3Y, $.ammu3Z);
                            }
                            while ($.dpad_statex == 1) {
                              await asyncWait(0);
                              Text.PrintBig("MP5", 1000, 4);
                              if ($.mp5_in_stock == 0) {
                                Text.PrintNow("STOCK", 1000, 1);
                              }
                              else {
                                Text.PrintWithNumberNow("G_COST", 3000, 1000, 1);
                              }
                              if ($.player1.isPlaying()) {
                                await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                                const _res14 = $.scplayer.getWeaponInSlot(6);
$.what_weapontype = _res14.weaponType;
$.returnedammo = _res14.weaponAmmo;
$.what_model = _res14.weaponModel;
                                await set_current_weapon();  // SCM GOSUB set_current_weapon
                                if ($.mp5_in_stock == 1) {
                                  if ($.player1.hasGotWeapon(23 /* WEAPONTYPE_UZI */) || $.player1.hasGotWeapon(24 /* WEAPONTYPE_SILENCED_INGRAM */) || $.player1.hasGotWeapon(22 /* WEAPONTYPE_TEC9 */)) {
                                    Text.PrintWithNumberNow("HELP54", 3000, 1000, 1);
                                  }
                                }
                                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                  if ($.mp5_in_stock == 1) {
                                    $.returnedammo = $.player1.getAmmoInWeapon(25 /* WEAPONTYPE_MP5 */);
                                    if ($.player1.isScoreGreater(2999)) {
                                      if ($.returnedammo < 9999) {
                                        $.player1.giveWeapon(25 /* WEAPONTYPE_MP5 */, 120);
                                        if ($.returnedammo > 9999) {
                                          $.player1.giveWeapon(25 /* WEAPONTYPE_MP5 */, 9999);
                                        }
                                        $.player1.setCurrentWeapon(25 /* WEAPONTYPE_MP5 */);
                                        await buy_noise();  // SCM GOSUB buy_noise
                                        $.player1.addScore(-3000);
                                        Stat.AddMoneySpentOnWeapons(3000);
                                        await asyncWait(300);
                                      }
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                if ($.in_shopping_mode1 == 1) {
                                  // SCM GOTO → shop_ammu3_inner (not lowered; manual jump required)
                                  throw new Error("unresolved GOTO shop_ammu3_inner"); // fallback: would break linear control flow
                                }


                              }


                            }
                          }
                        }


                        if ($.player1.isPlaying()) {
                          if ($.dpad_statex == 2) {
                            Camera.SetFixedPosition(-682.161, 1203.594, 13.133, 0.0, 0.0, 0.0);
                            Camera.PointAtPoint(-683.155, 1203.697, 13.171, 1 /* INTERPOLATION */); //JUMP_CUT
                            Camera.SetInterpolationParameters(0.0, 800);
                            $.in_this_state1 = 0;
                            $.in_this_state2 = 0;
                            $.second_interpolate = 0;
                            await asyncWait(800);
                            if ($.player1.isPlaying()) {
                              $.player1.setCoordinates($.ammu3X, $.ammu3Y, $.ammu3Z);
                            }
                            while ($.dpad_statex == 2) {
                              await asyncWait(0);
                              Text.PrintBig("SHOTGN2", 1000, 4);
                              if ($.spaz_in_stock == 0) {
                                Text.PrintNow("STOCK", 1000, 1);
                              }
                              else {
                                Text.PrintWithNumberNow("G_COST", 4000, 1000, 1);
                              }
                              if ($.player1.isPlaying()) {
                                await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                                const _res15 = $.scplayer.getWeaponInSlot(5);
$.what_weapontype = _res15.weaponType;
$.returnedammo = _res15.weaponAmmo;
$.what_model = _res15.weaponModel;
                                await set_current_weapon();  // SCM GOSUB set_current_weapon
                                if ($.spaz_in_stock == 1) {
                                  if ($.player1.hasGotWeapon(21 /* WEAPONTYPE_STUBBY_SHOTGUN */) || $.player1.hasGotWeapon(19 /* WEAPONTYPE_SHOTGUN */)) {
                                    Text.PrintWithNumberNow("HELP54", 4000, 1000, 1);
                                  }
                                }
                                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                  if ($.spaz_in_stock == 1) {
                                    $.returnedammo = $.player1.getAmmoInWeapon(20 /* WEAPONTYPE_SPAS12_SHOTGUN */);
                                    if ($.player1.isScoreGreater(3999)) {
                                      if ($.returnedammo < 9999) {
                                        $.player1.giveWeapon(20 /* WEAPONTYPE_SPAS12_SHOTGUN */, 28);
                                        if ($.returnedammo > 9999) {
                                          $.player1.giveWeapon(20 /* WEAPONTYPE_SPAS12_SHOTGUN */, 9999);
                                        }
                                        $.player1.setCurrentWeapon(20 /* WEAPONTYPE_SPAS12_SHOTGUN */);
                                        await buy_noise();  // SCM GOSUB buy_noise
                                        $.player1.addScore(-4000);
                                        Stat.AddMoneySpentOnWeapons(4000);
                                        await asyncWait(300);
                                      }
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                if ($.in_shopping_mode1 == 1) {
                                  // SCM GOTO → shop_ammu3_inner (not lowered; manual jump required)
                                  throw new Error("unresolved GOTO shop_ammu3_inner"); // fallback: would break linear control flow
                                }


                              }


                            }
                          }
                        }


                        if ($.player1.isPlaying()) {
                          if ($.dpad_statex == 3) {
                            Camera.SetFixedPosition(-682.161, 1205.094, 13.133, 0.0, 0.0, 0.0);
                            Camera.PointAtPoint(-683.155, 1205.197, 13.171, 1 /* INTERPOLATION */); //JUMP_CUT
                            Camera.SetInterpolationParameters(0.0, 800);
                            $.in_this_state1 = 0;
                            $.in_this_state2 = 0;
                            $.second_interpolate = 0;
                            await asyncWait(800);
                            if ($.player1.isPlaying()) {
                              $.player1.setCoordinates($.ammu3X, $.ammu3Y, $.ammu3Z);
                            }
                            while ($.dpad_statex == 3) {
                              await asyncWait(0);
                              Text.PrintBig("M4", 1000, 4);
                              if ($.m4_in_stock == 0) {
                                Text.PrintNow("STOCK", 1000, 1);
                              }
                              else {
                                Text.PrintWithNumberNow("G_COST", 5000, 1000, 1);
                              }
                              if ($.player1.isPlaying()) {
                                await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                                const _res16 = $.scplayer.getWeaponInSlot(7);
$.what_weapontype = _res16.weaponType;
$.returnedammo = _res16.weaponAmmo;
$.what_model = _res16.weaponModel;
                                await set_current_weapon();  // SCM GOSUB set_current_weapon
                                if ($.m4_in_stock == 1) {
                                  if ($.player1.hasGotWeapon(27 /* WEAPONTYPE_RUGER */)) {
                                    Text.PrintWithNumberNow("HELP54", 5000, 1000, 1);
                                  }
                                }
                                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                  if ($.m4_in_stock == 1) {
                                    $.returnedammo = $.player1.getAmmoInWeapon(26 /* WEAPONTYPE_M4 */);
                                    if ($.player1.isScoreGreater(4999)) {
                                      if ($.returnedammo < 9999) {
                                        $.player1.giveWeapon(26 /* WEAPONTYPE_M4 */, 150);
                                        if ($.returnedammo > 9999) {
                                          $.player1.giveWeapon(26 /* WEAPONTYPE_M4 */, 9999);
                                        }
                                        $.player1.setCurrentWeapon(26 /* WEAPONTYPE_M4 */);
                                        await buy_noise();  // SCM GOSUB buy_noise
                                        $.player1.addScore(-5000);
                                        Stat.AddMoneySpentOnWeapons(5000);
                                        await asyncWait(300);
                                      }
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                if ($.in_shopping_mode1 == 1) {
                                  // SCM GOTO → shop_ammu3_inner (not lowered; manual jump required)
                                  throw new Error("unresolved GOTO shop_ammu3_inner"); // fallback: would break linear control flow
                                }


                              }


                            }
                          }
                        }


                        if ($.player1.isPlaying()) {
                          if ($.dpad_statex == 4) {
                            Camera.SetFixedPosition(-682.161, 1206.594, 13.133, 0.0, 0.0, 0.0);
                            Camera.PointAtPoint(-683.155, 1206.697, 13.171, 1 /* INTERPOLATION */); //JUMP_CUT
                            Camera.SetInterpolationParameters(0.0, 800);
                            $.in_this_state1 = 0;
                            $.in_this_state2 = 0;
                            $.second_interpolate = 0;
                            await asyncWait(800);
                            if ($.player1.isPlaying()) {
                              $.player1.setCoordinates($.ammu3X, $.ammu3Y, $.ammu3Z);
                            }
                            while ($.dpad_statex == 4) {
                              await asyncWait(0);
                              Text.PrintBig("LASER", 1000, 4);
                              if ($.laser_in_stock == 0) {
                                Text.PrintNow("STOCK", 1000, 1);
                              }
                              else {
                                Text.PrintWithNumberNow("G_COST", 6000, 1000, 1);
                              }
                              if ($.player1.isPlaying()) {
                                await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                                const _res17 = $.scplayer.getWeaponInSlot(9);
$.what_weapontype = _res17.weaponType;
$.returnedammo = _res17.weaponAmmo;
$.what_model = _res17.weaponModel;
                                await set_current_weapon();  // SCM GOSUB set_current_weapon
                                if ($.laser_in_stock == 1) {
                                  if ($.player1.hasGotWeapon(28 /* WEAPONTYPE_SNIPERRIFLE */)) {
                                    Text.PrintWithNumberNow("HELP54", 6000, 1000, 1);
                                  }
                                }
                                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                  if ($.laser_in_stock == 1) {
                                    $.returnedammo = $.player1.getAmmoInWeapon(29 /* WEAPONTYPE_LASERSCOPE */);
                                    if ($.player1.isScoreGreater(5999)) {
                                      if ($.returnedammo < 9999) {
                                        $.player1.giveWeapon(29 /* WEAPONTYPE_LASERSCOPE */, 28);
                                        if ($.returnedammo > 9999) {
                                          $.player1.giveWeapon(29 /* WEAPONTYPE_LASERSCOPE */, 9999);
                                        }
                                        await buy_noise();  // SCM GOSUB buy_noise
                                        $.player1.addScore(-6000);
                                        Stat.AddMoneySpentOnWeapons(6000);
                                        await asyncWait(300);
                                      }
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                if ($.in_shopping_mode1 == 1) {
                                  // SCM GOTO → shop_ammu3_inner (not lowered; manual jump required)
                                  throw new Error("unresolved GOTO shop_ammu3_inner"); // fallback: would break linear control flow
                                }


                              }


                            }
                          }
                        }


                        if ($.player1.isPlaying()) {
                          if ($.dpad_statex == 5) {
                            Camera.SetFixedPosition(-682.161, 1208.094, 13.133, 0.0, 0.0, 0.0);
                            Camera.PointAtPoint(-683.155, 1208.197, 13.171, 1 /* INTERPOLATION */); //JUMP_CUT
                            Camera.SetInterpolationParameters(0.0, 800);
                            $.in_this_state1 = 0;
                            $.in_this_state2 = 0;
                            $.second_interpolate = 0;
                            await asyncWait(800);
                            if ($.player1.isPlaying()) {
                              $.player1.setCoordinates($.ammu3X, $.ammu3Y, $.ammu3Z);
                            }
                            while ($.dpad_statex == 5) {
                              await asyncWait(0);
                              Text.PrintBig("ARMOUR", 1000, 4);
                              Text.PrintWithNumberNow("G_COST", 200, 1000, 1);
                              if ($.player1.isPlaying()) {
                                await check_dpad_state1_2();  // SCM GOSUB check_dpad_state1_2
                                $.players_armour = $.scplayer.getArmor();
                                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                  if ($.player1.isScoreGreater(199)) {
                                    if ($.players_armour < 100) {
                                      $.player1.addArmour(200);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-200);
                                      Stat.AddMoneySpentOnWeapons(200);
                                      await asyncWait(300);
                                    }
                                    else {
                                      if ($.done_copcar_progress == 1) {
                                        if ($.players_armour < 200) {
                                          $.player1.addArmour(200);
                                          await buy_noise();  // SCM GOSUB buy_noise
                                          $.player1.addScore(-200);
                                          Stat.AddMoneySpentOnWeapons(200);
                                          await asyncWait(300);
                                        }
                                      }
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                if ($.in_shopping_mode1 == 1) {
                                  // SCM GOTO → shop_ammu3_inner (not lowered; manual jump required)
                                  throw new Error("unresolved GOTO shop_ammu3_inner"); // fallback: would break linear control flow
                                }


                              }


                            }
                          }
                        }


                      }


                    }
                    else {
                      if (!($.player1.locateOnFoot3D($.ammu3X, $.ammu3Y, $.ammu3Z, 1.0, 1.0, 2.0, true /* TRUE */))) {
                        if ($.in_shopping_mode1 == 1) {
                          if ($.player1.isPlaying()) {
                            await not_in_wee_ammu_zone();  // SCM GOSUB not_in_wee_ammu_zone
                          }
                        }
                      }


                    }


                  }


                }


              }


            }


          }



        }
        else {
          if ($.camera_ammu1 == 1) {
            await not_in_big_ammu_zone();  // SCM GOSUB not_in_big_ammu_zone
          }


        }


      }


    }
    else {
      await not_in_big_ammu_zone();  // SCM GOSUB not_in_big_ammu_zone
    }


  }
}







async function shop_hardware1() {


  // HARDWARE STORE OCEAN BEACH**************************************************************************


  // SCRIPT_NAME hard1
}



async function shop_hardware_inner1() {
  // SCM GOTO → shop_hardware_inner1 lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH2")) {
        if ($.player1.locateAnyMeans3D($.hard1X, $.hard1Y, $.hard1Z, 35.0, 35.0, 30.0, false /* FALSE */)) {
          if ($.camera_hard1 == 0) {
            await load_up_hard_keeper();  // SCM GOSUB load_up_hard_keeper
            $.time_difference2 = $.current_time - $.time_since_murdering_shopkeeper2;
            $.hard_weapon1 = ScriptObject.Create(screwdriver, 201.508, -469.297, 13.79);
            $.hard_weapon1.setDynamic(false /* FALSE */);
            $.hard_weapon2 = ScriptObject.Create(hammer, 202.508, -469.297, 13.73);
            $.hard_weapon2.setDynamic(false /* FALSE */);
            $.hard_weapon2.setRotation(0.0, 4.0, 0.0);
            $.hard_weapon3 = ScriptObject.Create(cleaver, 203.508, -469.297, 13.77);
            $.hard_weapon3.setDynamic(false /* FALSE */);
            $.hard_weapon4 = ScriptObject.Create(bat, 204.606, -469.297, 13.91);
            $.hard_weapon4.setDynamic(false /* FALSE */);
            $.hard_weapon4.setRotation(85.0, 0.0, 90.0);
            $.hard_weapon5 = ScriptObject.Create(machete, 205.858, -469.297, 14.0);
            $.hard_weapon5.setDynamic(false /* FALSE */);
            $.hard_weapon5.setRotation(0.0, 90.0, 0.0);
            if ($.time_difference2 > 60000) {
              $.hard_shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 202.4, -471.1, 10.1);
              $.hard_shop_bloke1.setHeading(180.1);
              await hard_shop_keeper_setup();  // SCM GOSUB hard_shop_keeper_setup
            }
            $.camera_hard1 = 1;
          }
          else {

            //IF LOCATE_PLAYER_ANY_MEANS_3D player1 199.0 -474.0 10.1 8.0 6.0 6.0 FALSE
            if ($.player1.isInArea3D(190.0, -481.0, 15.7, 209.6, -468.5, 10.0, false /* FALSE */)) {
              await hard_bloke_goes_radge();  // SCM GOSUB hard_bloke_goes_radge
            }


          }


          if (!(Char.IsDead($.hard_shop_bloke1))) {
            if ($.hard_bloke_hide == 0) {
              if ($.flag_cell_nation == 0) {
                $.frenzy_status_ammu = KillFrenzy.ReadStatus();
                if (!($.frenzy_status_ammu == 1)) {
                  if ($.player1.locateStoppedOnFoot3D($.hard1X, $.hard1Y, $.hard1Z, 1.0, 1.0, 2.0, true /* TRUE */)) {
                    await hardware_chat();  // SCM GOSUB hardware_chat
                    while ($.in_shopping_mode2 == 0) {
                      $.flag_cell_nation = 1;
                      await asyncWait(0);
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 0) {
                          $.player1.setControl(false /* OFF */);
                          //SET_PLAYER_HEADING player1 180.0
                          if (!(Char.IsDead($.hard_shop_bloke1))) {
                            $.player1.turnToFaceChar($.hard_shop_bloke1);
                          }
                          Camera.SetFixedPosition(201.616, -470.795, 14.284, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(201.608, -469.797, 14.217, 1 /* INTERPOLATION */); //JUMP_CUT
                          if ($.first_interpolate == 0) {
                            Camera.SetInterpolationParameters(0.0, 1200);
                            $.first_interpolate = 1;
                          }
                          else {
                            Camera.SetInterpolationParameters(0.0, 800);
                          }
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard1X, $.hard1Y, $.hard1Z);
                            $.scplayer.freezePosition(true /* TRUE */);
                          }
                          while ($.dpad_statex == 0) {
                            await asyncWait(0);
                            Text.PrintBig("SCREWD", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 10, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              $.cost_of_tool = 10;
                              await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.player1.isScoreGreater(9)) {
                                  if (!($.player1.isCurrentWeapon(2 /* WEAPONTYPE_SCREWDRIVER */))) {
                                    $.player1.giveWeapon(2 /* WEAPONTYPE_SCREWDRIVER */, 0);
                                    $.player1.setCurrentWeapon(2 /* WEAPONTYPE_SCREWDRIVER */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-10);
                                    Stat.AddMoneySpentOnWeapons(10);
                                    await asyncWait(300);
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware_inner1 (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware_inner1"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 1) {
                          Camera.SetFixedPosition(202.616, -470.795, 14.284, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(202.608, -469.797, 14.217, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard1X, $.hard1Y, $.hard1Z);
                          }
                          while ($.dpad_statex == 1) {
                            await asyncWait(0);
                            Text.PrintBig("HAMMER", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 20, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              $.cost_of_tool = 20;
                              await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.player1.isScoreGreater(19)) {
                                  if (!($.player1.isCurrentWeapon(7 /* WEAPONTYPE_HAMMER */))) {
                                    $.player1.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 0);
                                    $.player1.setCurrentWeapon(7 /* WEAPONTYPE_HAMMER */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-20);
                                    Stat.AddMoneySpentOnWeapons(20);
                                    await asyncWait(300);
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware_inner1 (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware_inner1"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 2) {
                          Camera.SetFixedPosition(203.616, -470.795, 14.284, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(203.608, -469.797, 14.217, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard1X, $.hard1Y, $.hard1Z);
                          }
                          while ($.dpad_statex == 2) {
                            await asyncWait(0);
                            Text.PrintBig("CLEVER", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 50, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              $.cost_of_tool = 50;
                              await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.player1.isScoreGreater(49)) {
                                  if (!($.player1.isCurrentWeapon(8 /* WEAPONTYPE_CLEAVER */))) {
                                    $.player1.giveWeapon(8 /* WEAPONTYPE_CLEAVER */, 0);
                                    $.player1.setCurrentWeapon(8 /* WEAPONTYPE_CLEAVER */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-50);
                                    Stat.AddMoneySpentOnWeapons(50);
                                    await asyncWait(300);
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware_inner1 (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware_inner1"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 3) {
                          Camera.SetFixedPosition(204.816, -470.795, 14.284, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(204.808, -469.797, 14.217, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard1X, $.hard1Y, $.hard1Z);
                          }
                          while ($.dpad_statex == 3) {
                            await asyncWait(0);
                            Text.PrintBig("BASEBAT", 1000, 4);
                            if ($.bbat_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 80, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              if ($.bbat_in_stock == 1) {
                                $.cost_of_tool = 80;
                                await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.bbat_in_stock == 1) {
                                  if ($.player1.isScoreGreater(79)) {
                                    if (!($.player1.isCurrentWeapon(6 /* WEAPONTYPE_BASEBALLBAT */))) {
                                      $.player1.giveWeapon(6 /* WEAPONTYPE_BASEBALLBAT */, 0);
                                      $.player1.setCurrentWeapon(6 /* WEAPONTYPE_BASEBALLBAT */);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-80);
                                      Stat.AddMoneySpentOnWeapons(80);
                                      await asyncWait(300);
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware_inner1 (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware_inner1"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 4) {
                          Camera.SetFixedPosition(206.116, -470.795, 14.284, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(206.108, -469.797, 14.217, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard1X, $.hard1Y, $.hard1Z);
                          }
                          while ($.dpad_statex == 4) {
                            await asyncWait(0);
                            Text.PrintBig("MACHETE", 1000, 4);
                            if ($.machete_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 100, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              if ($.machete_in_stock == 1) {
                                $.cost_of_tool = 100;
                                await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.machete_in_stock == 1) {
                                  if ($.player1.isScoreGreater(99)) {
                                    if (!($.player1.isCurrentWeapon(9 /* WEAPONTYPE_MACHETE */))) {
                                      $.player1.giveWeapon(9 /* WEAPONTYPE_MACHETE */, 0);
                                      $.player1.setCurrentWeapon(9 /* WEAPONTYPE_MACHETE */);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-100);
                                      Stat.AddMoneySpentOnWeapons(100);
                                      await asyncWait(300);
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware_inner1 (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware_inner1"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                    }


                  }
                  else {
                    if (!($.player1.locateOnFoot3D($.hard1X, $.hard1Y, $.hard1Z, 1.0, 1.0, 2.0, true /* TRUE */))) {
                      if ($.in_shopping_mode2 == 1) {
                        if ($.player1.isPlaying()) {
                          await not_in_wee_hard_zone();  // SCM GOSUB not_in_wee_hard_zone
                        }
                      }
                    }


                  }


                }


              }


            }


          }



        }
        else {
          if ($.camera_hard1 == 1) {
            await not_in_big_hard_zone();  // SCM GOSUB not_in_big_hard_zone
          }


        }


      }


    }
    else {
      await not_in_big_hard_zone();  // SCM GOSUB not_in_big_hard_zone
    }


  }
}





async function shop_hardware2() {


  // HARDWARE STORE SHOPPING MALL**************************************************************************


  // SCRIPT_NAME hard2
}



async function shop_hardware2_inner() {
  // SCM GOTO → shop_hardware2_inner lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.flag_player_in_mall == 1) {
        if ($.player1.isInArea3D(357.7, 1016.6, 30.1, 410.4, 1110.4, 16.0, false /* FALSE */)) {
          if ($.camera_hard1 == 0) {
            await load_up_hard_keeper();  // SCM GOSUB load_up_hard_keeper
            $.time_difference2 = $.current_time - $.time_since_murdering_shopkeeper2;
            $.hard_weapon1 = ScriptObject.Create(screwdriver, 365.960, 1072.8, 20.68);
            $.hard_weapon1.setDynamic(false /* FALSE */);
            $.hard_weapon2 = ScriptObject.Create(hammer, 364.960, 1072.8, 20.669);
            $.hard_weapon2.setDynamic(false /* FALSE */);
            $.hard_weapon2.setRotation(0.0, 4.0, 0.0);
            $.hard_weapon3 = ScriptObject.Create(cleaver, 363.960, 1072.8, 20.729);
            $.hard_weapon3.setDynamic(false /* FALSE */);
            $.hard_weapon4 = ScriptObject.Create(knifecur, 362.920, 1072.8, 20.639);
            $.hard_weapon4.setDynamic(false /* FALSE */);
            $.hard_weapon5 = ScriptObject.Create(katana, 362.0, 1072.8, 20.75);
            $.hard_weapon5.setDynamic(false /* FALSE */);
            $.hard_weapon5.setRotation(0.0, -20.0, 0.0);
            if ($.time_difference2 > 60000) {
              $.hard_shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 364.5, 1074.3, 18.0);
              $.hard_shop_bloke1.setHeading(358.1);
              await hard_shop_keeper_setup();  // SCM GOSUB hard_shop_keeper_setup
            }


            $.camera_hard1 = 1;
          }
          else {
            if ($.player1.isInArea3D(369.9, 1089.8, 22.3, 359.8, 1071.7, 18.1, false /* FALSE */)) {
              await hard_bloke_goes_radge();  // SCM GOSUB hard_bloke_goes_radge
            }


          }


          if (!(Char.IsDead($.hard_shop_bloke1))) {
            if ($.hard_bloke_hide == 0) {
              if ($.flag_cell_nation == 0) {
                $.frenzy_status_ammu = KillFrenzy.ReadStatus();
                if (!($.frenzy_status_ammu == 1)) {
                  if ($.player1.locateStoppedOnFoot3D($.hard2X, $.hard2Y, $.hard2Z, 1.0, 1.0, 2.0, true /* TRUE */)) {
                    await hardware_chat();  // SCM GOSUB hardware_chat
                    while ($.in_shopping_mode2 == 0) {
                      $.flag_cell_nation = 1;
                      await asyncWait(0);
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 0) {
                          $.player1.setControl(false /* OFF */);
                          if (!(Char.IsDead($.hard_shop_bloke1))) {
                            $.player1.turnToFaceChar($.hard_shop_bloke1);
                          }
                          Camera.SetFixedPosition(366.100, 1074.719, 21.062, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(366.089, 1073.720, 21.084, 1 /* INTERPOLATION */); //JUMP_CUT
                          if ($.first_interpolate == 0) {
                            Camera.SetInterpolationParameters(0.0, 1200);
                            $.first_interpolate = 1;
                          }
                          else {
                            Camera.SetInterpolationParameters(0.0, 800);
                          }
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard2X, $.hard2Y, $.hard2Z);
                            $.scplayer.freezePosition(true /* TRUE */);
                          }
                          while ($.dpad_statex == 0) {
                            await asyncWait(0);
                            Text.PrintBig("SCREWD", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 10, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              $.cost_of_tool = 10;
                              await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.player1.isScoreGreater(9)) {
                                  if (!($.player1.isCurrentWeapon(2 /* WEAPONTYPE_SCREWDRIVER */))) {
                                    $.player1.giveWeapon(2 /* WEAPONTYPE_SCREWDRIVER */, 0);
                                    $.player1.setCurrentWeapon(2 /* WEAPONTYPE_SCREWDRIVER */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-10);
                                    Stat.AddMoneySpentOnWeapons(10);
                                    await asyncWait(300);
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 1) {
                          Camera.SetFixedPosition(365.100, 1074.719, 21.062, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(365.089, 1073.720, 21.084, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard2X, $.hard2Y, $.hard2Z);
                          }
                          while ($.dpad_statex == 1) {
                            await asyncWait(0);
                            Text.PrintBig("HAMMER", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 20, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              $.cost_of_tool = 20;
                              await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.player1.isScoreGreater(19)) {
                                  if (!($.player1.isCurrentWeapon(7 /* WEAPONTYPE_HAMMER */))) {
                                    $.player1.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 0);
                                    $.player1.setCurrentWeapon(7 /* WEAPONTYPE_HAMMER */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-20);
                                    Stat.AddMoneySpentOnWeapons(20);
                                    await asyncWait(300);
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 2) {
                          Camera.SetFixedPosition(364.100, 1074.719, 21.062, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(364.089, 1073.720, 21.084, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard2X, $.hard2Y, $.hard2Z);
                          }
                          while ($.dpad_statex == 2) {
                            await asyncWait(0);
                            Text.PrintBig("CLEVER", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 50, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              $.cost_of_tool = 50;
                              await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.player1.isScoreGreater(49)) {
                                  if (!($.player1.isCurrentWeapon(8 /* WEAPONTYPE_CLEAVER */))) {
                                    $.player1.giveWeapon(8 /* WEAPONTYPE_CLEAVER */, 0);
                                    $.player1.setCurrentWeapon(8 /* WEAPONTYPE_CLEAVER */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-50);
                                    Stat.AddMoneySpentOnWeapons(50);
                                    await asyncWait(300);
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 3) {
                          Camera.SetFixedPosition(363.100, 1074.719, 21.062, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(363.089, 1073.720, 21.084, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard2X, $.hard2Y, $.hard2Z);
                          }
                          while ($.dpad_statex == 3) {
                            await asyncWait(0);
                            Text.PrintBig("KNIFE", 1000, 4);
                            Text.PrintWithNumberNow("G_COST", 90, 1000, 1);
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              $.cost_of_tool = 90;
                              await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.player1.isScoreGreater(89)) {
                                  if (!($.player1.isCurrentWeapon(5 /* WEAPONTYPE_KNIFE */))) {
                                    $.player1.giveWeapon(5 /* WEAPONTYPE_KNIFE */, 0);
                                    $.player1.setCurrentWeapon(5 /* WEAPONTYPE_KNIFE */);
                                    await buy_noise();  // SCM GOSUB buy_noise
                                    $.player1.addScore(-90);
                                    Stat.AddMoneySpentOnWeapons(90);
                                    await asyncWait(300);
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }
                      if ($.player1.isPlaying()) {
                        if ($.dpad_statex == 4) {
                          Camera.SetFixedPosition(362.100, 1074.719, 21.062, 0.0, 0.0, 0.0);
                          Camera.PointAtPoint(362.089, 1073.720, 21.084, 1 /* INTERPOLATION */); //JUMP_CUT
                          Camera.SetInterpolationParameters(0.0, 800);
                          $.second_interpolate = 0;
                          await asyncWait(800);
                          if ($.player1.isPlaying()) {
                            $.player1.setCoordinates($.hard2X, $.hard2Y, $.hard2Z);
                          }
                          while ($.dpad_statex == 4) {
                            await asyncWait(0);
                            Text.PrintBig("KATANA", 1000, 4);
                            if ($.katana_in_stock == 0) {
                              Text.PrintNow("STOCK", 1000, 1);
                            }
                            else {
                              Text.PrintWithNumberNow("G_COST", 300, 1000, 1);
                            }
                            if ($.player1.isPlaying()) {
                              await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                              if ($.katana_in_stock == 1) {
                                $.cost_of_tool = 300;
                                await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                              }
                              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                                if ($.katana_in_stock == 1) {
                                  if ($.player1.isScoreGreater(299)) {
                                    if (!($.player1.isCurrentWeapon(10 /* WEAPONTYPE_KATANA */))) {
                                      $.player1.giveWeapon(10 /* WEAPONTYPE_KATANA */, 0);
                                      $.player1.setCurrentWeapon(10 /* WEAPONTYPE_KATANA */);
                                      await buy_noise();  // SCM GOSUB buy_noise
                                      $.player1.addScore(-300);
                                      Stat.AddMoneySpentOnWeapons(300);
                                      await asyncWait(300);
                                    }
                                    else {
                                      await denied_noise();  // SCM GOSUB denied_noise
                                    }
                                  }
                                  else {
                                    await denied_noise();  // SCM GOSUB denied_noise
                                  }
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              if ($.in_shopping_mode2 == 1) {
                                // SCM GOTO → shop_hardware2_inner (not lowered; manual jump required)
                                throw new Error("unresolved GOTO shop_hardware2_inner"); // fallback: would break linear control flow
                              }


                            }


                          }
                        }
                      }


                    }


                  }
                  else {
                    if (!($.player1.locateOnFoot3D($.hard2X, $.hard2Y, $.hard2Z, 1.0, 1.0, 2.0, false /* FALSE */))) {
                      if ($.in_shopping_mode2 == 1) {
                        if ($.player1.isPlaying()) {
                          await not_in_wee_hard_zone();  // SCM GOSUB not_in_wee_hard_zone
                        }
                      }
                    }


                  }


                }


              }


            }


          }



        }
        else {
          if ($.camera_hard1 == 1) {
            await not_in_big_hard_zone();  // SCM GOSUB not_in_big_hard_zone
          }


        }


      }


    }
    else {
      await not_in_big_hard_zone();  // SCM GOSUB not_in_big_hard_zone
    }


  }
}






async function shop_hardware3() {


  // HARDWARE STORE LITTLE HAVANA**************************************************************************


  // SCRIPT_NAME hard3
}



async function shop_hardware3_inner() {


  await asyncWait(0);


  if ($.player1.isPlaying()) {
    if ($.player1.isInZone("HAVANA")) {
      if ($.player1.locateAnyMeans3D($.hard3X, $.hard3Y, $.hard3Z, 35.0, 35.0, 20.0, false /* FALSE */)) {
        if ($.camera_hard1 == 0) {
          await load_up_hard_keeper();  // SCM GOSUB load_up_hard_keeper
          $.time_difference2 = $.current_time - $.time_since_murdering_shopkeeper2;
          $.hard_weapon1 = ScriptObject.Create(screwdriver, -961.0, -689.87, 14.080);
          $.hard_weapon1.setDynamic(false /* FALSE */);
          $.hard_weapon1.setHeading(270.0);
          $.hard_weapon2 = ScriptObject.Create(hammer, -960.95, -690.88, 14.032);
          $.hard_weapon2.setDynamic(false /* FALSE */);
          $.hard_weapon2.setRotation(0.0, 4.0, 270.0);
          $.hard_weapon3 = ScriptObject.Create(cleaver, -960.95, -691.9, 14.08);
          $.hard_weapon3.setDynamic(false /* FALSE */);
          $.hard_weapon3.setHeading(270.0);
          $.hard_weapon4 = ScriptObject.Create(machete, -960.8, -693.0, 14.08);
          $.hard_weapon4.setDynamic(false /* FALSE */);
          $.hard_weapon4.setHeading(270.0);
          $.hard_weapon5 = ScriptObject.Create(chnsaw, -960.8, -694.0, 14.162);
          $.hard_weapon5.setDynamic(false /* FALSE */);
          $.hard_weapon5.setHeading(270.0);
          if ($.time_difference2 > 60000) {
            $.hard_shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, -963.8, -692.3, 10.3);
            $.hard_shop_bloke1.setHeading(90.0);
            await hard_shop_keeper_setup();  // SCM GOSUB hard_shop_keeper_setup
          }
          $.camera_hard1 = 1;
        }
        else {

          //IF LOCATE_PLAYER_ANY_MEANS_3D player1 hard3X hard3Y hard3Z 6.0 6.0 6.0 FALSE
          if ($.player1.isInArea3D(-981.0, -688.0, 15.1, -959.8, -696.0, 10.1, false /* FALSE */)) {
            await hard_bloke_goes_radge();  // SCM GOSUB hard_bloke_goes_radge
          }


        }


        if (!(Char.IsDead($.hard_shop_bloke1))) {
          if ($.hard_bloke_hide == 0) {
            if ($.flag_cell_nation == 0) {
              $.frenzy_status_ammu = KillFrenzy.ReadStatus();
              if (!($.frenzy_status_ammu == 1)) {
                if ($.player1.locateStoppedOnFoot3D($.hard3X, $.hard3Y, $.hard3Z, 1.0, 1.0, 2.0, true /* TRUE */)) {
                  await hardware_chat();  // SCM GOSUB hardware_chat
                  while ($.in_shopping_mode2 == 0) {
                    $.flag_cell_nation = 1;
                    await asyncWait(0);
                    if ($.player1.isPlaying()) {
                      if ($.dpad_statex == 0) {
                        $.player1.setControl(false /* OFF */);
                        if (!(Char.IsDead($.hard_shop_bloke1))) {
                          $.player1.turnToFaceChar($.hard_shop_bloke1);
                        }
                        Camera.SetFixedPosition(-962.483, -690.104, 14.470, 0.0, 0.0, 0.0);
                        Camera.PointAtPoint(-961.485, -690.029, 14.481, 1 /* INTERPOLATION */); //JUMP_CUT
                        if ($.first_interpolate == 0) {
                          Camera.SetInterpolationParameters(0.0, 1200);
                          $.first_interpolate = 1;
                        }
                        else {
                          Camera.SetInterpolationParameters(0.0, 800);
                        }
                        $.second_interpolate = 0;
                        await asyncWait(800);
                        if ($.player1.isPlaying()) {
                          $.player1.setCoordinates($.hard3X, $.hard3Y, $.hard3Z);
                          $.scplayer.freezePosition(true /* TRUE */);
                        }
                        while ($.dpad_statex == 0) {
                          await asyncWait(0);
                          Text.PrintBig("SCREWD", 1000, 4);
                          Text.PrintWithNumberNow("G_COST", 10, 1000, 1);
                          if ($.player1.isPlaying()) {
                            await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                            $.cost_of_tool = 10;
                            await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                              if ($.player1.isScoreGreater(9)) {
                                if (!($.player1.isCurrentWeapon(2 /* WEAPONTYPE_SCREWDRIVER */))) {
                                  $.player1.giveWeapon(2 /* WEAPONTYPE_SCREWDRIVER */, 0);
                                  $.player1.setCurrentWeapon(2 /* WEAPONTYPE_SCREWDRIVER */);
                                  await buy_noise();  // SCM GOSUB buy_noise
                                  $.player1.addScore(-10);
                                  Stat.AddMoneySpentOnWeapons(10);
                                  await asyncWait(300);
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              else {
                                await denied_noise();  // SCM GOSUB denied_noise
                              }
                            }
                            if ($.in_shopping_mode2 == 1) {
                              // SCM GOTO → shop_hardware3_inner (not lowered; manual jump required)
                              throw new Error("unresolved GOTO shop_hardware3_inner"); // fallback: would break linear control flow
                            }


                          }


                        }
                      }
                    }


                    if ($.player1.isPlaying()) {
                      if ($.dpad_statex == 1) {
                        Camera.SetFixedPosition(-962.483, -691.104, 14.470, 0.0, 0.0, 0.0);
                        Camera.PointAtPoint(-961.485, -691.029, 14.481, 1 /* INTERPOLATION */); //JUMP_CUT
                        Camera.SetInterpolationParameters(0.0, 800);
                        $.second_interpolate = 0;
                        await asyncWait(800);
                        if ($.player1.isPlaying()) {
                          $.player1.setCoordinates($.hard3X, $.hard3Y, $.hard3Z);
                        }
                        while ($.dpad_statex == 1) {
                          await asyncWait(0);
                          Text.PrintBig("HAMMER", 1000, 4);
                          Text.PrintWithNumberNow("G_COST", 20, 1000, 1);
                          if ($.player1.isPlaying()) {
                            await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                            $.cost_of_tool = 20;
                            await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                              if ($.player1.isScoreGreater(19)) {
                                if (!($.player1.isCurrentWeapon(7 /* WEAPONTYPE_HAMMER */))) {
                                  $.player1.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 0);
                                  $.player1.setCurrentWeapon(7 /* WEAPONTYPE_HAMMER */);
                                  await buy_noise();  // SCM GOSUB buy_noise
                                  $.player1.addScore(-20);
                                  Stat.AddMoneySpentOnWeapons(20);
                                  await asyncWait(300);
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              else {
                                await denied_noise();  // SCM GOSUB denied_noise
                              }
                            }
                            if ($.in_shopping_mode2 == 1) {
                              // SCM GOTO → shop_hardware3_inner (not lowered; manual jump required)
                              throw new Error("unresolved GOTO shop_hardware3_inner"); // fallback: would break linear control flow
                            }


                          }


                        }
                      }
                    }


                    if ($.player1.isPlaying()) {
                      if ($.dpad_statex == 2) {
                        Camera.SetFixedPosition(-962.483, -692.104, 14.470, 0.0, 0.0, 0.0);
                        Camera.PointAtPoint(-961.485, -692.029, 14.481, 1 /* INTERPOLATION */); //JUMP_CUT
                        Camera.SetInterpolationParameters(0.0, 800);
                        $.second_interpolate = 0;
                        await asyncWait(800);
                        if ($.player1.isPlaying()) {
                          $.player1.setCoordinates($.hard3X, $.hard3Y, $.hard3Z);
                        }
                        while ($.dpad_statex == 2) {
                          await asyncWait(0);
                          Text.PrintBig("CLEVER", 1000, 4);
                          Text.PrintWithNumberNow("G_COST", 50, 1000, 1);
                          if ($.player1.isPlaying()) {
                            await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                            $.cost_of_tool = 50;
                            await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                              if ($.player1.isScoreGreater(49)) {
                                if (!($.player1.isCurrentWeapon(8 /* WEAPONTYPE_CLEAVER */))) {
                                  $.player1.giveWeapon(8 /* WEAPONTYPE_CLEAVER */, 0);
                                  $.player1.setCurrentWeapon(8 /* WEAPONTYPE_CLEAVER */);
                                  await buy_noise();  // SCM GOSUB buy_noise
                                  $.player1.addScore(-50);
                                  Stat.AddMoneySpentOnWeapons(50);
                                  await asyncWait(300);
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              else {
                                await denied_noise();  // SCM GOSUB denied_noise
                              }
                            }
                            if ($.in_shopping_mode2 == 1) {
                              // SCM GOTO → shop_hardware3_inner (not lowered; manual jump required)
                              throw new Error("unresolved GOTO shop_hardware3_inner"); // fallback: would break linear control flow
                            }


                          }


                        }
                      }
                    }
                    if ($.player1.isPlaying()) {
                      if ($.dpad_statex == 3) {
                        Camera.SetFixedPosition(-962.483, -693.204, 14.470, 0.0, 0.0, 0.0);
                        Camera.PointAtPoint(-961.485, -693.129, 14.481, 1 /* INTERPOLATION */); //JUMP_CUT
                        Camera.SetInterpolationParameters(0.0, 800);
                        $.second_interpolate = 0;
                        await asyncWait(800);
                        if ($.player1.isPlaying()) {
                          $.player1.setCoordinates($.hard3X, $.hard3Y, $.hard3Z);
                        }
                        while ($.dpad_statex == 3) {
                          await asyncWait(0);
                          Text.PrintBig("MACHETE", 1000, 4);
                          Text.PrintWithNumberNow("G_COST", 100, 1000, 1);
                          if ($.player1.isPlaying()) {
                            await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                            $.cost_of_tool = 100;
                            await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                              if ($.player1.isScoreGreater(99)) {
                                if (!($.player1.isCurrentWeapon(9 /* WEAPONTYPE_MACHETE */))) {
                                  $.player1.giveWeapon(9 /* WEAPONTYPE_MACHETE */, 0);
                                  $.player1.setCurrentWeapon(9 /* WEAPONTYPE_MACHETE */);
                                  await buy_noise();  // SCM GOSUB buy_noise
                                  $.player1.addScore(-100);
                                  Stat.AddMoneySpentOnWeapons(100);
                                  await asyncWait(300);
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              else {
                                await denied_noise();  // SCM GOSUB denied_noise
                              }
                            }
                            if ($.in_shopping_mode2 == 1) {
                              // SCM GOTO → shop_hardware3_inner (not lowered; manual jump required)
                              throw new Error("unresolved GOTO shop_hardware3_inner"); // fallback: would break linear control flow
                            }


                          }


                        }
                      }
                    }
                    if ($.player1.isPlaying()) {
                      if ($.dpad_statex == 4) {
                        Camera.SetFixedPosition(-962.483, -694.504, 14.470, 0.0, 0.0, 0.0);
                        Camera.PointAtPoint(-961.485, -694.429, 14.481, 1 /* INTERPOLATION */); //JUMP_CUT
                        Camera.SetInterpolationParameters(0.0, 800);
                        $.second_interpolate = 0;
                        await asyncWait(800);
                        if ($.player1.isPlaying()) {
                          $.player1.setCoordinates($.hard3X, $.hard3Y, $.hard3Z);
                        }
                        while ($.dpad_statex == 4) {
                          await asyncWait(0);
                          Text.PrintBig("CHAINSA", 1000, 4);
                          Text.PrintWithNumberNow("G_COST", 500, 1000, 1);
                          if ($.player1.isPlaying()) {
                            await check_dpad_state2();  // SCM GOSUB check_dpad_state2
                            $.cost_of_tool = 500;
                            await you_have_a_weapon();  // SCM GOSUB you_have_a_weapon
                            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                              if ($.player1.isScoreGreater(499)) {
                                if (!($.player1.isCurrentWeapon(11 /* WEAPONTYPE_CHAINSAW */))) {
                                  $.player1.giveWeapon(11 /* WEAPONTYPE_CHAINSAW */, 0);
                                  $.player1.setCurrentWeapon(11 /* WEAPONTYPE_CHAINSAW */);
                                  await buy_noise();  // SCM GOSUB buy_noise
                                  $.player1.addScore(-500);
                                  Stat.AddMoneySpentOnWeapons(500);
                                  await asyncWait(300);
                                }
                                else {
                                  await denied_noise();  // SCM GOSUB denied_noise
                                }
                              }
                              else {
                                await denied_noise();  // SCM GOSUB denied_noise
                              }
                            }
                            if ($.in_shopping_mode2 == 1) {
                              // SCM GOTO → shop_hardware3_inner (not lowered; manual jump required)
                              throw new Error("unresolved GOTO shop_hardware3_inner"); // fallback: would break linear control flow
                            }


                          }


                        }
                      }
                    }


                  }


                }
                else {
                  if (!($.player1.locateOnFoot3D($.hard3X, $.hard3Y, $.hard3Z, 1.0, 1.0, 2.0, false /* FALSE */))) {
                    if ($.in_shopping_mode2 == 1) {
                      if ($.player1.isPlaying()) {
                        await not_in_wee_hard_zone();  // SCM GOSUB not_in_wee_hard_zone
                      }
                    }
                  }


                }


              }


            }


          }


        }


      }
      else {
        if ($.camera_hard1 == 1) {
          await not_in_big_hard_zone();  // SCM GOSUB not_in_big_hard_zone
        }


      }


    }


  }
  else {
    await not_in_big_hard_zone();  // SCM GOSUB not_in_big_hard_zone
  }


  // SCM GOTO → shop_hardware3_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO shop_hardware3_inner"); // fallback: would break linear control flow






}




async function ammu_bloke_goes_radge() {


  if (!(Char.IsDead($.ammu_shop_bloke1))) {
    if ($.player1.isShooting() || $.ammu_shop_bloke1.hasBeenDamagedByWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) {
      if ($.ammu_bloke_kill_player == 0) {
        if ($.player1.isPlaying()) {
          $.ammu_shop_bloke1.setObjKillPlayerOnFoot($.player1);
        }
        $.ammu_bloke_kill_player = 1;
      }
    }


  }
}



async function hard_bloke_goes_radge() {


  if (!(Char.IsDead($.hard_shop_bloke1))) {
    if ($.player1.isTargetingChar($.hard_shop_bloke1)) {
      if ($.hard_bloke_hide == 0) {
        $.hard_shop_bloke1.stopLooking();
        if (!(Char.IsDead($.hard_shop_bloke1))) {
          $.hard_shop_bloke1.setCrouch(false /* FALSE */, 9999999);
          $.hard_shop_bloke1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.hard_shop_bloke1.setWaitState(17 /* WAITSTATE_PLAYANIM_HANDSUP */, 9999999);
          const _res18 = $.hard_shop_bloke1.getOffsetInWorldCoords(0.0, 1.2, 0.0);
$.shop_blokex = _res18.x;
$.shop_blokey = _res18.y;
$.shop_blokez = _res18.z;
        }
        TIMERA = 0;
        $.hard_bloke_hide = 1;
      }
      else {
        if (TIMERA > 2000 && TIMERA < 6000) {
          if ($.robbed_money1_created == 0) {
            $.robbed_money1 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 50);
            Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, 13 /* SOUND_AMMUNATION_BUY_WEAPON */);
            await add_stat_point2();  // SCM GOSUB add_stat_point2
            $.robbed_money1_created = 1;
          }
        }
        if (TIMERA > 6000 && TIMERA < 10000) {
          if ($.robbed_money2_created == 0) {
            $.shop_blokey = $.shop_blokey + 0.1;
            $.shop_blokex = $.shop_blokex + 0.1;
            $.robbed_money2 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 100);
            Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, 13 /* SOUND_AMMUNATION_BUY_WEAPON */);
            $.player1.alterWantedLevelNoDrop(1);
            $.robbed_money2_created = 1;
          }
        }
        if (TIMERA > 10000 && TIMERA < 14000) {
          if ($.robbed_money3_created == 0) {
            $.shop_blokey = $.shop_blokey + 0.1;
            $.robbed_money3 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 250);
            Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, 13 /* SOUND_AMMUNATION_BUY_WEAPON */);
            $.player1.alterWantedLevelNoDrop(2);
            $.robbed_money3_created = 1;
          }
        }
        if (TIMERA > 14000 && TIMERA < 20000) {
          if ($.robbed_money4_created == 0) {
            $.shop_blokey = $.shop_blokey + 0.1;
            $.shop_blokex = $.shop_blokex + 0.1;
            $.robbed_money4 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 600);
            Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, 13 /* SOUND_AMMUNATION_BUY_WEAPON */);
            $.player1.alterWantedLevelNoDrop(3);
            $.robbed_money4_created = 1;
          }
        }
      }
      if ($.player1.isShooting() || $.hard_shop_bloke1.hasBeenDamagedByWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) {
        // SCM GOTO → duck_hardware (not lowered; manual jump required)
        throw new Error("unresolved GOTO duck_hardware"); // fallback: would break linear control flow
      }


    }
    else {
      // SCM label duck_hardware
      if ($.hard_bloke_hide == 0) {
        if ($.player1.isShooting() || $.hard_shop_bloke1.hasBeenDamagedByWeapon(47 /* WEAPONTYPE_ANYWEAPON */)) {
          $.hard_bloke_hide = 1;
        }
      }
      else {
        if (!(Char.IsDead($.hard_shop_bloke1))) {
          $.hard_shop_bloke1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.hard_shop_bloke1.setCrouch(true /* TRUE */, 9999999);
          if ($.shop_alarm_played == 0) {
            $.hard_shop_bloke1.stopLooking();
            const _res19 = $.hard_shop_bloke1.getCoordinates();
$.shop_blokex = _res19.x;
$.shop_blokey = _res19.y;
$.shop_blokez = _res19.z;
            $.shop_alarm = Sound.AddContinuous($.shop_blokex, $.shop_blokey, $.shop_blokez, 0 /* SOUND_BANK_ALARM_LOOP */);
            $.player1.alterWantedLevelNoDrop(2);
            $.shop_alarm_played = 1;
          }
        }
        //hard_bloke_hide = 0

      }
    }


  }
}



async function denied_noise() {
  if ($.player1.isPlaying()) {
    const _res20 = $.player1.getCoordinates();
$.playera_x = _res20.x;
$.playera_y = _res20.y;
$.playera_z = _res20.z;
    Sound.AddOneOffSound($.playera_x, $.playera_y, $.playera_z, 14 /* SOUND_AMMUNATION_BUY_WEAPON_DENIED */);
  }


  while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
    await asyncWait(0);
  }
}



async function buy_noise() {


  if ($.player1.isPlaying()) {
    const _res21 = $.player1.getCoordinates();
$.playera_x = _res21.x;
$.playera_y = _res21.y;
$.playera_z = _res21.z;
    Sound.AddOneOffSound($.playera_x, $.playera_y, $.playera_z, 13 /* SOUND_AMMUNATION_BUY_WEAPON */);
  }


  while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
    await asyncWait(0);
  }
}




async function check_dpad_state1() {

  //PRINT_HELP ( GUN_H1 )

  Text.PrintHelpForever("GUN_H1");


  const _res22 = Pad.GetPositionOfAnalogueSticks(0 /* PAD1 */);
$.lstickx = _res22.leftStickX;
$.lsticky = _res22.leftStickY;
$.rstickx = _res22.rightStickX;
$.rsticky = _res22.rightStickY;


  if (Pad.IsButtonPressed(0 /* PAD1 */, 10 /* DPADLEFT */) || $.lstickx < -100) {
    $.dpad_statex = $.dpad_statex - 1;
  }


  if (Pad.IsButtonPressed(0 /* PAD1 */, 11 /* DPADRIGHT */) || $.lstickx > 100) {
    $.dpad_statex = $.dpad_statex + 1;
  }


  if ($.dpad_statex < 0) {
    $.dpad_statex = 4;
  }


  if ($.dpad_statex > 4) {
    $.dpad_statex = 0;
  }


  if (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
    while (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
      await asyncWait(0);


    }
    if ($.player1.isPlaying()) {
      Camera.RestoreJumpcut();
      Camera.SetBehindPlayer();
      Text.ClearHelp();
      $.player1.setCoordinates($.ammu1X, $.ammu1Y, $.ammu1Z);
      //WAIT 1000

      if ($.player1.isPlaying()) {
        $.scplayer.freezePosition(false /* FALSE */);
        $.player1.setControl(true /* ON */);
      }
      $.flag_cell_nation = 0;
      $.in_shopping_mode1 = 1;
    }
  }
}




async function check_dpad_state1_2() {

  //PRINT_HELP ( GUN_H1 )

  Text.PrintHelpForever("GUN_H1");


  const _res23 = Pad.GetPositionOfAnalogueSticks(0 /* PAD1 */);
$.lstickx = _res23.leftStickX;
$.lsticky = _res23.leftStickY;
$.rstickx = _res23.rightStickX;
$.rsticky = _res23.rightStickY;


  if (Pad.IsButtonPressed(0 /* PAD1 */, 10 /* DPADLEFT */) || $.lstickx < -100) {
    $.dpad_statex = $.dpad_statex - 1;
  }


  if (Pad.IsButtonPressed(0 /* PAD1 */, 11 /* DPADRIGHT */) || $.lstickx > 100) {
    $.dpad_statex = $.dpad_statex + 1;
  }


  if ($.dpad_statex < 0) {
    $.dpad_statex = 5;
  }


  if ($.dpad_statex > 5) {
    $.dpad_statex = 0;
  }


  if (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
    while (!(Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */))) {
      await asyncWait(0);


    }
    if ($.player1.isPlaying()) {
      Camera.RestoreJumpcut();
      Camera.SetBehindPlayer();
      Text.ClearHelp();
      if ($.player1.isPlaying()) {
        if ($.player1.isInZone("BEACH3")) {
          $.player1.setCoordinates($.ammu2X, $.ammu2Y, $.ammu2Z);
        }
        if ($.player1.isInZone("DTOWN")) {
          $.player1.setCoordinates($.ammu3X, $.ammu3Y, $.ammu3Z);
        }
      }
      if ($.player1.isPlaying()) {
        $.scplayer.freezePosition(false /* FALSE */);
        $.player1.setControl(true /* ON */);
      }
      $.flag_cell_nation = 0;
      $.in_shopping_mode1 = 1;
    }


  }
}




async function check_dpad_state2() {

  //PRINT_HELP ( GUN_H1 )

  Text.PrintHelpForever("GUN_H1");


  const _res24 = Pad.GetPositionOfAnalogueSticks(0 /* PAD1 */);
$.lstickx = _res24.leftStickX;
$.lsticky = _res24.leftStickY;
$.rstickx = _res24.rightStickX;
$.rsticky = _res24.rightStickY;


  if (Pad.IsButtonPressed(0 /* PAD1 */, 10 /* DPADLEFT */) || $.lstickx < -100) {
    $.dpad_statex = $.dpad_statex - 1;
  }


  if (Pad.IsButtonPressed(0 /* PAD1 */, 11 /* DPADRIGHT */) || $.lstickx > 100) {
    $.dpad_statex = $.dpad_statex + 1;
  }


  if ($.dpad_statex < 0) {
    $.dpad_statex = 4;
  }


  if ($.dpad_statex > 4) {
    $.dpad_statex = 0;
  }


  if (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
    while (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
      await asyncWait(0);


    }
    if ($.player1.isPlaying()) {
      Camera.RestoreJumpcut();
      Camera.SetBehindPlayer();
      Text.ClearHelp();
      if ($.player1.isPlaying()) {
        if ($.player1.isInZone("BEACH2")) {
          $.player1.setCoordinates($.hard1X, $.hard1Y, $.hard1Z);
        }
        if ($.player1.isInZone("BEACH3")) {
          $.player1.setCoordinates($.hard2X, $.hard2Y, $.hard2Z);
        }
        if ($.player1.isInZone("HAVANA")) {
          $.player1.setCoordinates($.hard3X, $.hard3Y, $.hard3Z);
        }
      }
      //WAIT 1000
      if ($.player1.isPlaying()) {
        $.scplayer.freezePosition(false /* FALSE */);
        $.player1.setControl(true /* ON */);
      }
      $.flag_cell_nation = 0;
      $.in_shopping_mode2 = 1;
    }
  }
}




async function ammu_chat() {


  if ($.special_ammu_audio == 0) {
    $.special_ammu_audio = 1;
  }
}




async function hardware_chat() {


  if ($.special_ammu_audio == 0) {
    $.special_ammu_audio = 1;
  }
}




async function ammu_shop_keeper_setup() {
  await asyncWait(1500);


  if ($.player1.isPlaying()) {
    if (!(Char.IsDead($.ammu_shop_bloke1))) {
      $.ammu_shop_bloke1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      if ($.player1.isInZone("BEACH1")) {
        if (Streaming.HasModelLoaded(ingramsl)) {
          $.ammu_shop_bloke1.giveWeapon(24 /* WEAPONTYPE_SILENCED_INGRAM */, 9999);
        }
      }
      if ($.player1.isInZone("BEACH3")) {
        if (Streaming.HasModelLoaded(uzi)) {
          $.ammu_shop_bloke1.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
        }
      }
      if ($.player1.isInZone("DTOWN")) {
        if (Streaming.HasModelLoaded(python)) {
          $.ammu_shop_bloke1.giveWeapon(18 /* WEAPONTYPE_PYTHON */, 9999);
        }
      }
      if ($.player1.isPlaying()) {
        $.ammu_shop_bloke1.lookAtPlayerAlways($.player1);
      }
    }
  }
}




async function not_in_wee_ammu_zone() {


  $.in_shopping_mode1 = 0;
  $.dpad_statex = 0;
  $.special_ammu_audio = 0;
  $.first_interpolate = 0;
  Text.ClearHelp();
}



async function not_in_big_ammu_zone() {


  if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference1 > 30000) {
    $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer();
  }
  $.ammu_shop_bloke1.delete();
  Streaming.UnloadSpecialCharacter(21);
  if ($.player1.isPlaying()) {
    $.scplayer.freezePosition(false /* FALSE */);
  }
  $.ammu_gun1.delete();
  $.ammu_gun2.delete();
  $.ammu_gun3.delete();
  $.ammu_gun4.delete();
  $.ammu_gun5.delete();
  $.ammu_gun6.delete();
  $.ammu_gun7.delete();
  $.ammu_bloke_kill_player = 0;
  $.camera_ammu1 = 0;
  $.hands_up_before = 0;
  $.shop_alarm.remove();


  if (!($.player1.isPlaying())) {
    $.time_since_murdering_shopkeeper1 = -30000;
  }
}



async function hard_shop_keeper_setup() {


  if (!(Char.IsDead($.hard_shop_bloke1))) {
    $.hard_shop_bloke1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.hard_shop_bloke1.clearThreatSearch();
    $.hard_shop_bloke1.setStayInSamePlace(true /* TRUE */);
    if ($.player1.isPlaying()) {
      $.hard_shop_bloke1.lookAtPlayerAlways($.player1);
    }
  }
}



async function not_in_wee_hard_zone() {


  $.in_shopping_mode2 = 0;
  $.dpad_statex = 0;
  $.special_ammu_audio = 0;
  $.first_interpolate = 0;
  Text.ClearHelp();
}



async function not_in_big_hard_zone() {


  if (Char.IsDead($.hard_shop_bloke1) || $.hard_bloke_hide == 1) {
    if ($.time_difference2 > 60000) {
      $.time_since_murdering_shopkeeper2 = Clock.GetGameTimer();
    }
  }
  $.hard_shop_bloke1.delete();
  $.hard_weapon1.delete();
  $.hard_weapon2.delete();
  $.hard_weapon3.delete();
  $.hard_weapon4.delete();
  $.hard_weapon5.delete();
  Streaming.UnloadSpecialCharacter(16);
  if ($.player1.isPlaying()) {
    $.scplayer.freezePosition(false /* FALSE */);
  }
  $.robbed_money1_created = 0;
  $.robbed_money2_created = 0;
  $.robbed_money3_created = 0;
  $.robbed_money4_created = 0;
  $.hard_bloke_hide = 0;
  $.camera_hard1 = 0;
  $.hands_up_before = 0;
  $.shop_alarm_played = 0;
  $.shop_alarm.remove();


  if (!($.player1.isPlaying())) {
    $.time_since_murdering_shopkeeper2 = -60000;
  }
}



async function load_up_sam() {


  Streaming.LoadSpecialCharacter(21, "sam");


  while (!(Streaming.HasSpecialCharacterLoaded(21))) {
    await asyncWait(0);
    Streaming.LoadSpecialCharacter(21, "sam");
  }


  $.current_time = Clock.GetGameTimer();


  $.ammu_shop_bloke1.delete();
}



async function load_up_hard_keeper() {


  Streaming.LoadSpecialCharacter(16, "s_keep");


  while (!(Streaming.HasSpecialCharacterLoaded(16))) {
    await asyncWait(0);
    Streaming.LoadSpecialCharacter(16, "s_keep");
  }


  $.current_time = Clock.GetGameTimer();


  $.hard_shop_bloke1.delete();
}




async function you_have_a_weapon() {


  const _res25 = $.scplayer.getWeaponInSlot(2);
$.what_weapontype = _res25.weaponType;
$.returnedammo = _res25.weaponAmmo;
$.what_model = _res25.weaponModel;
  $.player1.setCurrentWeapon($.what_weapontype);
  if (!($.what_weapontype == 0 /* WEAPONTYPE_UNARMED */)) {
    Text.PrintWithNumberNow("HELP54", $.cost_of_tool, 1000, 1);
  }
}



async function set_current_weapon() {


  if ($.returnedammo > 0) {
    $.player1.setCurrentWeapon($.what_weapontype);
  }
}




async function add_stat_point2() {

  // WASHINGTON BEACH

  if ($.player1.locateAnyMeans3D($.hard1X, $.hard1Y, $.hard1Z, 35.0, 35.0, 30.0, false /* FALSE */) && $.robbed_hardshop_1 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_hardshop_1 = 1;
  }

  // MALL

  if ($.player1.isInArea3D(357.7, 1016.6, 30.1, 410.4, 1110.4, 16.0, false /* FALSE */) && $.robbed_hardshop_2 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_hardshop_2 = 1;
  }

  //HAVANA

  if ($.player1.locateAnyMeans3D($.hard3X, $.hard3Y, $.hard3Z, 35.0, 35.0, 20.0, false /* FALSE */) && $.robbed_hardshop_3 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_hardshop_3 = 1;
  }
}

export async function ammu() {
  // MissionBoundary


  // VAR_INT camera_ammu1 camera_hard1
  // VAR_INT ammu_bloke_kill_player hard_bloke_hide
  // VAR_INT special_ammu_audio sniper_in_stock spaz_in_stock
  // VAR_INT in_shopping_mode1 in_shopping_mode2 dpad_stateX ReturnedAmmo
  // VAR_INT ammu_shop_bloke1 hard_shop_bloke1 M4_in_stock laser_in_stock
  // VAR_INT time_difference1 time_difference2 current_time time_since_murdering_shopkeeper1 time_since_murdering_shopkeeper2
  // VAR_INT first_interpolate second_interpolate shop_alarm_played shop_alarm
  // VAR_INT hands_up_before armour_in_stock stubby_in_stock what_WeaponType what_Model
  // VAR_INT in_this_state1 in_this_state2 players_armour katana_in_stock
  // VAR_INT hard_weapon1 hard_weapon2 hard_weapon3 hard_weapon4 hard_weapon5
  // VAR_INT LStickX LStickY RStickX RStickY ArmourToAdd cost_of_tool robbed_hardshop_1 robbed_hardshop_2 robbed_hardshop_3
  // VAR_INT ammu_gun1 ammu_gun2 ammu_gun3 ammu_gun4 ammu_gun5 ammu_gun6 ammu_gun7
  // VAR_FLOAT shop_blokeX shop_blokeY shop_blokeZ playera_x playera_y playera_z
  // VAR_INT shotgun_in_stock ruger_in_stock bbat_in_stock machete_in_stock mp5_in_stock python_in_stock frenzy_status_ammu


  $.current_time = 0;
  $.time_since_murdering_shopkeeper1 = -30000;
  $.time_since_murdering_shopkeeper2 = -60000;
  $.dpad_statex = 0;
  $.in_shopping_mode1 = 0;
  $.in_shopping_mode2 = 0;
  $.camera_ammu1 = 0;
  $.camera_hard1 = 0;
  $.special_ammu_audio = 0;
  $.ammu_bloke_kill_player = 0;
  $.hard_bloke_hide = 0;
  $.hands_up_before = 0;
  $.first_interpolate = 0;
  $.second_interpolate = 0;
  $.in_this_state1 = 0;
  $.in_this_state2 = 0;
  $.shotgun_in_stock = 0;
  $.ruger_in_stock = 0;
  $.bbat_in_stock = 0;
  $.machete_in_stock = 0;
  $.armour_in_stock = 0;
  $.stubby_in_stock = 0;
  $.sniper_in_stock = 0;
  $.m4_in_stock = 0;
  $.spaz_in_stock = 0;
  $.laser_in_stock = 0;
  $.python_in_stock = 0;
  $.mp5_in_stock = 0;
  $.katana_in_stock = 0;
  $.robbed_hardshop_1 = 0;
  $.robbed_hardshop_2 = 0;
  $.robbed_hardshop_3 = 0;


  $.shop_alarm = Sound.AddContinuous($.shop_blokex, $.shop_blokey, $.shop_blokez, 0 /* SOUND_BANK_ALARM_LOOP */);
  $.shop_alarm.remove();


  // SCRIPT_NAME ammu


  // SET_DEATHARREST_STATE(false /* OFF */);



}
