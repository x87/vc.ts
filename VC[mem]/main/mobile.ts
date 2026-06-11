// Generated from main/mobile.sc

import { $ } from "../utils/vars.mts";

async function mission_start_cell_phone() {




  // START_NEW_SCRIPT cell_phone 


  // MissionBoundary
}






async function cell_phone() {




  // SET_DEATHARREST_STATE(false /* OFF */); //stops script being terminated if Player dies/arrested


  // SCRIPT_NAME CELL


  // SCM GOTO → filschie_cunningness (not lowered; manual jump required)
  throw new Error("unresolved GOTO filschie_cunningness"); // fallback: would break linear control flow
  $.star_gate_1 = ScriptObject.CreateNoOffset(comgate1open, -712.524, -489.428, 12.549);
  $.star_gate_2 = ScriptObject.CreateNoOffset(comgate2open, -712.524, -489.428, 12.549);
  $.printworks_cash_pickup = Pickup.CreateWithAmmo($.weapon_model_slot_6, 3 /* PICKUP_ONCE */, $.ammo_slot_6, $.pickup_x, $.pickup_y, $.pickup_z);
}

async function filschie_cunningness() {

}


// TEST! TEST! TEST! TEST! TEST! TEST! TEST! TEST! TEST! TEST! TEST!
//CREATE_CLOTHES_PICKUP 96.8 -1473.5 10.4 7 clothes_pickup13
//clothes13_created = 1
//START_NEW_SCRIPT cloth9
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


