// Generated from main/robbing.sc

import { $ } from "../vars.mts";

async function mission_start_shops() {




  // START_NEW_SCRIPT shopware1
  // START_NEW_SCRIPT shopware2
  // START_NEW_SCRIPT shopware3
  // START_NEW_SCRIPT shopware4
  // START_NEW_SCRIPT shopware5


  // MissionBoundary
}







async function shopware1() {


  // VICE POINT**************************************************************************


  // SCRIPT_NAME shop1
}



async function shopware_inner1() {
  // SCM GOTO → shopware_inner1 lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("BEACH3") && $.flag_player_in_mall == 0) {

        // 7-11
        if ($.player1.locateAnyMeans3D(449.7, 781.5, 12.2, 30.0, 30.0, 30.0, false /* FALSE */)) {
          if ($.create_shop_keeper1 == 0) {
            await load_shop_keeper();  // SCM GOSUB load_shop_keeper
            $.time_difference3 = $.current_time - $.time_since_murdering_shopkeeper3;
            if ($.time_difference3 > 60000) {
              $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 450.0, 782.5, 12.2);
              await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
            }
            $.create_shop_keeper1 = 1;
          }
          else {
            if ($.time_difference3 > 60000) {
              if (!(Char.IsDead($.shop_bloke1))) {
                if ($.player1.isInArea3D(472.7, 800.4, 11.5, 438.1, 779.0, 17.0, false /* FALSE */)) {
                  await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                }
              }
              else {
                $.player1.alterWantedLevelNoDrop(1);
              }
            }
          }
        }
        else {
          if ($.create_shop_keeper1 == 1) {
            await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
          }
        }
        if ($.player1.isPlaying()) {
          // Chemist
          if ($.player1.locateAnyMeans3D(383.2, 759.7, 11.0, 30.0, 30.0, 30.0, false /* FALSE */)) {
            if ($.create_shop_keeper2 == 0) {
              await load_shop_keeper();  // SCM GOSUB load_shop_keeper
              $.time_difference4 = $.current_time - $.time_since_murdering_shopkeeper4;
              if ($.time_difference4 > 60000) {
                $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 383.2, 759.7, 11.0);
                $.shop_bloke1.setHeading(180.0);
                await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
              }
              $.create_shop_keeper2 = 1;
            }
            else {
              if ($.time_difference4 > 60000) {
                if (!(Char.IsDead($.shop_bloke1))) {
                  if ($.player1.locateAnyMeans3D(383.2, 759.7, 11.0, 8.0, 8.0, 6.0, false /* FALSE */)) {
                    await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                  }
                }
                else {
                  $.player1.alterWantedLevelNoDrop(1);
                }
              }
            }
          }
          else {
            if ($.create_shop_keeper2 == 1) {
              await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
            }
          }
        }
        if ($.player1.isPlaying()) {
          // Jewllers
          if ($.player1.locateAnyMeans3D(379.9, 210.2, 10.6, 30.0, 30.0, 30.0, false /* FALSE */)) {
            if ($.create_shop_keeper3 == 0) {
              await load_shop_keeper();  // SCM GOSUB load_shop_keeper
              $.time_difference5 = $.current_time - $.time_since_murdering_shopkeeper5;
              if ($.time_difference5 > 60000) {
                $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 379.9, 210.2, 10.6);
                $.shop_bloke1.setHeading(280.0);
                await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
              }
              $.create_shop_keeper3 = 1;
            }
            else {
              if ($.time_difference5 > 60000) {
                if (!(Char.IsDead($.shop_bloke1))) {
                  if ($.player1.locateAnyMeans3D(379.9, 210.2, 10.6, 8.0, 8.0, 6.0, false /* FALSE */)) {
                    await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                  }
                }
                else {
                  $.player1.alterWantedLevelNoDrop(1);
                }
              }
            }
          }
          else {
            if ($.create_shop_keeper3 == 1) {
              await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
            }
          }
        }


      }
    }
    else {
      await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
    }


  }
}





async function shopware2() {


  // HAITI**************************************************************************


  // SCRIPT_NAME shop2
}



