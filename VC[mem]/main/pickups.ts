// Generated from main/pickups.sc

import { $ } from "../utils/vars.mts";

async function mission_packages_start() {


  await asyncWait(0);


  $.shit_counter++;


  $.bollox = 0;
  if ($.bollox == 1) {
    $.haitian_gate = ScriptObject.CreateNoOffset(electricgate, -1114.1, 67.0, 10.1);
    $.mansion_clothes = Pickup.CreateClothes(-384.5, -591.9, 25.3, 1);
    $.clothes_pickup1 = Pickup.CreateClothes(226.4, -1265.6, 20.1, 1);
    $.clothes_pickup2 = Pickup.CreateClothes(97.5, -1133.6, 10.4, 2);
    $.clothes_pickup3 = Pickup.CreateClothes(364.2, 1086.1, 19.0, 3);
    $.clothes_pickup4 = Pickup.CreateClothes(106.5, 253.0, 21.7, 4);
    $.clothes_pickup5 = Pickup.CreateClothes(-1024.5, -433.9, 10.9, 5);
    //CREATE_CLOTHES_PICKUP -1024.5 -433.9 10.9 5 clothes_pickup5
    $.clothes_pickup6 = Pickup.CreateClothes(405.7, -485.6, 12.3, 6);
    $.clothes_pickup7 = Pickup.CreateClothes(414.3, 1042.0, 25.4, 8);
    $.clothes_pickup9 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
    $.clothes_pickup10 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
    $.clothes_pickup11 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
    $.clothes_pickup12 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
    $.clothes_pickup13 = Pickup.CreateClothes(465.3, -57.4, 15.7, 7);
    $.clothes_pickup8 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
    //CREATE_CLOTHES_PICKUP 414.3 1042.0 25.4 8 safehouse_clothes1
    $.safehouse_clothes2 = Pickup.CreateClothes(414.3, 1042.0, 25.4, 8);
    //CREATE_CLOTHES_PICKUP 414.3 1042.0 25.4 8 safehouse_clothes3
    //CREATE_CLOTHES_PICKUP 414.3 1042.0 25.4 8 safehouse_clothes4
    //CREATE_CLOTHES_PICKUP 414.3 1042.0 25.4 8 safehouse_clothes5
    //CREATE_CLOTHES_PICKUP 414.3 1042.0 25.4 8 safehouse_clothes6
    //CREATE_CLOTHES_PICKUP 414.3 1042.0 25.4 8 safehouse_clothes7
    $.starting_tracksuit = Pickup.CreateClothes(-1200.3, -322.9, 10.9, 11);
    $.final_clothes = Pickup.CreateClothes(-382.6, -585.9, 25.3, 12);
  }


  /////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////hotel room trophys/////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////

  if ($.shit_counter == 1) {
    if ($.player1.isPlaying()) {
      if ($.flag_player_in_hotel == 1) {
        if ($.trophy_created == 0) {
          if ($.flag_counter_mission2_passed == 1) {
            $.moneybag1 = ScriptObject.CreateNoOffset(moneybag, 228.934, -1269.593, 20.228);
          }
          if ($.flag_phil_mission2_passed == 1) {
            $.boomshine1 = ScriptObject.CreateNoOffset(boomshine, 228.934, -1269.593, 20.228);
          }
          if ($.flag_bankjob_mission4_passed == 1) {
            $.hockeymask1 = ScriptObject.CreateNoOffset(mask, 228.934, -1269.593, 20.228);
          }
          if ($.flag_baron_mission5_passed == 1) {
            $.coketotem1 = ScriptObject.CreateNoOffset(coke_voodoo, 228.934, -1269.593, 20.228);
          }
          if ($.flag_bankjob_mission2_passed == 1) {
            $.shootingtrophy = ScriptObject.CreateNoOffset(trophy1, 228.934, -1269.593, 20.228);
          }
          if ($.flag_lawyer_mission1_passed == 1) {
            $.suitbag1 = ScriptObject.CreateNoOffset(sutibag, 228.934, -1269.593, 20.228);
          }
          if ($.flag_porn_mission4_passed == 1) {
            $.pornoposter1 = ScriptObject.CreateNoOffset(pornposters, 228.934, -1269.593, 20.228);
          }
          $.trophy_created = 1;
        }
      }
      else {
        if ($.trophy_created == 1) {
          $.moneybag1.delete();
          $.boomshine1.delete();
          $.hockeymask1.delete();
          $.coketotem1.delete();
          $.shootingtrophy.delete();
          $.suitbag1.delete();
          $.pornoposter1.delete();
          $.trophy_created = 0;
        }
      }
      if ($.flag_player_in_mansion == 1) {
        if ($.crap_created == 0) {
          if ($.flag_protect_mission1_passed == 0) {
            $.initial_painting = ScriptObject.CreateNoOffset(frame1, -378.394, -583.35, 27.078);
          }
          else {
            $.new_painting = ScriptObject.CreateNoOffset(frame1damaged, -378.374, -583.35, 27.078);
          }
          if ($.earned_free_flame_thrower == 1) {
            $.flamer = ScriptObject.CreateNoOffset(flame_tins, -373.306, -593.374, 25.369);
          }
          if ($.mm_mission_passed_once == 1) {
            if ($.flag_kickstart_passed_1stime == 1) {
              if ($.done_ovalring_progress == 1) {
                $.trophys = ScriptObject.CreateNoOffset(trophies, -408.907, -560.001, 20.23);
              }
            }
          }
          if ($.flag_sergio_mission2_passed == 1) {
            $.helibox = ScriptObject.CreateNoOffset(heli_box, -401.955, -566.672, 19.234);
          }
          if ($.flag_pizza_mission_passed == 1) {
            $.pizzbox = ScriptObject.CreateNoOffset(pizza_box1, -406.211, -559.996, 18.654);
          }
          if ($.flag_porn_mission4_passed == 1) {
            $.pizzmess1 = ScriptObject.CreateNoOffset(pizza_mess, -383.088, -556.169, 18.95);
            $.pizzmess2 = ScriptObject.CreateNoOffset(pizza_mess2, -385.024, -570.197, 21.58);
            $.rubbish1 = ScriptObject.CreateNoOffset(man_rubbish03, -379.201, -568.813, 20.695);
            $.gash_bag1 = ScriptObject.CreateNoOffset(gash_bags1, -408.239, -563.1, 19.054);
            $.gash_bag2 = ScriptObject.CreateNoOffset(gashbags2, -383.019, -596.235, 25.037);
          }
          if ($.flag_porn_mission3_passed == 1) {
            $.photos = ScriptObject.CreateNoOffset(Poloroids, -374.306, -593.35, 26.475);
          }
          if ($.flag_bankjob_mission4_passed == 1) {
            $.gundocs = ScriptObject.CreateNoOffset(gun_docs, -381.008, -594.382, 25.389);
          }
          if ($.flag_sergio_mission3_passed == 1) {
            $.shovel1 = ScriptObject.CreateNoOffset(shovel, -375.566, -555.54, 19.15);
          }
          $.crap_created = 1;
        }
      }
      else {
        if ($.crap_created == 1) {
          $.flamer.delete();
          $.trophys.delete();
          $.helibox.delete();
          $.rubbish1.delete();
          $.shovel1.delete();
          $.gundocs.delete();
          $.gash_bag1.delete();
          $.gash_bag2.delete();
          $.pizzmess1.delete();
          $.pizzmess2.delete();
          $.pizzbox.delete();
          $.photos.delete();
          $.initial_painting.delete();
          $.new_painting.delete();
          $.crap_created = 0;
        }
      }
    }
  }

  /*
  //IF HAS_SONY_CD_BEEN_READ 1
  //special cd
  //METAL (SPECIAL)
  IF clothes10_created = 0
  CREATE_CLOTHES_PICKUP 271.0 -1314.3 11.0 11 clothes_pickup10
  PRINT_HELP ( PICK1 ) //Coveralls outfit delivered to Tooled up in The North Point Mall.
  clothes10_created = 1
  ENDIF
  //ROMANTIC (SPECIAL)
  IF clothes11_created = 0
  CREATE_CLOTHES_PICKUP 271.0 -1317.3 11.0 12 clothes_pickup11
  PRINT_HELP ( PICK1 ) //Coveralls outfit delivered to Tooled up in The North Point Mall.
  clothes11_created = 1
  ENDIF
  //MC TOMMY (SPECIAL)
  IF clothes12_created = 0
  CREATE_CLOTHES_PICKUP 271.0 -1320.3 11.0 13 clothes_pickup12
  PRINT_HELP ( PICK1 ) //Coveralls outfit delivered to Tooled up in The North Point Mall.
  clothes12_created = 1
  ENDIF
  //ENDIF
  */


  if ($.shit_counter == 2) {
    if ($.flag_cell_nation == 0) {
      if ($.mansion_clothes_created == 1) {
        if ($.mansion_clothes.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player");
            Stat.AddMoneySpentOnClothes(50);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.starting_tracksuit.hasBeenCollected()) {
        await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
        if ($.player1.isPlaying()) {
          $.scplayer.undress("play11");
          Stat.AddMoneySpentOnClothes(50);
        }
        await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
      }
      if ($.created_final_shirt == 1) {
        if ($.final_clothes.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("play12");
            Stat.AddMoneySpentOnClothes(120);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }


      /*
      IF safehouse_created1 = 1
      IF HAS_PICKUP_BEEN_COLLECTED safehouse_clothes1
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer player
      ADD_MONEY_SPENT_ON_CLOTHES 50
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF
      */
      if ($.safehouse_created2 == 1) {
        if ($.safehouse_clothes2.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player");
            Stat.AddMoneySpentOnClothes(50);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      /*
      IF safehouse_created3 = 1
      IF HAS_PICKUP_BEEN_COLLECTED safehouse_clothes3
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer player
      ADD_MONEY_SPENT_ON_CLOTHES 50
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF
      IF safehouse_created4 = 1
      IF HAS_PICKUP_BEEN_COLLECTED safehouse_clothes4
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer player
      ADD_MONEY_SPENT_ON_CLOTHES 50
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF
      IF safehouse_created5 = 1
      IF HAS_PICKUP_BEEN_COLLECTED safehouse_clothes5
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer player
      ADD_MONEY_SPENT_ON_CLOTHES 50
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF
      IF safehouse_created6 = 1
      IF HAS_PICKUP_BEEN_COLLECTED safehouse_clothes6
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer player
      ADD_MONEY_SPENT_ON_CLOTHES 50
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF
      */

    }
  }



  if ($.shit_counter == 3) {
    if ($.flag_cell_nation == 0) {
      /*
      IF safehouse_created7 = 1
      IF HAS_PICKUP_BEEN_COLLECTED safehouse_clothes7
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer player
      ADD_MONEY_SPENT_ON_CLOTHES 50
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF
      */
      if ($.hotel_clothes_created == 1) {
        if ($.clothes_pickup1.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player");
            Stat.AddMoneySpentOnClothes(50);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.clothes2_created == 1) {
        if ($.clothes_pickup2.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player2");
            Stat.AddMoneySpentOnClothes(100);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.clothes3_created == 1) {
        if ($.clothes_pickup3.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player3");
            Stat.AddMoneySpentOnClothes(80);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.clothes4_created == 1) {
        if ($.clothes_pickup4.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player4");
            Stat.AddMoneySpentOnClothes(40);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.clothes5_created == 1) {
        if ($.clothes_pickup5.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player5");
            Stat.AddMoneySpentOnClothes(70);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.clothes6_created == 1) {
        if ($.clothes_pickup6.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player6");
            Stat.AddMoneySpentOnClothes(90);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
    }
  }



  if ($.shit_counter == 4) {
    if ($.flag_cell_nation == 0) {
      if ($.clothes7_created == 1) {
        if ($.clothes_pickup7.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player8");
            Stat.AddMoneySpentOnClothes(120);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.clothes8_created == 1) {
        if ($.clothes_pickup8.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player9");
            Stat.AddMoneySpentOnClothes(30);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
      if ($.clothes9_created == 1) {
        if ($.clothes_pickup9.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("play10");
            Stat.AddMoneySpentOnClothes(100);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }

      /*
      IF clothes10_created = 1
      IF HAS_PICKUP_BEEN_COLLECTED clothes_pickup10
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer play11
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF

      IF clothes11_created = 1
      IF HAS_PICKUP_BEEN_COLLECTED clothes_pickup11
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer play12
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF

      IF clothes12_created = 1
      IF HAS_PICKUP_BEEN_COLLECTED clothes_pickup12
      GOSUB changing_clothes_part1
      IF IS_PLAYER_PLAYING player1
      UNDRESS_CHAR scplayer play13
      ENDIF
      GOSUB changing_clothes_part2
      ENDIF
      ENDIF
      */
      if ($.clothes13_created == 1) {
        if ($.clothes_pickup13.hasBeenCollected()) {
          await changing_clothes_part1();  // SCM GOSUB changing_clothes_part1
          if ($.player1.isPlaying()) {
            $.scplayer.undress("player7");
            Stat.AddMoneySpentOnClothes(120);
          }
          await changing_clothes_part2();  // SCM GOSUB changing_clothes_part2
        }
      }
    }
  }










  /////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////package pickups////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  //mansion

  if ($.shit_counter == 5) {
    if ($.player1.isPlaying()) {
      if ($.flag_baron_mission5_passed == 1) {
        if ($.player1.isInZone("STARI")) {
          if ($.bonus_weapons_created1 == 0) {
            if ($.earned_free_body_armour == 1) {
              $.bonus_armour1 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -314.7, -551.2, 10.3);
            }
            if ($.earned_free_chainsaw == 1) {
              $.bonus_gun1 = Pickup.Create(chnsaw, 15 /* PICKUP_ON_STREET_SLOW */, -310.7, -551.2, 10.3);
            }
            if ($.earned_free_python == 1) {
              $.bonus_gun2 = Pickup.CreateWithAmmo(python, 15 /* PICKUP_ON_STREET_SLOW */, 24, -306.7, -551.2, 10.3);
            }
            if ($.earned_free_flame_thrower == 1) {
              $.bonus_gun3 = Pickup.CreateWithAmmo(flame, 15 /* PICKUP_ON_STREET_SLOW */, 60, -302.7, -551.2, 10.3);
            }
            if ($.earned_free_laserscope == 1) {
              $.bonus_gun4 = Pickup.CreateWithAmmo(laser, 15 /* PICKUP_ON_STREET_SLOW */, 28, -298.7, -551.2, 10.3);
            }
            if ($.earned_free_minigun == 1) {
              $.bonus_gun5 = Pickup.CreateWithAmmo(minigun, 15 /* PICKUP_ON_STREET_SLOW */, 500, -294.7, -551.2, 10.3);
            }
            if ($.earned_free_rocket == 1) {
              $.bonus_gun6 = Pickup.CreateWithAmmo(rocketla, 15 /* PICKUP_ON_STREET_SLOW */, 8, -290.7, -551.2, 10.3);
            }
            $.bonus_weapons_created1 = 1;
          }
        }
        else {
          if ($.bonus_weapons_created1 == 1) {
            await remove_bonus_pickups();  // SCM GOSUB remove_bonus_pickups
            $.bonus_weapons_created1 = 0;
          }
        }
      }
    }
  }



  if ($.shit_counter == 6) {
    if ($.player1.isPlaying()) {
      //ocean drive hotel
      if ($.player1.isInZone("BEACH1")) {
        if ($.flag_player_in_hotel == 1) {
          if ($.bonus_weapons_created2 == 0) {
            if ($.earned_free_body_armour == 1) {
              $.bonus_armour1 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, 214.2, -1275.7, 19.2);
            }
            if ($.earned_free_chainsaw == 1) {
              $.bonus_gun1 = Pickup.Create(chnsaw, 15 /* PICKUP_ON_STREET_SLOW */, 210.2, -1274.7, 19.2);
            }
            if ($.earned_free_python == 1) {
              $.bonus_gun2 = Pickup.CreateWithAmmo(python, 15 /* PICKUP_ON_STREET_SLOW */, 24, 206.2, -1273.7, 19.2);
            }
            if ($.earned_free_flame_thrower == 1) {
              $.bonus_gun3 = Pickup.CreateWithAmmo(flame, 15 /* PICKUP_ON_STREET_SLOW */, 60, 224.2, -1273.1, 19.2);
            }
            if ($.earned_free_laserscope == 1) {
              $.bonus_gun4 = Pickup.CreateWithAmmo(laser, 15 /* PICKUP_ON_STREET_SLOW */, 28, 228.2, -1279.2, 19.2);
            }
            if ($.earned_free_minigun == 1) {
              $.bonus_gun5 = Pickup.CreateWithAmmo(minigun, 15 /* PICKUP_ON_STREET_SLOW */, 500, 226.0, -1268.6, 20.1);
            }
            if ($.earned_free_rocket == 1) {
              $.bonus_gun6 = Pickup.CreateWithAmmo(rocketla, 15 /* PICKUP_ON_STREET_SLOW */, 8, 231.7, -1264.4, 20.1);
            }
            $.bonus_weapons_created2 = 1;
          }
        }
      }
      else {
        if ($.bonus_weapons_created2 == 1) {
          await remove_bonus_pickups();  // SCM GOSUB remove_bonus_pickups
          $.bonus_weapons_created2 = 0;
        }
      }
    }
  }



  if ($.shit_counter == 7) {
    if ($.player1.isPlaying()) {
      //Hyman Condo
      if ($.player1.isInZone("DTOWN")) {
        if ($.hyman_condo_bought == 1) {
          if ($.bonus_weapons_created3 == 0) {
            if ($.earned_free_body_armour == 1) {
              $.bonus_armour1 = Pickup.Create(bodyarmour, 15 /* PICKUP_ON_STREET_SLOW */, -813.1, 1344.7, 66.4);
            }
            if ($.earned_free_chainsaw == 1) {
              $.bonus_gun1 = Pickup.Create(chnsaw, 15 /* PICKUP_ON_STREET_SLOW */, -817.1, 1344.7, 66.4);
            }
            if ($.earned_free_python == 1) {
              $.bonus_gun2 = Pickup.CreateWithAmmo(python, 15 /* PICKUP_ON_STREET_SLOW */, 24, -821.1, 1344.7, 66.4);
            }
            if ($.earned_free_flame_thrower == 1) {
              $.bonus_gun3 = Pickup.CreateWithAmmo(flame, 15 /* PICKUP_ON_STREET_SLOW */, 60, -825.1, 1344.7, 66.4);
            }
            if ($.earned_free_laserscope == 1) {
              $.bonus_gun4 = Pickup.CreateWithAmmo(laser, 15 /* PICKUP_ON_STREET_SLOW */, 28, -830.1, 1344.7, 66.4);
            }
            if ($.earned_free_minigun == 1) {
              $.bonus_gun5 = Pickup.CreateWithAmmo(minigun, 15 /* PICKUP_ON_STREET_SLOW */, 500, -833.1, 1344.7, 66.4);
            }
            if ($.earned_free_rocket == 1) {
              $.bonus_gun6 = Pickup.CreateWithAmmo(rocketla, 15 /* PICKUP_ON_STREET_SLOW */, 8, -839.0, 1351.6, 66.4);
            }
            $.bonus_weapons_created3 = 1;
          }
        }
      }
      else {
        if ($.bonus_weapons_created3 == 1) {
          await remove_bonus_pickups();  // SCM GOSUB remove_bonus_pickups
          $.bonus_weapons_created3 = 0;
        }
      }
    }
  }

  //warping player to top of lift

  if ($.shit_counter == 8) {
    if ($.player1.isPlaying()) {
      if ($.flag_porn_mission4_passed == 1) {
        if ($.player1.isInZone("DTOWN")) {
          if ($.player1.isOnAnyBike()) {
            await warp1();  // SCM GOSUB warp1
          }
          else {
            if ($.player1.isOnFoot()) {
              await warp1();  // SCM GOSUB warp1
            }
          }
          if ($.player1.isOnAnyBike()) {
            await warp2();  // SCM GOSUB warp2
          }
          else {
            if ($.player1.isOnFoot()) {
              await warp2();  // SCM GOSUB warp2
            }
          }
        }
      }
    }
    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("DTOWN")) {
        if ($.player1.isOnAnyBike()) {
          await warp5();  // SCM GOSUB warp5
        }
        else {
          if ($.player1.isOnFoot()) {
            await warp5();  // SCM GOSUB warp5
          }
        }
        if ($.player1.isOnAnyBike()) {
          await warp6();  // SCM GOSUB warp6
        }
        else {
          if ($.player1.isOnFoot()) {
            await warp6();  // SCM GOSUB warp6
          }
        }
      }
    }


  }


  //warping player to top of lift

  if ($.shit_counter == 9) {
    if ($.player1.isPlaying()) {
      if ($.hyman_condo_bought == 1) {
        if ($.player1.isInZone("DTOWN")) {
          if ($.player1.isOnAnyBike()) {
            await warp3();  // SCM GOSUB warp3
          }
          else {
            if ($.player1.isOnFoot()) {
              await warp3();  // SCM GOSUB warp3
            }
          }
          if ($.player1.isOnAnyBike()) {
            await warp4();  // SCM GOSUB warp4
          }
          else {
            if ($.player1.isOnFoot()) {
              await warp4();  // SCM GOSUB warp4
            }
          }
        }
      }
    }
  }


  if ($.shit_counter > 9) {
    $.shit_counter = 0;
  }



  // SCM GOTO → mission_packages_start (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_packages_start"); // fallback: would break linear control flow


  // MissionBoundary
}




async function cloth1() {


  // SCRIPT_NAME cloth1
  await asyncWait(5000);
  Text.PrintHelp("CLOTH2"); //Street outfit delivered to safehouse.


  await asyncWait(10000);
  Text.PrintHelp("CLOTH1"); //Soiree outfit delivered to Rafaels on Ocean Beach.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth2() {


  // SCRIPT_NAME cloth2
  await asyncWait(5000);
  Text.PrintHelp("HELP25"); //You can now take jobs from Avery Carrington.


  await asyncWait(10000);
  Text.PrintHelp("CLOTH3"); //Coveralls outfit delivered to Tooled Up in The North Point Mall.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth3() {


  // SCRIPT_NAME cloth3
  await asyncWait(5000);
  Text.PrintHelp("CLOTH4"); //Country Club outfit delivered to The Golf Club in Leafs Links.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth4() {


  // SCRIPT_NAME cloth4
  await asyncWait(5000);
  Text.PrintHelp("CLOTH5"); //Havana outfit delivered to Little Havana Streetwear in Little Havana.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth5() {


  // SCRIPT_NAME cloth5
  await asyncWait(5000);
  Text.PrintHelp("CLOTH6"); //Cop outfit delivered to Police Station on Washington Beach.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth6() {


  // SCRIPT_NAME cloth6
  await asyncWait(5000);
  Text.PrintHelp("CLOTH7"); //Casual outfit delivered to Gash in The North Point Mall.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth7() {


  // SCRIPT_NAME cloth7
  await asyncWait(20000);
  Text.PrintHelp("CLOTH8"); //Mr Vercetti outfit delivered to Collar & Cuffs on Ocean Beach.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth8() {


  // SCRIPT_NAME cloth8
  await asyncWait(5000);
  Text.PrintHelp("CLOTH9"); //Tracksuit outfit delivered to Jockspot in Downtown.
  return; // TERMINATE_THIS_SCRIPT
}




async function cloth9() {


  // SCRIPT_NAME cloth9
  await asyncWait(5000);
  Text.PrintHelp("CLOTH10"); //Bank Job outfit delivered to Malibu Club in Vice Point.
  return; // TERMINATE_THIS_SCRIPT
}




async function check_packages() {



  // SCRIPT_NAME PACKAGE


  await asyncWait(500);


  $.number_of_packages_collected = Game.GetCollectablesCollected();


  while ($.number_of_packages_collected < 10) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK1"); //Body Armour delivered to safe houses!
  $.earned_free_body_armour = 1;



  while ($.number_of_packages_collected < 20) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK3"); //Chainsaw delivered to safe houses
  $.earned_free_chainsaw = 1;


  while ($.number_of_packages_collected < 30) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK2"); //Python delivered to safe houses!
  $.earned_free_python = 1;



  while ($.number_of_packages_collected < 40) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK4"); //Flame Thrower delivered to safe houses!
  $.earned_free_flame_thrower = 1;



  while ($.number_of_packages_collected < 50) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK5"); //Laser Scope delivered to safe houses!
  $.earned_free_laserscope = 1;



  while ($.number_of_packages_collected < 60) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK6"); //Minigun delivered to safe houses!
  $.earned_free_minigun = 1;



  while ($.number_of_packages_collected < 70) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK7"); //Rocket Launcher delivered to safe houses!
  $.earned_free_rocket = 1;



  while ($.number_of_packages_collected < 80) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK8"); //Sea Sparrow now available from the Mansion!
  //CREATE_CAR_GENERATOR -379.0 -632.1 10.2 187.2 seaspar -1 -1 0 0 0 0 10000 gen_car148 //behind mansion

  $.gen_car148.switch(101);



  while ($.number_of_packages_collected < 90) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  Stat.PlayerMadeProgress(1);
  Text.PrintHelp("PICK9"); //Tank now available from the Army Barracks!
  //CREATE_CAR_GENERATOR -1720.3 -239.6 14.8 92.0 rhino -1 -1 0 0 0 0 10000 gen_car149 //at army barracks

  $.gen_car149.switch(101);



  while ($.number_of_packages_collected < 100) {
    await asyncWait(500);
    $.number_of_packages_collected = Game.GetCollectablesCollected();
  }


  await asyncWait(5000);
  Stat.PlayerMadeProgress(1);


  if ($.hunter_created == 0) {
    Text.PrintHelp("PICK10"); //Hunter now available from the Army Barracks!
    //CREATE_CAR_GENERATOR -1681.2 -103.7 14.7 180.0 hunter -1 -1 0 0 0 0 10000 gen_car150 //at army barracks
    $.gen_car150.switch(101);
    $.hunter_created = 1;
  }
  else {
    Text.PrintHelp("APACHE");
    //CREATE_CAR_GENERATOR -72.4 -1607.9 12.7 0.0 hunter -1 -1 0 0 0 0 10000 south_beach_hunter //at army barracks
    $.south_beach_hunter.switch(101);
  }


  return; // TERMINATE_THIS_SCRIPT
}






async function remove_bonus_pickups() {


  $.bonus_armour1.remove();
  $.bonus_gun1.remove();
  $.bonus_gun2.remove();
  $.bonus_gun3.remove();
  $.bonus_gun4.remove();
  $.bonus_gun5.remove();
  $.bonus_gun6.remove();
}





async function changing_clothes_part1() {


  $.flag_cell_nation = 1;
  if ($.player1.isPlaying()) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
  }
  else {
    $.flag_cell_nation = 0;
  }


  if ($.player1.isPlaying()) {
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
    $.player1.setControl(false /* OFF */);
  }
  else {
    $.flag_cell_nation = 0;
  }
}




async function changing_clothes_part2() {


  if ($.player1.isPlaying()) {
    Streaming.LoadAllModelsNow();
    if ($.player1.isPlaying()) {
      $.scplayer.dress();
    }
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
    if (!($.player1.isWantedLevelGreater(2))) {
      $.player1.clearWantedLevel();
    }
    $.player1.setControl(true /* ON */);
    $.flag_cell_nation = 0;
    Camera.DoFade(500, 1 /* FADE_IN */);
    if ($.clothes_help_flag == 0) {
      Text.PrintHelp("CLT_HL2"); //When a Clothes Pickup is collected, a one star or two star wanted level will be cleared.
      $.clothes_help_flag = 1;
    }
    else {
      Text.PrintHelp("CLOHELP"); //Clean Clothes!!
    }
  }
  else {
    $.flag_cell_nation = 0;
  }
}



async function warp1() {


  if ($.player1.locateAnyMeans3D(-557.1, 782.1, 21.8, 2.5, 2.5, 2.5, false /* FALSE */)) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    if ($.player1.isPlaying()) {
      $.player1.setCoordinates(-556.1, 787.8, 96.5);
      $.player1.setHeading(100.5);
      Camera.SetInFrontOfPlayer();
    }
    Camera.DoFade(500, 1 /* FADE_IN */);
  }
}




async function warp2() {


  if ($.player1.locateAnyMeans3D(-551.8, 787.4, 97.5, 2.5, 2.5, 2.5, false /* FALSE */)) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    if ($.player1.isPlaying()) {
      $.player1.setCoordinates(-562.1, 782.0, 21.8);
      $.player1.setHeading(100.5);
      Camera.SetInFrontOfPlayer();
    }
    Camera.DoFade(500, 1 /* FADE_IN */);
  }
}



async function warp3() {


  if ($.player1.locateAnyMeans3D(-830.9, 1312.4, 10.5, 2.5, 2.5, 2.5, false /* FALSE */)) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    if ($.player1.isPlaying()) {
      $.player1.setCoordinates(-815.0, 1353.9, 65.4);
      $.player1.setHeading(87.2);
      Camera.SetInFrontOfPlayer();
    }
    Camera.DoFade(500, 1 /* FADE_IN */);
  }
}



async function warp4() {


  if ($.player1.locateAnyMeans3D(-811.7, 1354.2, 66.4, 2.5, 2.5, 2.5, false /* FALSE */)) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    if ($.player1.isPlaying()) {
      $.player1.setCoordinates(-829.6, 1308.8, 10.5);
      $.player1.setHeading(200.0);
      Camera.SetInFrontOfPlayer();
    }
    Camera.DoFade(500, 1 /* FADE_IN */);
  }
}



async function warp5() {


  if ($.player1.locateAnyMeans3D(-410.5, 1120.9, 10.1, 2.5, 2.5, 2.5, false /* FALSE */)) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    if ($.player1.isPlaying()) {
      $.player1.setCoordinates(-446.9, 1128.3, 55.6);
      $.player1.setHeading(282.0);
      Camera.SetInFrontOfPlayer();
    }
    Camera.DoFade(500, 1 /* FADE_IN */);
  }
}



async function warp6() {


  if ($.player1.locateAnyMeans3D(-451.1, 1128.1, 55.6, 2.5, 2.5, 2.5, false /* FALSE */)) {
    Camera.SetFadingColor(0, 0, 1);
    Camera.DoFade(500, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    if ($.player1.isPlaying()) {
      $.player1.setCoordinates(-410.5, 1117.7, 10.0);
      $.player1.setHeading(179.6);
      Camera.SetInFrontOfPlayer();
    }
    Camera.DoFade(500, 1 /* FADE_IN */);
  }
}

export async function pickups() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // **********************************Pickups************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // Variables for mission

  // VAR_INT clothes2_created clothes3_created clothes4_created clothes5_created clothes6_created
  // VAR_INT clothes7_created clothes8_created clothes9_created clothes10_created clothes11_created clothes12_created clothes13_created
  // VAR_INT hotel_clothes_created mansion_clothes_created save1_clothes_created save2_clothes_created save3_clothes_created save4_clothes_created save5_clothes_created
  // VAR_INT clothes_pickup1 clothes_pickup2 clothes_pickup3 clothes_pickup4 clothes_pickup5 clothes_pickup6
  // VAR_INT clothes_pickup7 clothes_pickup8 clothes_pickup9 clothes_pickup10 clothes_pickup11 clothes_pickup12 clothes_pickup13
  // VAR_INT mansion_clothes safehouse_clothes2
  // VAR_INT safehouse_created1 safehouse_created2 safehouse_created3 safehouse_created4 safehouse_created5 safehouse_created6 safehouse_created7
  // VAR_INT number_of_packages_collected jason_knife earned_free_python earned_free_body_armour earned_free_chainsaw earned_free_flame_thrower earned_free_laserscope earned_free_minigun earned_free_rocket
  // VAR_INT bonus_weapons_created1 bonus_weapons_created2 bonus_weapons_created3 bonus_armour1 bonus_gun1 bonus_gun2 bonus_gun3 bonus_gun4 bonus_gun5 bonus_gun6
  // VAR_INT moneybag1 boomshine1 hockeymask1 coketotem1 shootingtrophy suitbag1 pornoposter1 trophy_created
  // VAR_INT shit_counter bollox cheat_clothes crap_created
  // VAR_INT flamer trophys helibox rubbish1 shovel1 gundocs gash_bag1 gash_bag2 pizzmess1 pizzmess2 pizzbox photos initial_painting new_painting
  // VAR_INT clothes_help_flag final_clothes

  // ****************************************Mission Start************************************


  // SCRIPT_NAME pickups
  // SET_DEATHARREST_STATE(false /* OFF */);


  await asyncWait(100);
  // START_NEW_SCRIPT check_packages 




}