async function cell_phone_inner() {
  // SCM GOTO → cell_phone_inner lowered to endless loop
  while (true) {


    await asyncWait(0);
    // ***************** SET TEST FLAGS ***********************
    //flag_lawyer_mission2_passed = 1

    //flag_sonny_lance_dead = 1 // end-game calls

    //flag_mob_18 = 1 // CORTEZ asks after Mercedes
    //flag_mob_63 = 1 // bypass mob-63
    //flag_finale_mission2_passed = 1	// NO CALLS FROM SONNY
    //flag_lawyer_mission3_passed = 1	//CALLS FROM SONNY

    //flag_counter_mission1_passed = 1 //3rd Sonny Call
    //flag_porn_mission1_passed = 1 //3rd Sonny Call
    //flag_mob_41 = 1 //3rd Sonny Call

    //flag_general_mission3_passed = 1 //MOB-62
    //flag_baron_mission3_passed = 1 // MOB_46
    //flag_lawyer_mission4_passed = 1 // MOB-24
    //flag_protect_mission1_passed = 1

    //flag_baron_mission4_passed = 1 // MOB_01
    //flag_sergio_mission1_passed = 1	// MOB_01
    //flag_general_mission5_passed = 1 // MOB_01
    //flag_general_mission4_passed = 1 // MOB_25
    //flag_kent_mission1_passed = 1 // MOB_25
    //flag_cuban_mission4_passed = 1 // MOB_30
    //flag_counter_mission2_passed = 1 //MOB_02
    //counter_60_percent = 6 //MOB_02

    //flag_bikers_mission3_passed = 1 //MO_05

    //flag_caryard_purchased = 1 //MOB_03
    //flag_rock_mission1_passed = 1  //MOB_04

    //flag_first_asset_complete = 1 //MOB_14

    //flag_rock_mission3_passed = 1  //MOB_26

    //flag_haitian_mission1_passed = 1 //MOB_29

    //flag_bankjob_mission4_passed = 1 //MOB_34

    //flag_phil_mission2_passed = 1	// MOB_36



    // *******************************************************8


    if (ONMISSION == 0 && $.flag_mobile_timer == 0) {
      $.timer_mobile_start = Clock.GetGameTimer();
      $.flag_mobile_timer = 1;
    }

    // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    //PRINT_WITH_NUMBER_NOW REWARD timer_mobile_diff 500 1 //TEST !!!!!!
    // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO


    if ($.flag_lawyer_mission2_passed == 1) {
      if ($.player1.isPlaying()) {
        if ($.scplayer.isOnFoot() && ONMISSION == 0 && $.flag_cell_nation == 0) {
          await mobile_timer();  // SCM GOSUB mobile_timer
          //STORE_WANTED_LEVEL player1 player_wanted

          if (!($.player1.isWantedLevelGreater(0)) && $.timer_mobile_diff > $.call_delay) {
            if ($.player1.locateOnFoot3D($.printbuyX, $.printbuyY, $.printbuyZ, 4.0, 4.0, 4.0, false /* FALSE */)) {
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }
            if ($.player1.locateOnFoot3D($.carbuyX, $.carbuyY, $.carbuyZ, 4.0, 4.0, 4.0, false /* FALSE */)) {
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }
            if ($.player1.locateOnFoot3D($.pornbuyX, $.pornbuyY, $.pornbuyZ, 4.0, 4.0, 4.0, false /* FALSE */)) {
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }
            if ($.player1.locateOnFoot3D($.icebuyX, $.icebuyY, $.icebuyZ, 4.0, 4.0, 4.0, false /* FALSE */)) {
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }
            if ($.player1.locateOnFoot3D($.taxibuyX, $.taxibuyY, $.taxibuyZ, 4.0, 4.0, 4.0, false /* FALSE */)) {
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }
            if ($.player1.locateOnFoot3D($.bankbuyX, $.bankbuyY, $.bankbuyZ, 4.0, 4.0, 4.0, false /* FALSE */)) {
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }
            if ($.player1.locateOnFoot3D($.boatbuyX, $.boatbuyY, $.boatbuyZ, 4.0, 4.0, 4.0, false /* FALSE */)) {
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            // LEO'S PARTNER CALLS LEO'S PHONE -----------------------------------------------------
            if ($.flag_mob_52 == 0) {
              //RING_PLAYER_PHONE TRUE
              Text.PrintHelp("ANSWER");
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52f" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_f", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52g" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_g", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_52h" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB52_h", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_52 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                //START_NEW_SCRIPT cuban_mission1_loop

              }
              // SCM label mob_52_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }


            if ($.flag_general_mission5_passed == 1) {
              $.flag_colonel_left_town = 1;
            }
            if ($.flag_colonel_left_town == 0) {
              // CORTEZ INVITES PLAYER OVER FOR BUSINESS) -----------------------------------------------------
              if ($.flag_mob_24 == 0 && $.flag_lawyer_mission4_passed == 1) {
                //RING_PLAYER_PHONE TRUE

                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24c", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24d", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24e" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24e", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24f" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24f", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24g" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24g", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_24h" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_24h", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_24 = 1;
                  // START_NEW_SCRIPT general_mission1_loop 
                  $.general_contact_blip.remove();
                  $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, 6 /* RADAR_SPRITE_CORTEZ */);
                  //FLASH_RADAR_BLIP general_contact_blip
                  Text.PrintHelp("NEWCONT");
                  $.flag_new_cont = 1;
                }
                // SCM label mob_24_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }

              // CORTEZ ASKS FOR HELP -----------------------------------------------------
              if ($.flag_mob_70 == 0 && $.flag_baron_mission2_passed == 1) {
                //RING_PLAYER_PHONE TRUE

                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_70a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_70a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_70b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_70b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_70 = 1;
                  // START_NEW_SCRIPT general_mission4_loop 
                  $.general_contact_blip.remove();
                  $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, 6 /* RADAR_SPRITE_CORTEZ */);
                }
                // SCM label mob_70_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }


              // COLONEL ASKS PLAYER FOR HELP ----------------------------------------------
              if ($.flag_mob_25 == 0 && $.flag_general_mission4_passed == 1 && $.flag_general_mission5_passed == 0 && $.flag_kent_mission1_passed == 1) {
                //RING_PLAYER_PHONE TRUE
                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_25a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_25a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_25b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_25b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_25c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_25c", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_25d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_25d", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_25 = 1;
                  // START_NEW_SCRIPT general_mission5_loop 
                  $.general_contact_blip.remove();
                  $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, 6 /* RADAR_SPRITE_CORTEZ */);
                }
                // SCM label mob_25_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }


            }
            else {


              // KENT PAUL PHONES ABOUT SHAGGING MERCEDES ****************************************************

              if ($.flag_mob_18 == 0 && $.flag_finale_mission2_passed == 1) {
                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_18a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_18a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_18b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_18b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_18c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_18c", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_18d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_18d", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_18e" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_18e", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_18f" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_18f", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_18g" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_18g", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_18 = 1;
                }
                // SCM label mob_18_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }


              // CORTEZ ASKS ABOUT MERCEDES -----------------------------------------------------
              if ($.flag_mob_71 == 0 && $.flag_mob_18 == 1 && $.flag_finale_mission2_passed == 1) {
                //RING_PLAYER_PHONE TRUE

                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_G", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_H", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71e" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_I", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71f" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_K", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71g" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_M", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71h" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_N", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71i" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_O", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71j" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_P", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71k" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_Q", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71l" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_R", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71m" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_T", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_71n" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB21_U", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_71 = 1;
                }
                // SCM label mob_71_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }



            }



            // ******************** DIAZ OFFERS PLAYER WORK - OPEN CONTACT POINT ***********************************
            if ($.flag_baron_mission5_passed == 1) {
              $.flag_diaz_dead = 1;
            }
            if ($.flag_diaz_dead == 0) {
              if ($.flag_mob_62 == 0 && $.flag_general_mission3_passed == 1) {
                //RING_PLAYER_PHONE TRUE
                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_62a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_62a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_62b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_62b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_62c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_62c", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_62d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_62d", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_62 = 1;
                  //SWITCH_PED_ROADS_ON -787.8 -519.4 10.0 -657.5 -475.2 20.0 // Star Island gates mainland
                  Path.SwitchPedRoadsOn(-230.0, -464.5, 10.0, 56.85, -459.8, 20.0); // Star Island gates ocean beach
                  //SWITCH_ROADS_ON -787.8 -519.4 10.0 -657.5 -475.2 20.0 // Star Island gates     mainland
                  Path.SwitchRoadsOn(-230.0, -464.5, 10.0, 165.85, -459.8, 20.0); // Star Island gates ocean beach
                  //DELETE_OBJECT star_gate_1
                  $.star_gate_2.delete();
                  //CREATE_OBJECT_NO_OFFSET comgate1open -712.524 -489.428 12.549 star_gate_1
                  //SET_OBJECT_HEADING star_gate_1 3.0
                  //DONT_REMOVE_OBJECT star_gate_1
                  $.star_gate_2 = ScriptObject.CreateNoOffset(comgate2open, -183.824, -473.223, 12.615);
                  //SET_OBJECT_HEADING star_gate_2 12.5
                  $.star_gate_2.dontRemove();
                  $.baron_contact_blip.remove();
                  $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
                  // START_NEW_SCRIPT baron_mission1_loop 
                }
                // SCM label mob_62_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }
            }





            // PAUL WARNS PLAYER ABOUT MOB HIT --------------------------------------------------------
            if ($.flag_mob_20 == 0 && $.flag_general_mission5_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_20a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_20a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_20b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_20b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_20c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_20c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_20d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_20d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_20e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_20e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_20 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT stuntX stuntY stuntZ the_stunt_blip stunt_contact_blip
                //START_NEW_SCRIPT stunt_mission_loop

              }
              // SCM label mob_20_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            //KENT WARNS PLAYER. 'RESCUE BUDDY'------------------------------------------------------------------
            if ($.flag_mob_01 == 0 && $.flag_mob_46 == 1 && $.flag_baron_mission4_passed == 1 && $.flag_general_mission4_passed == 1) {
              //AND flag_sergio_mission1_passed = 1
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_01a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_01a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_01b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_01b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_01c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_01c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_01 = 1;
                $.kent_contact_blip.remove();
                $.kent_contact_blip = Blip.AddSpriteForContactPoint(491.0, -77.7, 10.4, $.the_kent_blip);
                // START_NEW_SCRIPT kent_mission1_loop 
                $.flag_kent_mission_active = 1;
              }
              // SCM label mob_01_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            // LAWYER PHONES PLAYER. 'CAP THE COLLECTOR' --------------------------------------------------------
            if ($.flag_mob_02 == 0 && $.flag_counter_mission2_passed == 1 && $.flag_protect_mission3_passed == 1 && $.counter_60_percent > 6) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_02a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_02a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_02b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_02b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_02c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_02c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_02 = 1;
                $.printworks_cash_pickup.remove();
                $.counter_contact_blip.remove();
                $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
                // START_NEW_SCRIPT finale_mission1_loop 
              }
              // SCM label mob_02_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }

            // KENT ASKS PLAYER OVER TO STUDIO -OPEN LOVE FIST MISSIONS ---------------------------------------
            if ($.flag_mob_68 == 0 && $.flag_baron_mission5_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_68a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_68a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_68b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_68b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_68c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_68c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_68d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_68d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_68 = 1;
                $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
                // START_NEW_SCRIPT rock_mission1_loop 
              }
              // SCM label mob_68_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            // KENT ASKS PLAYER FOR GIG SECURITY -OPEN BIKER GANG MISSIONS ---------------------------------------
            if ($.flag_mob_04 == 0 && $.flag_rock_mission1_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_04a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_04a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_04b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_04b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_04c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_04c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_04d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_04d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_04 = 1;
                $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
                // START_NEW_SCRIPT bikers_mission1_loop 
              }
              // SCM label mob_04_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            // BIKER MISSIONS COMPLETED, MITCH WILL DO GIG SECURITY ----------------------------------------------
            if ($.flag_mob_05 == 0 && $.flag_bikers_mission3_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_05a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_05a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_05b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_05b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_05c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_05c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_05d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_05d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_05 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT bikersX bikersY bikersZ the_biker_blip bikers_contact_blip
                //START_NEW_SCRIPT bikers_mission1_loop

              }
              // SCM label mob_05_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }


            // MITCH THANKS PLAYER FOR THE GIG --------------------------------------------------------
            if ($.flag_mob_26 == 0 && $.flag_rock_mission3_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_26a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_26a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_26b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_26b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_26c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_26c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_26d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_26d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_26e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_26e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_26 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT stuntX stuntY stuntZ the_stunt_blip stunt_contact_blip
                //START_NEW_SCRIPT stunt_mission_loop

              }
              // SCM label mob_26_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }




            // UMBERTO OFFERS PLAYER WORK -OPEN CUBAN CONTACT POINT ------------------------------------------
            if ($.flag_mob_09 == 0 && $.flag_sergio_mission3_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_09a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_09a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_09b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_09b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_09c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_09c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_09d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_09d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_09e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_09e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_09f" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_09f", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_09 = 1;
                $.cuban_contact_blip.remove();
                $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
                // START_NEW_SCRIPT cuban_mission1_loop 
              }
              // SCM label mob_09_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }

            /*
            // UMBERTO OFFERS PLAYER WORK -----------------------------------------------------
            IF flag_mob_29 = 0
            AND flag_haitian_mission1_passed = 1
            //RING_PLAYER_PHONE TRUE
            GOSUB mobile_rings
            IF flag_player_answered_phone = 1
            audio_slot_mobile = 1
            LOAD_MISSION_AUDIO audio_slot_mobile MOB_29a
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_29a ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_29b
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_29b ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_29c
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_29c ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_29d
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_29d ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_29e
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_29e ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_29f
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_29f ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_29g
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_29g ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            CLEAR_PRINTS
            ENDIF
            IF flag_player_answered_phone = 1
            flag_mob_29 = 1
            //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
            //START_NEW_SCRIPT cuban_mission1_loop
            ENDIF
            mob_29_plonk:
            GOSUB mobile_message_cleanup
            GOTO cell_phone_inner
            ENDIF
            */


            // AUNTIE POULET CONTACTS PLAYER -HAITIAN CONTACT POINT OPENED --------------------------------------
            if ($.flag_mob_06 == 0 && $.flag_cuban_mission1_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_06a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_06a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_06b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_06b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_06c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_06c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_06 = 1;
                $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
                // START_NEW_SCRIPT haitian_mission1_loop 
              }
              // SCM label mob_06_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }

            // AUNTIE POULET CONTACTS PLAYER -HAITIAN CONTACT POINT CLOSED --------------------------------------

            if ($.flag_mob_66 == 0 && $.flag_haitian_mission3_passed == 1) {
              if ($.player1.isPlaying()) {
                if ($.player1.isInZone("HAITI")) {
                  //RING_PLAYER_PHONE TRUE
                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_66a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_66a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_66b" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_66b", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_66 = 1;
                  }
                  // SCM label mob_66_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }
            }



            // LAWYER GIVES PLAYER ASSET COMPLETE ADVICE -----------------------------------------------------
            if ($.flag_mob_08 == 0 && $.flag_first_asset_complete == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_08a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_08a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_08b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_08b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_08c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_08c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_08d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_08d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_08e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_08e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_08f" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_08f", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_08g" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_08g", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_08 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT haitianX haitianY haitianZ the_haitian_blip haitian_contact_blip
                //START_NEW_SCRIPT haitian_mission1_loop

              }
              // SCM label mob_08_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }


            /*
            // STEVE TELLS PLAYER ABOUT STUNT MISSION --------------------------------------------------------
            IF flag_mob_10 = 0
            AND flag_porn_mission2_passed = 1
            //RING_PLAYER_PHONE TRUE
            GOSUB mobile_rings
            IF flag_player_answered_phone = 1
            audio_slot_mobile = 1
            LOAD_MISSION_AUDIO audio_slot_mobile MOB_10a
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_10a ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_10b
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_10b ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_10c
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_10c ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_10d
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_10d ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_10e
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_10e ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            CLEAR_PRINTS
            ENDIF
            IF flag_player_answered_phone = 1
            flag_mob_10 = 1
            //ADD_SPRITE_BLIP_FOR_CONTACT_POINT stuntX stuntY stuntZ the_stunt_blip stunt_contact_blip
            //START_NEW_SCRIPT stunt_mission_loop
            ENDIF
            mob_10_plonk:
            GOSUB mobile_message_cleanup
            GOTO cell_phone_inner
            ENDIF
            */


            // AVERY GIVES PLAYER PROPERTY ADVICE -----------------------------------------------------
            if ($.flag_mob_11 == 0 && $.flag_protect_mission1_passed == 1 && $.flag_lawyer_mission4_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_11a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_11a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_11b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_11b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_11c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_11c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_11d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_11d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_11e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_11e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_11f" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_11f", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_11 = 1;
                //LAUNCH_MISSION property.sc

              }
              // SCM label mob_11_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            // PAUL TELLS PLAYER ABOUT SWAT RETIREMENT FUND AT THE BANK -----------------------------------------------------
            if ($.flag_mob_14 == 0 && $.flag_first_asset_complete == 1) {

              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14f" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14f", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14g" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14g", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_14h" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_14h", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_14 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT haitianX haitianY haitianZ the_haitian_blip haitian_contact_blip
                //START_NEW_SCRIPT haitian_mission1_loop

              }
              // SCM label mob_14_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }




            // UMBERTO THANKS PLAYER FOR HELP -----------------------------------------------------
            if ($.flag_mob_30 == 0 && $.flag_cuban_mission4_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_30a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_30a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_30b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_30b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_30c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_30c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_30d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_30d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_30e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_30e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_30f" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_30f", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_30 = 1;
                //LAUNCH_MISSION property.sc

              }
              // SCM label mob_30_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }


            // PHIL INVITES PLAYER OVER (TRIGGER 1st MISSION) ----------------------------------------------
            if ($.flag_mob_34 == 0 && $.flag_bankjob_mission4_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_34a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_34a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_34b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_34b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_34c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_34c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_34d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_34d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_34 = 1;
                $.phil_contact_blip = Blip.AddSpriteForContactPoint($.philX, $.philY, $.philZ, $.the_phil_blip);
                // START_NEW_SCRIPT phil_mission1_loop 
              }
              // SCM label mob_34_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            // PHIL ASKS PLAYER OVER FOR DRINK (TRIGGER 2nd MISSION) ----------------------------------------------
            if ($.flag_mob_33 == 0 && $.flag_phil_mission1_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_33a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_33a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_33b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_33b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_33c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_33c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_33d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_33d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_33 = 1;
                $.phil_contact_blip = Blip.AddSpriteForContactPoint($.philX, $.philY, $.philZ, $.the_phil_blip);
                // START_NEW_SCRIPT phil_mission2_loop 
              }
              // SCM label mob_33_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            /*
            // PHIL THANKS PLAYER ----------------------------------------------
            IF flag_mob_35 = 0
            AND flag_phil_mission2_passed = 1
            //RING_PLAYER_PHONE TRUE
            GOSUB mobile_rings
            IF flag_player_answered_phone = 1
            audio_slot_mobile = 1
            LOAD_MISSION_AUDIO audio_slot_mobile MOB_35a
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_35a ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_35b
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_35b ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_35c
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_35c ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            LOAD_MISSION_AUDIO audio_slot_mobile MOB_35d
            GOSUB loading_and_playing_audio
            PRINT_NOW ( MOB_35d ) 10000 1//rhubarb rhubarb
            GOSUB has_audio_finished

            CLEAR_PRINTS
            ENDIF
            IF flag_player_answered_phone = 1
            flag_mob_35 = 1
            //ADD_SPRITE_BLIP_FOR_CONTACT_POINT philX philY philZ the_phil_blip phils_contact_blip
            //START_NEW_SCRIPT phil_mission2_loop
            ENDIF
            mob_35_plonk:
            GOSUB mobile_message_cleanup
            ENDIF
            */



            // PHIL THANKS PLAYER (VERSION)----------------------------------------------
            if ($.flag_mob_36 == 0 && $.flag_phil_mission2_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_36a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_36a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_36b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_36b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_36c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_36c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_36 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT philX philY philZ the_phil_blip phils_contact_blip
                //START_NEW_SCRIPT phil_mission1_loop

              }
              // SCM label mob_36_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }
            if ($.flag_mob_16 == 0 && $.flag_porn_mission4_passed == 1) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_16a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_16a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_16b" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_16b", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_16c" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_16c", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_16d" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_16d", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_16e" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_16e", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_16f" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_16f", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_16g" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_16g", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_16 = 1;
                //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                //START_NEW_SCRIPT cuban_mission1_loop

              }
              // SCM label mob_16_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }

            // oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
            //     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
            // ----------------------------------------- SONNY/LANCE HASSLES PLAYER ---------------------------------------
            // oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
            //     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo

            if ($.flag_finale_mission2_passed == 1) {
              $.flag_sonny_lance_dead = 1;
            }
            if ($.flag_sonny_lance_dead == 0) {
              // LANCE HASSLES PLAYER (2) -----------------------------------------------------
              if ($.flag_mob_46 == 0 && $.flag_baron_mission4_passed == 1) {
                if (!($.player1.isInZone("STARI"))) {
                  //RING_PLAYER_PHONE TRUE

                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46b" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_b", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46c" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_c", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46d" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_d", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46e" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_e", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46f" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_f", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46g" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_g", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_46h" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB46_h", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_46 = 1;
                    //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                    //START_NEW_SCRIPT cuban_mission1_loop

                  }
                  // SCM label mob_46_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }

              // ********* SONNY WANTING MONEY (1) *************************************************************
              if ($.flag_mob_40 == 0 && $.flag_lawyer_mission3_passed == 1) {
                //RING_PLAYER_PHONE TRUE
                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40c", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40d", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40e" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40e", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40f" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40f", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40g" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40g", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40h" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40h", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_40i" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_40i", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_40 = 1;
                  //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                  //START_NEW_SCRIPT cuban_mission1_loop

                }
                // SCM label mob_40_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }



              // SONNY HASSLES PLAYER FOR HIS MONEY (2) -----------------------------------------------------
              if ($.flag_mob_41 == 0 && $.flag_mob_40 == 1) {
                if ($.flag_baron_mission5_passed == 1) {
                  //OR flag_porn_mission1_passed = 1
                  //RING_PLAYER_PHONE TRUE
                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41b" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41b", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41c" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41c", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41d" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41d", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41e" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41e", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41f" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41f", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41g" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41g", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_41h" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_41h", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_41 = 1;
                    //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                    //START_NEW_SCRIPT cuban_mission1_loop

                  }
                  // SCM label mob_41_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }



              // SONNY HASSLES PLAYER FOR HIS MONEY (3) -----------------------------------------------------
              if ($.flag_mob_42 == 0 && $.flag_mob_41 == 1) {
                if ($.flag_counter_mission1_passed == 1 || $.flag_porn_mission1_passed == 1) {
                  //RING_PLAYER_PHONE TRUE
                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_42a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_42a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_42b" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_42b", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_42c" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_42c", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_42d" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_42d", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_42e" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_42e", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_42 = 1;
                    //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                    //START_NEW_SCRIPT cuban_mission1_loop

                  }
                  // SCM label mob_42_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }



              // LAWYER: SONNY HAS BEEN THREATWENING HIM (4) -----------------------------------------------------
              if ($.flag_mob_43 == 0 && $.flag_mob_42 == 1) {
                if ($.flag_bankjob_mission4_passed == 1 && $.flag_counter_mission2_passed == 1) {
                  //RING_PLAYER_PHONE TRUE
                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43b" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43b", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43c" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43c", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43d" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43d", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43e" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43e", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43f" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43f", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43g" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43g", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_43h" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_43h", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_43 = 1;
                    //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                    //START_NEW_SCRIPT cuban_mission1_loop

                  }
                  // SCM label mob_43_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }

              // oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
              //     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
              // --------------------------------- LANCE HASSLES PLAYER 1 & 2 -----------------------------------------------
              //     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
              // oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo


              if ($.flag_mob_45 == 0 && $.flag_protect_mission2_passed == 1) {
                //RING_PLAYER_PHONE TRUE
                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_c", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_d", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45e" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_e", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45f" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_f", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45g" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_g", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45h" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_h", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45i" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_i", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45j" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_j", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45k" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_k", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45l" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_l", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45m" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_m", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_45n" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB45_n", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_45 = 1;
                  //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                  //START_NEW_SCRIPT cuban_mission1_loop

                }
                // SCM label mob_45_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }


              if ($.flag_mob_72 == 0 && $.flag_protect_mission3_passed == 1) {
                //RING_PLAYER_PHONE TRUE
                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_72a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_72a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_72b" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_72b", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_72c" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_72c", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_72d" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_72d", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_72e" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_72e", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_72f" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_72f", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_72g" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_72g", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_72 = 1;
                  //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                  //START_NEW_SCRIPT cuban_mission1_loop

                }
                // SCM label mob_72_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }


              // LANCE HASSLES PLAYER (3) -----------------------------------------------------
              if ($.flag_mob_47 == 0 && $.flag_finale_mission1_passed == 1) {
                //RING_PLAYER_PHONE TRUE
                await mobile_rings();  // SCM GOSUB mobile_rings
                if ($.flag_player_answered_phone == 1) {
                  $.audio_slot_mobile = 1;
                  Audio.LoadMissionAudio($.audio_slot_mobile, "mob_47a" as any);
                  await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                  Text.PrintNow("MOB_47a", 10000, 1); //rhubarb rhubarb
                  await has_audio_finished();  // SCM GOSUB has_audio_finished
                  Text.ClearPrints();
                }
                if ($.flag_player_answered_phone == 1) {
                  $.flag_mob_47 = 1;
                  $.protect_contact_blip.remove();
                  $.protect_contact_blip = Blip.AddSpriteForContactPoint(-378.3, -579.8, 24.5, $.the_protection_blip);
                  // START_NEW_SCRIPT finale_mission2_loop 
                }
                // SCM label mob_47_plonk
                await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
              }


            }
            else {
              if ($.flag_mob_63 == 0 && $.player1.isPlaying()) {
                if ($.player1.isInZone("HAVANA")) {
                  //RING_PLAYER_PHONE TRUE
                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63b" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63b", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63c" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63c", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63d" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63d", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63e" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63e", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63f" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63f", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63g" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63g", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63h" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63h", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63i" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63i", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_63j" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_63j", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_63 = 1;
                    $.call_delay = 60000;
                    //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                    //START_NEW_SCRIPT cuban_mission1_loop

                  }
                  // SCM label mob_63_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }
              if ($.flag_mob_17 == 0 && $.player1.isPlaying()) {
                if ($.player1.isInZone("STARI")) {
                  //RING_PLAYER_PHONE TRUE
                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17b" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17b", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17c" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17c", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17d" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17d", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17e" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17f", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    /*
                    LOAD_MISSION_AUDIO audio_slot_mobile MOB_17f
                    GOSUB loading_and_playing_audio
                    PRINT_NOW ( MOB_17f ) 10000 1//rhubarb rhubarb
                    GOSUB has_audio_finished
                    */
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17g" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17g", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17h" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17h", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17i" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17i", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17j" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17j", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17k" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17k", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_17l" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_17l", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_17 = 1;
                    //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                    //START_NEW_SCRIPT cuban_mission1_loop

                  }
                  // SCM label mob_17_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }
              if ($.flag_mob_73 == 0 && $.player1.isPlaying()) {
                if ($.player1.isInZone("PORNI")) {
                  //RING_PLAYER_PHONE TRUE
                  await mobile_rings();  // SCM GOSUB mobile_rings
                  if ($.flag_player_answered_phone == 1) {
                    $.audio_slot_mobile = 1;
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_73a" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_73a", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_73c" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_73c", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_73d" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_73d", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_73f" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_73f", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_73g" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_73g", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Audio.LoadMissionAudio($.audio_slot_mobile, "mob_73i" as any);
                    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                    Text.PrintNow("MOB_73i", 10000, 1); //rhubarb rhubarb
                    await has_audio_finished();  // SCM GOSUB has_audio_finished
                    Text.ClearPrints();
                  }
                  if ($.flag_player_answered_phone == 1) {
                    $.flag_mob_73 = 1;
                    //ADD_SPRITE_BLIP_FOR_CONTACT_POINT cubanX cubanY cubanZ the_cuban_blip cuban_contact_blip
                    //START_NEW_SCRIPT cuban_mission1_loop

                  }
                  // SCM label mob_73_plonk
                  await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
                  // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
                  throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
                }
              }
            }

            // oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
            //     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
            // oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
            //     oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo
            // oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo    oooo


            // ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS -------
            // ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS -------
            // ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS -------
            // ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS -------
            // ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS -------
            // ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS ------- ASSASSIN MISSIONS -------

            if ($.flag_lawyer_mission3_passed == 1 && $.flag_mob_99 == 0) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_99a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_99a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_99 = 1;
                $.assasin_contact_blip.remove();
                $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_1_x, $.ass_1_Y, $.ass_1_Z, $.the_assasin_blip);
                // START_NEW_SCRIPT assin_mission1_loop 
              }
              // SCM label mob_99_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }



            if ($.flag_general_mission2_passed == 1 && $.flag_assin_mission1_passed == 1 && $.flag_mob_99 == 1 && $.flag_mob_98 == 0) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_98a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_98a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_98 = 1;
                $.assasin_contact_blip.remove();
                $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_2_x, $.ass_2_Y, $.ass_2_Z, $.the_assasin_blip);
                // START_NEW_SCRIPT assin_mission2_loop 
              }
              // SCM label mob_98_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }


            if ($.flag_baron_mission3_passed == 1 && $.flag_assin_mission2_passed == 1 && $.flag_mob_98 == 1 && $.flag_mob_97 == 0) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_99a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_99a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_97 = 1;
                $.assasin_contact_blip.remove();
                $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_3_x, $.ass_3_Y, $.ass_3_Z, $.the_assasin_blip);
                // START_NEW_SCRIPT assin_mission3_loop 
              }
              // SCM label mob_97_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }


            if ($.flag_protect_mission1_passed == 1 && $.flag_assin_mission3_passed == 1 && $.flag_mob_97 == 1 && $.flag_mob_96 == 0) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_96a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_96a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_96 = 1;
                $.assasin_contact_blip.remove();
                $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_4_x, $.ass_4_Y, $.ass_4_Z, $.the_assasin_blip);
                // START_NEW_SCRIPT assin_mission4_loop 
              }
              // SCM label mob_96_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }


            if ($.flag_bankjob_mission2_passed == 1 && $.flag_assin_mission4_passed == 1 && $.flag_mob_96 == 1 && $.flag_mob_95 == 0) {
              //RING_PLAYER_PHONE TRUE
              await mobile_rings();  // SCM GOSUB mobile_rings
              if ($.flag_player_answered_phone == 1) {
                $.audio_slot_mobile = 1;
                Audio.LoadMissionAudio($.audio_slot_mobile, "mob_95a" as any);
                await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
                Text.PrintNow("MOB_95a", 10000, 1); //rhubarb rhubarb
                await has_audio_finished();  // SCM GOSUB has_audio_finished
                Text.ClearPrints();
              }
              if ($.flag_player_answered_phone == 1) {
                $.flag_mob_95 = 1;
                $.assasin_contact_blip.remove();
                $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_5_x, $.ass_5_Y, $.ass_5_Z, $.the_assasin_blip);
                // START_NEW_SCRIPT assin_mission5_loop 
              }
              // SCM label mob_95_plonk
              await mobile_message_cleanup();  // SCM GOSUB mobile_message_cleanup
              // SCM GOTO → cell_phone_inner (not lowered; manual jump required)
              throw new Error("unresolved GOTO cell_phone_inner"); // fallback: would break linear control flow
            }

            /*


            // RANDOM CALLS TO LEO'S PHONE ------------------------------------------------------------------

            GENERATE_RANDOM_INT_IN_RANGE MinInt MaxInt random_cell
            IF random_cell = 1
            AND flag_mob_50 = 0
            GOSUB mobile_timer
            IF timer_mobile_diff > 60000
            //RING_PLAYER_PHONE TRUE
            GET_GAME_TIMER timer_mobile_start
            GOSUB mobile_ringing
            IF flag_player_answered_phone = 2
            GOTO mob_01_plonk
            ENDIF
            GOSUB answer_mobile
            //flag_timer_started = 0
            GOSUB start_mobile_message
            LOAD_MISSION_AUDIO YD2_A
            //LOAD_MISSION_AUDIO MOB_01
            GOSUB loading_and_playing_audio
            PRINT_NOW ( RHUBARB ) 10000 1//rhubarb rhubarb
            GOSUB playing_conversation
            flag_mob_01 = 1
            mob_01_plonk:
            GOSUB mobile_message_cleanup
            ENDIF
            ENDIF
            */

          }
        }
      }
      else {
        $.flag_cell_nation = 0;
      }
    }


  }
}