async function shopware_inner2() {
  // SCM GOTO → shopware_inner2 lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAITI")) {

        // Chemist
        if ($.player1.locateAnyMeans3D(-846.6, -72.6, 10.8, 30.0, 30.0, 30.0, false /* FALSE */)) {
          if ($.create_shop_keeper1 == 0) {
            await load_shop_keeper();  // SCM GOSUB load_shop_keeper
            $.time_difference3 = $.current_time - $.time_since_murdering_shopkeeper3;
            if ($.time_difference3 > 60000) {
              $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, -846.6, -72.6, 10.8);
              $.shop_bloke1.setHeading(166.0);
              await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
            }
            $.create_shop_keeper1 = 1;
          }
          else {
            if ($.time_difference3 > 60000) {
              if (!(Char.IsDead($.shop_bloke1))) {
                if ($.player1.locateAnyMeans3D(-846.6, -72.6, 10.8, 8.0, 8.0, 6.0, false /* FALSE */)) {
                  await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                }
              }
              else {
                $.player1.alterWantedLevelNoDrop(1);
              }
            }
          }
        }
        else {
          if ($.create_shop_keeper1 == 1) {
            await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
          }
        }


      }
    }
    else {
      await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
    }


  }
}





async function shopware3() {


  // DOWNTOWN**************************************************************************


  // SCRIPT_NAME shop3
}



async function shopware_inner3() {
  // SCM GOTO → shopware_inner3 lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("DTOWN")) {

        // Chemist
        if ($.player1.locateAnyMeans3D(-830.4, 741.9, 10.6, 30.0, 30.0, 30.0, false /* FALSE */)) {
          if ($.create_shop_keeper1 == 0) {
            await load_shop_keeper();  // SCM GOSUB load_shop_keeper
            $.time_difference3 = $.current_time - $.time_since_murdering_shopkeeper3;
            if ($.time_difference3 > 60000) {
              $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, -830.4, 741.9, 10.6);
              $.shop_bloke1.setHeading(90.0);
              await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
            }
            $.create_shop_keeper1 = 1;
          }
          else {
            if ($.time_difference3 > 60000) {
              if (!(Char.IsDead($.shop_bloke1))) {
                if ($.player1.locateAnyMeans3D(-830.4, 741.9, 10.6, 8.0, 8.0, 6.0, false /* FALSE */)) {
                  await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                }
              }
              else {
                $.player1.alterWantedLevelNoDrop(1);
              }
            }
          }
        }
        else {
          if ($.create_shop_keeper1 == 1) {
            await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
          }
        }
        if ($.player1.isPlaying()) {
          // Jewllers
          if ($.player1.locateAnyMeans3D(-854.3, 850.0, 10.6, 30.0, 30.0, 30.0, false /* FALSE */)) {
            if ($.create_shop_keeper2 == 0) {
              await load_shop_keeper();  // SCM GOSUB load_shop_keeper
              $.time_difference4 = $.current_time - $.time_since_murdering_shopkeeper4;
              if ($.time_difference4 > 60000) {
                $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, -854.3, 850.0, 10.6);
                $.shop_bloke1.setHeading(110.0);
                await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
              }
              $.create_shop_keeper2 = 1;
            }
            else {
              if ($.time_difference4 > 60000) {
                if (!(Char.IsDead($.shop_bloke1))) {
                  if ($.player1.locateAnyMeans3D(-854.3, 850.0, 10.6, 8.0, 8.0, 6.0, false /* FALSE */)) {
                    await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                  }
                }
                else {
                  $.player1.alterWantedLevelNoDrop(1);
                }
              }
            }
          }
          else {
            if ($.create_shop_keeper2 == 1) {
              await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
            }
          }
        }


      }
    }
    else {
      await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
    }


  }
}





async function shopware4() {


  // HAVANA**************************************************************************


  // SCRIPT_NAME shop4
}



async function shopware_inner4() {
  // SCM GOTO → shopware_inner4 lowered to endless loop
  while (true) {


    await asyncWait(0);


    if ($.player1.isPlaying()) {
      if ($.player1.isInZone("HAVANA")) {

        //Deli
        if ($.player1.locateAnyMeans3D(-859.2, -632.7, 10.6, 30.0, 30.0, 30.0, false /* FALSE */)) {
          if ($.create_shop_keeper1 == 0) {
            await load_shop_keeper();  // SCM GOSUB load_shop_keeper
            $.time_difference3 = $.current_time - $.time_since_murdering_shopkeeper3;
            if ($.time_difference3 > 60000) {
              $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, -858.8, -632.66, 10.6);
              $.shop_bloke1.setHeading(193.0);
              await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
            }
            $.create_shop_keeper1 = 1;
          }
          else {
            if ($.time_difference3 > 60000) {
              if (!(Char.IsDead($.shop_bloke1))) {
                if ($.player1.locateAnyMeans3D(-859.2, -632.7, 10.6, 8.0, 8.0, 6.0, false /* FALSE */)) {
                  await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                }
              }
              else {
                $.player1.alterWantedLevelNoDrop(1);
              }
            }
          }


        }
        else {
          if ($.create_shop_keeper1 == 1) {
            await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
          }
        }
        if ($.player1.isPlaying()) {
          //Cuban Cafe
          if ($.player1.isPlaying()) {
            if ($.player1.locateAnyMeans3D(-1167.1, -615.8, 11.0, 30.0, 30.0, 30.0, false /* FALSE */)) {
              if ($.create_shop_keeper2 == 0) {
                await load_shop_keeper();  // SCM GOSUB load_shop_keeper
                $.time_difference4 = $.current_time - $.time_since_murdering_shopkeeper4;
                if ($.time_difference4 > 60000) {
                  $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, -1167.1, -615.8, 11.0);
                  $.shop_bloke1.setHeading(90.0);
                  await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
                }
                $.create_shop_keeper2 = 1;
              }
              else {
                if ($.time_difference4 > 60000) {
                  if (!(Char.IsDead($.shop_bloke1))) {
                    if ($.player1.locateAnyMeans3D(-1167.1, -615.8, 11.0, 8.0, 8.0, 6.0, false /* FALSE */)) {
                      await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                    }
                  }
                  else {
                    $.player1.alterWantedLevelNoDrop(1);
                  }
                }
              }
            }
            else {
              if ($.create_shop_keeper2 == 1) {
                await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
              }
            }
          }
        }
        if ($.player1.isPlaying()) {
          //Laundrete
          if ($.player1.isPlaying()) {
            if ($.player1.locateAnyMeans3D(-1192.2, -323.7, 11.1, 30.0, 30.0, 30.0, false /* FALSE */)) {
              if ($.create_shop_keeper3 == 0) {
                await load_shop_keeper();  // SCM GOSUB load_shop_keeper
                $.time_difference5 = $.current_time - $.time_since_murdering_shopkeeper5;
                if ($.time_difference5 > 60000) {
                  $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, -1192.2, -323.7, 11.1);
                  $.shop_bloke1.setHeading(90.0);
                  await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
                }
                $.create_shop_keeper3 = 1;
              }
              else {
                if ($.time_difference5 > 60000) {
                  if (!(Char.IsDead($.shop_bloke1))) {
                    if ($.player1.locateAnyMeans3D(-1192.2, -323.7, 11.1, 8.0, 8.0, 6.0, false /* FALSE */)) {
                      await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                    }
                  }
                  else {
                    $.player1.alterWantedLevelNoDrop(1);
                  }
                }
              }
            }
            else {
              if ($.create_shop_keeper3 == 1) {
                await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
              }
            }
          }
        }


      }
    }
    else {
      await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
    }


  }
}





async function shopware5() {


  // MALL**************************************************************************


  // SCRIPT_NAME shop5
}