async function mobile_timer() {
  $.timer_mobile_now = Clock.GetGameTimer();
  $.timer_mobile_diff = $.timer_mobile_now - $.timer_mobile_start;
}





async function mobile_rings() {
  $.audio_slot_mobile = 1;
  $.ring_a_ding_ding = 0;


  Text.PrintHelpForever("ANSWER");
  ONMISSION = 1;
  $.flag_cell_nation = 1;
  while ($.ring_a_ding_ding < 7 && $.flag_player_answered_phone < 2) {
    await asyncWait(0);
    Audio.LoadMissionAudio($.audio_slot_mobile, "mobring" as any);
    await loading_and_playing_audio();  // SCM GOSUB loading_and_playing_audio
    ++$.ring_a_ding_ding;
    if ($.flag_player_answered_phone == 1 && $.ring_a_ding_ding > 0) {
      // SCM GOTO → imploding_head (not lowered; manual jump required)
      throw new Error("unresolved GOTO imploding_head"); // fallback: would break linear control flow
    }
    await has_audio_finished();  // SCM GOSUB has_audio_finished
    if ($.flag_player_answered_phone == 1 && $.ring_a_ding_ding > 0) {
      // SCM GOTO → imploding_head (not lowered; manual jump required)
      throw new Error("unresolved GOTO imploding_head"); // fallback: would break linear control flow
    }
    $.mobile_pause = 0;
    while ($.mobile_pause < 40) {
      await asyncWait(0);
      await death_checker();  // SCM GOSUB death_checker
      if ($.flag_player_answered_phone == 1) {
        // SCM GOTO → imploding_head (not lowered; manual jump required)
        throw new Error("unresolved GOTO imploding_head"); // fallback: would break linear control flow
      }
      ++$.mobile_pause;
    }
  }
  $.timer_mobile_start = Clock.GetGameTimer();
}