async function shopware_inner5() {


  await asyncWait(0);


  if ($.player1.isPlaying()) {
    if ($.flag_player_in_mall == 1) {

      // Music store
      if ($.player1.locateAnyMeans3D(352.7, 1111.3, 24.5, 30.0, 30.0, 15.0, false /* FALSE */)) {
        if ($.create_shop_keeper1 == 0) {
          await load_shop_keeper();  // SCM GOSUB load_shop_keeper
          $.time_difference3 = $.current_time - $.time_since_murdering_shopkeeper3;
          if ($.time_difference3 > 60000) {
            $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 352.7, 1111.3, 24.5);
            $.shop_bloke1.setHeading(290.0);
            await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
          }
          $.create_shop_keeper1 = 1;
        }
        else {
          if ($.time_difference3 > 60000) {
            if (!(Char.IsDead($.shop_bloke1))) {
              if ($.player1.locateAnyMeans3D(352.7, 1111.3, 24.5, 8.0, 8.0, 6.0, false /* FALSE */)) {
                await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
              }
            }
            else {
              $.player1.alterWantedLevelNoDrop(1);
            }
          }
        }
      }
      else {
        if ($.create_shop_keeper1 == 1) {
          await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
        }
      }
      if ($.player1.isPlaying()) {
        // Gash
        if ($.player1.locateAnyMeans3D(423.5, 1039.4, 18.1, 30.0, 30.0, 15.0, false /* FALSE */)) {
          if ($.create_shop_keeper2 == 0) {
            await load_shop_keeper();  // SCM GOSUB load_shop_keeper
            $.time_difference4 = $.current_time - $.time_since_murdering_shopkeeper4;
            if ($.time_difference4 > 60000) {
              $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 423.5, 1039.4, 18.1);
              $.shop_bloke1.setHeading(136.0);
              await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
            }
            $.create_shop_keeper2 = 1;
          }
          else {
            if ($.time_difference4 > 60000) {
              if (!(Char.IsDead($.shop_bloke1))) {
                if ($.player1.locateAnyMeans3D(423.5, 1039.4, 18.1, 8.0, 8.0, 6.0, false /* FALSE */)) {
                  await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                }
              }
              else {
                $.player1.alterWantedLevelNoDrop(1);
              }
            }
          }
        }
        else {
          if ($.create_shop_keeper2 == 1) {
            await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
          }
        }
      }
      if ($.player1.isPlaying()) {
        // Jewllers
        if ($.player1.locateAnyMeans3D(468.7, 1206.6, 19.0, 30.0, 30.0, 15.0, false /* FALSE */)) {
          if ($.create_shop_keeper3 == 0) {
            await load_shop_keeper();  // SCM GOSUB load_shop_keeper
            $.time_difference5 = $.current_time - $.time_since_murdering_shopkeeper5;
            if ($.time_difference5 > 60000) {
              $.shop_bloke1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL16, 468.7, 1206.6, 19.0);
              $.shop_bloke1.setHeading(90.0);
              await set_up_shopkeeper();  // SCM GOSUB set_up_shopkeeper
            }
            $.create_shop_keeper3 = 1;
          }
          else {
            if ($.time_difference5 > 60000) {
              if (!(Char.IsDead($.shop_bloke1))) {
                if ($.player1.locateAnyMeans3D(468.7, 1206.6, 19.0, 8.0, 8.0, 6.0, false /* FALSE */)) {
                  await shop_bloke_goes_radge();  // SCM GOSUB shop_bloke_goes_radge
                }
              }
              else {
                $.player1.alterWantedLevelNoDrop(1);
              }
            }
          }
        }
        else {
          if ($.create_shop_keeper3 == 1) {
            await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
          }
        }
      }


    }
  }
  else {
    await cleanup_shop_robbing();  // SCM GOSUB cleanup_shop_robbing
  }


  // SCM GOTO → shopware_inner5 (not lowered; manual jump required)
  throw new Error("unresolved GOTO shopware_inner5"); // fallback: would break linear control flow




  //GOSUBS***************************************************************************

}




async function shop_bloke_goes_radge() {


  if (!(Char.IsDead($.shop_bloke1))) {
    if ($.player1.isTargetingChar($.shop_bloke1)) {
      if ($.shop_bloke_hide == 0) {
        $.shop_bloke1.stopLooking();
        if (!(Char.IsDead($.shop_bloke1))) {
          $.shop_bloke1.setCrouch(false /* FALSE */, 9999999);
          $.shop_bloke1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.shop_bloke1.setWaitState(17 /* WAITSTATE_PLAYANIM_HANDSUP */, 9999999);
          const _res458 = $.shop_bloke1.getOffsetInWorldCoords(0.0, 1.2, 0.0);
$.shop_blokex = _res458.x;
$.shop_blokey = _res458.y;
$.shop_blokez = _res458.z;
        }
        TIMERA = 0;
        $.shop_bloke_hide = 1;
      }
      else {
        if ($.shop_alarm_played == 0) {
          if (TIMERA > 2000 && TIMERA < 6000) {
            if ($.robbed_money1_created == 0) {
              $.shop_blokez = $.shop_blokez + 0.15;
              $.robbed_money1 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 50);
              Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, SOUND_AMMUNATION_BUY_WEAPON);
              await add_stat_point();  // SCM GOSUB add_stat_point
              $.robbed_money1_created = 1;
            }
          }
          if (TIMERA > 6000 && TIMERA < 10000) {
            if ($.robbed_money2_created == 0) {
              $.shop_blokey = $.shop_blokey + 0.1;
              $.shop_blokex = $.shop_blokex + 0.1;
              $.robbed_money2 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 100);
              Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, SOUND_AMMUNATION_BUY_WEAPON);
              $.player1.alterWantedLevelNoDrop(1);
              $.robbed_money2_created = 1;
            }
          }
          if (TIMERA > 10000 && TIMERA < 14000) {
            if ($.robbed_money3_created == 0) {
              $.shop_blokey = $.shop_blokey + 0.1;
              $.robbed_money3 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 250);
              Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, SOUND_AMMUNATION_BUY_WEAPON);
              $.player1.alterWantedLevelNoDrop(2);
              $.robbed_money3_created = 1;
            }
          }
          if (TIMERA > 14000 && TIMERA < 20000) {
            if ($.robbed_money4_created == 0) {
              $.shop_blokey = $.shop_blokey + 0.1;
              $.shop_blokex = $.shop_blokex + 0.1;
              $.robbed_money4 = Pickup.CreateMoney($.shop_blokex, $.shop_blokey, $.shop_blokez, 600);
              Sound.AddOneOffSound($.shop_blokex, $.shop_blokey, $.shop_blokez, SOUND_AMMUNATION_BUY_WEAPON);
              $.player1.alterWantedLevelNoDrop(3);
              $.robbed_money4_created = 1;
            }
          }
        }
      }
      if ($.player1.isShooting() || $.shop_bloke1.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
        // SCM GOTO → duck_shop_robbing (not lowered; manual jump required)
        throw new Error("unresolved GOTO duck_shop_robbing"); // fallback: would break linear control flow
      }



    }
    else {
      // SCM label duck_shop_robbing
      if ($.shop_bloke_hide == 0) {
        if ($.player1.isShooting() || $.shop_bloke1.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
          $.shop_bloke_hide = 1;
        }
      }
      else {
        if (!(Char.IsDead($.shop_bloke1))) {
          $.shop_bloke1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.shop_bloke1.setCrouch(true /* TRUE */, 9999999);
          if ($.shop_alarm_played == 0) {
            const _res459 = $.shop_bloke1.getCoordinates();
$.shop_blokex = _res459.x;
$.shop_blokey = _res459.y;
$.shop_blokez = _res459.z;
            $.shop_alarm = Sound.AddContinuous($.shop_blokex, $.shop_blokey, $.shop_blokez, SOUND_BANK_ALARM_LOOP);
            $.player1.alterWantedLevelNoDrop(2);
            $.shop_alarm_played = 1;
          }
        }
        //shop_bloke_hide = 0

      }


    }


  }
}




async function load_shop_keeper() {


  Streaming.LoadSpecialCharacter(16, "s_keep");


  while (!(Streaming.HasSpecialCharacterLoaded(16))) {
    await asyncWait(0);
    Streaming.LoadSpecialCharacter(16, "s_keep");
  }


  $.current_time = Clock.GetGameTimer();
  $.shop_bloke1.delete();
}




async function cleanup_shop_robbing() {


  if ($.create_shop_keeper1 == 1) {
    if (Char.IsDead($.shop_bloke1) || $.shop_bloke_hide == 1) {
      if ($.time_difference3 > 60000) {
        $.time_since_murdering_shopkeeper3 = Clock.GetGameTimer();
      }


    }
  }


  if ($.create_shop_keeper2 == 1) {
    if (Char.IsDead($.shop_bloke1) || $.shop_bloke_hide == 1) {
      if ($.time_difference4 > 60000) {
        $.time_since_murdering_shopkeeper4 = Clock.GetGameTimer();
      }


    }
  }


  if ($.create_shop_keeper3 == 1) {
    if (Char.IsDead($.shop_bloke1) || $.shop_bloke_hide == 1) {
      if ($.time_difference5 > 60000) {
        $.time_since_murdering_shopkeeper5 = Clock.GetGameTimer();
      }


    }
  }


  $.create_shop_keeper1 = 0;
  $.create_shop_keeper2 = 0;
  $.create_shop_keeper3 = 0;
  $.shop_bloke_hide = 0;
  $.shop_alarm_played = 0;
  $.robbed_money1_created = 0;
  $.robbed_money2_created = 0;
  $.robbed_money3_created = 0;
  $.robbed_money4_created = 0;
  $.robbed_money1.remove();
  $.robbed_money2.remove();
  $.robbed_money3.remove();
  $.robbed_money4.remove();
  Streaming.UnloadSpecialCharacter(16);
  $.shop_bloke1.delete();
  $.shop_alarm.remove();


  if (!($.player1.isPlaying())) {
    $.time_since_murdering_shopkeeper3 = -60000;
    $.time_since_murdering_shopkeeper4 = -60000;
    $.time_since_murdering_shopkeeper5 = -60000;
  }
}



async function set_up_shopkeeper() {


  $.shop_bloke1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.shop_bloke1.clearThreatSearch();
  $.shop_bloke1.setStayInSamePlace(true /* TRUE */);
  if ($.player1.isPlaying()) {
    $.shop_bloke1.lookAtPlayerAlways($.player1);
  }
}