async function imploding_head() {

  //	IF IS_PLAYER_PLAYING player1
  //		SET_PLAYER_CONTROL player1 OFF
  //	ENDIF

  $.timer_mobile_start = Clock.GetGameTimer();
  while (Pad.IsButtonPressed(0 /* PAD1 */, 4 /* LEFTSHOULDER1 */)) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.flag_player_answered_phone = 2;
      return;
    }
  }
  Text.ClearHelp();
  Audio.ClearMissionAudio($.audio_slot_mobile);
  if ($.player1.isPlaying()) {
    //SET_PLAYER_CONTROL player1 OFF
    Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
    $.player1.shutUp(true /* TRUE */);
    Streaming.RequestModel(cellphone);
    while (!(Streaming.HasModelLoaded(cellphone))) {
      await asyncWait(0);
    }
    await death_checker();  // SCM GOSUB death_checker
    if ($.flag_player_answered_phone == 2) {
      Streaming.MarkModelAsNoLongerNeeded(cellphone);
      return;
    }
    $.scplayer.setAnsweringMobile(true /* TRUE */);
    //		IF IS_PLAYER_PLAYING player1
    //			SET_PLAYER_CONTROL player1 ON
    //		ENDIF
    TIMERA = 0;
    while (TIMERA < 1000) {
      await asyncWait(0);
      if (!($.player1.isPlaying())) {
        $.flag_player_answered_phone = 2;
        return;
      }
    }
    //GET_PLAYER_CHAR player1 scplayer
    //SET_CHAR_WAIT_STATE scplayer WAITSTATE_TRAFFIC_LIGHTS 10000

  }
}






async function loading_and_playing_audio() {
  while (!(Audio.HasMissionAudioLoaded($.audio_slot_mobile))) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.flag_player_answered_phone = 2;
      return;
    }
    else {
      //GOSUB pickup_checker
      if ($.scplayer.isDrowningInWater() || !($.scplayer.isOnFoot())) {
        //OR flag_player_on_mission = 1
        $.flag_player_answered_phone = 2;
        return;
      }
      if ($.flag_player_answered_phone == 0 && $.ring_a_ding_ding > 0) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 4 /* LEFTSHOULDER1 */) && $.player1.canStartMission()) {
          $.flag_player_answered_phone = 1;
          return;
        }
      }
    }
  }
  Audio.PlayMissionAudio($.audio_slot_mobile);
}





async function has_audio_finished() {
  while (!(Audio.HasMissionAudioFinished($.audio_slot_mobile))) {
    await asyncWait(0);
    if (!($.player1.isPlaying())) {
      $.flag_player_answered_phone = 2;
      return;
    }
    else {
      //GOSUB pickup_checker
      if ($.scplayer.isDrowningInWater() || !($.scplayer.isOnFoot())) {
        //OR flag_player_on_mission = 1
        $.flag_player_answered_phone = 2;
        return;
      }
      if ($.flag_player_answered_phone == 0 && $.ring_a_ding_ding > 0) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 4 /* LEFTSHOULDER1 */) && $.player1.canStartMission()) {
          $.flag_player_answered_phone = 1;
          return;
        }
      }
    }
  }
}