async function add_stat_point() {

  //Deli //HAVANA

  if ($.player1.locateAnyMeans3D(-859.2, -632.7, 10.6, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_1 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_1 = 1;
  }

  // Jewllers	//DOWNTOW

  if ($.player1.locateAnyMeans3D(-854.3, 850.0, 10.6, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_2 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_2 = 1;
  }

  // Chemist //DOWNTOWN

  if ($.player1.locateAnyMeans3D(-830.4, 741.9, 10.6, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_3 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_3 = 1;
  }

  // Chemist //HAITI

  if ($.player1.locateAnyMeans3D(-846.6, -72.6, 10.8, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_4 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_4 = 1;
  }

  // Jewllers	//VICEPOINT

  if ($.player1.locateAnyMeans3D(379.9, 210.2, 10.6, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_5 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_5 = 1;
  }

  // Chemist //VICEPOINT

  if ($.player1.locateAnyMeans3D(383.2, 759.7, 11.0, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_6 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_6 = 1;
  }

  // 7-11	//VICEPOINT

  if ($.player1.locateAnyMeans3D(449.7, 781.5, 12.2, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_7 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_7 = 1;
  }

  // Music store //MALL

  if ($.player1.locateAnyMeans3D(352.7, 1111.3, 24.5, 30.0, 30.0, 15.0, false /* FALSE */) && $.robbed_shop_8 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_8 = 1;
  }

  // Gash	//MALL

  if ($.player1.locateAnyMeans3D(423.5, 1039.4, 18.1, 30.0, 30.0, 15.0, false /* FALSE */) && $.robbed_shop_9 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_9 = 1;
  }

  // Jewllers	//MALL

  if ($.player1.locateAnyMeans3D(468.7, 1206.6, 18.2, 30.0, 30.0, 15.0, false /* FALSE */) && $.robbed_shop_10 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_10 = 1;
  }

  // Cuban Cafe //HAVANA

  if ($.player1.locateAnyMeans3D(-1167.5, -613.5, 11.0, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_11 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_11 = 1;
  }

  // Laundrete //HAVANA

  if ($.player1.locateAnyMeans3D(-1192.2, -323.7, 11.1, 30.0, 30.0, 30.0, false /* FALSE */) && $.robbed_shop_12 == 0) {
    Stat.AddStoresKnockedOff(1);
    $.robbed_every_shop++;
    $.robbed_shop_12 = 1;
  }
}

export async function robbing() {
  // MissionBoundary


  // VAR_INT time_since_murdering_shopkeeper3 time_since_murdering_shopkeeper4 time_since_murdering_shopkeeper5
  // VAR_INT create_shop_keeper1 create_shop_keeper2 create_shop_keeper3 shop_bloke_hide robbed_every_shop
  // VAR_INT shop_bloke1 time_difference3 time_difference4 time_difference5 robbed_money1 robbed_money2 robbed_money3 robbed_money4
  // VAR_INT robbed_money1_created robbed_money2_created robbed_money3_created robbed_money4_created
  // VAR_INT robbed_shop_1 robbed_shop_2 robbed_shop_3 robbed_shop_4 robbed_shop_5 robbed_shop_6 robbed_shop_7
  // VAR_INT robbed_shop_8 robbed_shop_9 robbed_shop_10 robbed_shop_11 robbed_shop_12


  $.time_since_murdering_shopkeeper3 = -60000;
  $.time_since_murdering_shopkeeper4 = -60000;
  $.time_since_murdering_shopkeeper5 = -60000;
  $.create_shop_keeper1 = 0;
  $.shop_bloke_hide = 0;
  $.shop_alarm_played = 0;
  $.robbed_money1_created = 0;
  $.robbed_money2_created = 0;
  $.robbed_money3_created = 0;
  $.robbed_money4_created = 0;
  $.robbed_shop_1 = 0;
  $.robbed_shop_2 = 0;
  $.robbed_shop_3 = 0;
  $.robbed_shop_4 = 0;
  $.robbed_shop_5 = 0;
  $.robbed_shop_6 = 0;
  $.robbed_shop_7 = 0;
  $.robbed_shop_8 = 0;
  $.robbed_shop_9 = 0;
  $.robbed_shop_10 = 0;
  $.robbed_shop_11 = 0;
  $.robbed_shop_12 = 0;
  $.robbed_every_shop = 0;


  // SCRIPT_NAME shops


  // SET_DEATHARREST_STATE(false /* OFF */);


}