async function death_checker() {
  if (!($.player1.isPlaying())) {
    $.flag_player_answered_phone = 2;
    return;
  }
  else {
    //GOSUB pickup_checker
    if ($.scplayer.isDrowningInWater() || !($.scplayer.isOnFoot())) {
      //OR flag_player_on_mission = 1
      $.flag_player_answered_phone = 2;
      return;
    }
    if ($.flag_player_answered_phone == 0 && $.ring_a_ding_ding > 0) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 4 /* LEFTSHOULDER1 */) && $.player1.canStartMission()) {
        $.flag_player_answered_phone = 1;
        return;
      }
    }
  }
}







async function mobile_message_cleanup() {
  $.flag_cell_nation = 0;
  //RING_PLAYER_PHONE FALSE

  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  $.flag_player_answered_phone = 0;
  //flag_mobile_dialogue = 0

  $.flag_mobile_timer = 0;
  if ($.player1.isPlaying()) {
    $.scplayer.setAnsweringMobile(false /* FALSE */);
    $.player1.setControl(true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
    //SET_CHAR_WAIT_STATE scplayer WAITSTATE_FALSE 0
    $.player1.shutUp(false /* FALSE */);
  }
  $.timer_mobile_start = Clock.GetGameTimer();
  $.timer_mobile_diff = 0;
  await mobile_timer();  // SCM GOSUB mobile_timer
  Text.ClearPrints();
  if ($.flag_new_cont == 0) {
    Text.ClearHelp();
  }
  else {
    $.flag_new_cont = 0;
  }
  Streaming.MarkModelAsNoLongerNeeded(cellphone);
  ONMISSION = 0;
}

export async function mobile() {
  // MissionBoundary


  // VAR_INT flag_mob_01
  // VAR_INT flag_mob_02
  //VAR_INT	flag_mob_03

  // VAR_INT flag_mob_04
  // VAR_INT flag_mob_05
  // VAR_INT flag_mob_06
  //VAR_INT	flag_mob_07

  // VAR_INT flag_mob_08
  // VAR_INT flag_mob_09
  //VAR_INT	flag_mob_10

  // VAR_INT flag_mob_11
  //VAR_INT	flag_mob_12
  //VAR_INT	flag_mob_13

  // VAR_INT flag_mob_14
  //VAR_INT	flag_mob_15

  // VAR_INT flag_mob_16
  // VAR_INT flag_mob_17
  // VAR_INT flag_mob_18
  //VAR_INT	flag_mob_19

  // VAR_INT flag_mob_20
  // VAR_INT flag_mob_24
  // VAR_INT flag_mob_25
  // VAR_INT flag_mob_26
  //VAR_INT	flag_mob_29

  // VAR_INT flag_mob_30
  // VAR_INT flag_mob_33
  // VAR_INT flag_mob_34
  //VAR_INT	flag_mob_35

  // VAR_INT flag_mob_36
  // VAR_INT flag_mob_40
  // VAR_INT flag_mob_41
  // VAR_INT flag_mob_42
  // VAR_INT flag_mob_43
  // VAR_INT flag_mob_45
  // VAR_INT flag_mob_46
  // VAR_INT flag_mob_47
  // VAR_INT flag_mob_52
  //VAR_INT	flag_mob_54
  //VAR_INT	flag_mob_55
  //VAR_INT	flag_mob_56
  //VAR_INT	flag_mob_57
  //VAR_INT	flag_mob_58

  // VAR_INT flag_mob_62
  // VAR_INT flag_mob_63
  // VAR_INT flag_mob_66
  // VAR_INT flag_mob_68
  // VAR_INT flag_mob_70
  // VAR_INT flag_mob_71
  // VAR_INT flag_mob_72
  // VAR_INT flag_mob_73
  //VAR_INT	flag_mob_90
  //VAR_INT	flag_mob_91
  //VAR_INT	flag_mob_92
  //VAR_INT	flag_mob_93
  //VAR_INT	flag_mob_94

  // VAR_INT flag_mob_95
  // VAR_INT flag_mob_96
  // VAR_INT flag_mob_97
  // VAR_INT flag_mob_98
  // VAR_INT flag_mob_99


  // VAR_INT flag_sonny_lance_dead
  // VAR_INT flag_diaz_dead
  // VAR_INT flag_colonel_left_town


  // VAR_INT ring_a_ding_ding mobile_pause


  // VAR_INT counter_60_percent flag_caryard_purchased
  //VAR_INT flag_first_asset_complete

  // VAR_INT audio_slot_mobile

  //VAR_INT timer_mobile_start timer_mobile_now timer_mobile_diff

  // VAR_INT flag_mobile_timer flag_player_answered_phone
  // VAR_INT flag_cell_nation
  // VAR_INT flag_new_cont
  // VAR_INT call_delay

  //VAR_FLOAT player_heading

  // SET FLAGS AND VARIABLES

  $.flag_mob_01 = 0;
  $.flag_mob_02 = 0;
  //flag_mob_03	= 0

  $.flag_mob_04 = 0;
  $.flag_mob_05 = 0;
  $.flag_mob_06 = 0;
  //flag_mob_07	= 0

  $.flag_mob_08 = 0;
  $.flag_mob_09 = 0;
  //flag_mob_10	= 0

  $.flag_mob_11 = 0;
  //flag_mob_12	= 0
  //flag_mob_13	= 0

  $.flag_mob_14 = 0;
  //flag_mob_15	= 0

  $.flag_mob_16 = 0;
  $.flag_mob_17 = 0;
  $.flag_mob_18 = 0;
  //flag_mob_19	= 0

  $.flag_mob_20 = 0;
  $.flag_mob_24 = 0;
  $.flag_mob_25 = 0;
  $.flag_mob_26 = 0;
  //flag_mob_29 = 0

  $.flag_mob_30 = 0;
  $.flag_mob_33 = 0;
  $.flag_mob_34 = 0;
  //flag_mob_35 = 0

  $.flag_mob_36 = 0;
  $.flag_mob_40 = 0;
  $.flag_mob_41 = 0;
  $.flag_mob_42 = 0;
  $.flag_mob_43 = 0;
  $.flag_mob_45 = 0;
  $.flag_mob_46 = 0;
  $.flag_mob_47 = 0;
  $.flag_mob_52 = 0;
  //flag_mob_54	= 0
  //flag_mob_55	= 0
  //flag_mob_56	= 0
  //flag_mob_57	= 0
  //flag_mob_58	= 0

  $.flag_mob_62 = 0;
  $.flag_mob_63 = 0;
  $.flag_mob_66 = 0;
  $.flag_mob_68 = 0;
  $.flag_mob_70 = 0;
  $.flag_mob_71 = 0;
  $.flag_mob_72 = 0;
  $.flag_mob_73 = 0;
  //flag_mob_90	= 0
  //flag_mob_91	= 0
  //flag_mob_92	= 0
  //flag_mob_93	= 0
  //flag_mob_94	= 0

  $.flag_mob_95 = 0;
  $.flag_mob_96 = 0;
  $.flag_mob_97 = 0;
  $.flag_mob_98 = 0;
  $.flag_mob_99 = 0;


  $.flag_new_cont = 0;


  $.counter_60_percent = 0;
  $.flag_caryard_purchased = 0;


  $.flag_first_asset_complete = 0;
  //flag_mobile_dialogue = 0

  $.flag_mobile_timer = 0;
  $.flag_player_answered_phone = 0;


  $.flag_sonny_lance_dead = 0;
  $.flag_diaz_dead = 0;
  $.flag_colonel_left_town = 0;


  $.flag_cell_nation = 0;


  $.call_delay = 20000;


  // SCRIPT_NAME CELLFON


  // SET_DEATHARREST_STATE(false /* OFF */); //stops script being terminated if Player dies/arrested



}
