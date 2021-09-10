	function choiseMajor(){
				var rnd_num = Math.floor(Math.random() * (22));
				var position = Math.floor(Math.random() * (2));
				var rnd_name;
				var rnd_intro;
				var rnd_img;
				if(rnd_num == 0){
					rnd_num = "0";
					if(position == 0){
						rnd_name = "THE FOOL（Upright）";
						rnd_intro = "Innocent, Adventurer, Free, Optimistic, Starting";
						/* rnd_img = "img/the_fool.jpg"; */
					}else{
						rnd_name = "THE FOOL（Reverse）";
						rnd_intro = "Reverie, Folly, Unplanned, Reckless, Escapism";
					}
				}else if(rnd_num == 1){
					rnd_num = "I";
					if(position == 0){
						rnd_name = "THE MAGICIAN（Upright）";
						rnd_intro = "Create, Confidence, Technique, Talent, Ability";
					}else{
						rnd_name = "THE MAGICIAN（Reverse）";
						rnd_intro = "Confusion, Immature, Reluctant, Loss of self-confidence, Frustration";
					}
				}else if(rnd_num == 2){
					rnd_num = "II";
					if(position == 0){
						rnd_name = "THE HIGH PRIESTESS（Upright）";
						rnd_intro = "Intelligence, Sagacity, Mysteries, Judgement, Calm decision";
					}else{
						rnd_name = "THE HIGH PRIESTESS（Reverse）";
						rnd_intro = "Criticism, Pessimism, Cool-headedness, Disregard, Insensitive";
					}
				}else if(rnd_num == 3){
					rnd_num = "III";
					if(position == 0){
						rnd_name = "THE EMPRESS（Upright）";
						rnd_intro = "Fertility, Satisfaction, Tolerance, Love";
					}else{
						rnd_name = "THE EMPRESS（Reverse）";
						rnd_intro = "Jealousy, Indulgence, Waste, Emotional, Lazy";
					}
				}else if(rnd_num == 4){
					rnd_num = "IV";
					if(position == 0){
						rnd_name = "THE EMPEROR（Upright）";
						rnd_intro = "Control, Authority, Stable, Success, Efforts pay off";
					}else{
						rnd_name = "THE EMPEROR（Reverse）";
						rnd_intro = "Overconfidence, Indulgence, Arbitrary, Selfish, Isolation";
					}
				}else if(rnd_num == 5){
					rnd_num = "V";
					if(position == 0){
						rnd_name = "THE HIEROPHANT（Upright）";
						rnd_intro = "Mercy, Kindness, Compliance with the law, Respect, Human virtue judgement";
					}else{
						rnd_name = "THE HIEROPHANT（Reverse）";
						rnd_intro = "Conservative, Restraint, Sense of distrust, Stubborn, Vanity";
					}
				}else if(rnd_num == 6){
					rnd_num = "VI";
					if(position == 0){
						rnd_name = "THE LOVERS（Upright）";
						rnd_intro = "Love, Passion, Marriage, Harmony, Merriment";
					}else{
						rnd_name = "THE LOVERS（Reverse）";
						rnd_intro = "Temptation, Immorality, Bankruptcy, Unfaithful";
					}
				}else if(rnd_num == 7){
					rnd_num = "VII";
					if(position == 0){
						rnd_name = "THE CHARIOT（Upright）";
						rnd_intro = "Execution power, Strong intention, Quick, Victory by rushing";
					}else{
						rnd_name = "THE CHARIOT（Reverse）";
						rnd_intro = "Lethargy, Leave it to others, Failure, Not trying to act";
					}
				}else if(rnd_num == 8){
					rnd_num = "VIII";
					if(position == 0){
						rnd_name = "STRENGTH（Upright）";
						rnd_intro = "Strong intention, Self-control, Indomitable, reason, Control instinct";
					}else{
						rnd_name = "STRENGTH（Reverse）";
						rnd_intro = "No power, Lack of power, Give up, Shilly-shally";
					}
				}else if(rnd_num == 9){
					rnd_num = "IX";
					if(position == 0){
						rnd_name = "THE HERMIT（Upright）";
						rnd_intro = "Spirituality, Introspection, Comprehension, Thoughtful, Identify";
					}else{
						rnd_name = "THE HERMIT（Reverse）";
						rnd_intro = "Negative, Conservative, Closed, Cage, Break the relationship";
					}
				}else if(rnd_num == 10){
					rnd_num = "X";
					if(position == 0){
						rnd_name = "WHEEL OF FORTUNE（Upright）";
						rnd_intro = "Temporary luck, Change, Distiny, Encounter";
					}else{
						rnd_name = "WHEEL OF FORTUNE（Reverse）";
						rnd_intro = "accident, Rapid deterioration, Passing";
					}
				}else if(rnd_num == 11){
					rnd_num = "XI";
					if(position == 0){
						rnd_name = "JUSTICE（Upright）";
						rnd_intro = "Fair judgement, Equilibrium, Justice, Fair, Continue";
					}else{
						rnd_name = "JUSTICE（Reverse）";
						rnd_intro = "Fault, Unjustice, Out of balance, Unfair, Judgment goes down";
					}
				}else if(rnd_num == 12){
					rnd_num = "XII";
					if(position == 0){
						rnd_name = "THE HANGED MAN（Upright）";
						rnd_intro = "Trial, Training, Effort, The hard work will be rewarded";
					}else{
						rnd_name = "THE HANGED MAN（Reverse）";
						rnd_intro = "Not rewarded the hard work, waste, No results";
					}
				}else if(rnd_num == 13){
					rnd_num = "XIII";
					if(position == 0){
						rnd_name = "DEATH（Upright）";
						rnd_intro = "Forced termination, Stop, Catastrophe, Finish";
					}else{
						rnd_name = "DEATH（Reverse）";
						rnd_intro = "Reborn, Restart, Revival of the dead, New development";
					}
				}else if(rnd_num == 14){
					rnd_num = "XIV";
					if(position == 0){
						rnd_name = "TEMPERANCE（Upright）";
						rnd_intro = "Circulation, Good, Harmony, Control, Get ready";
					}else{
						rnd_name = "TEMPERANCE（Reverse）";
						rnd_intro = "Waste, Stagnation, Unbalance, Inertia, Corruption";
					}
				}else if(rnd_num == 15){
					rnd_num = "XV";
					if(position == 0){
						rnd_name = "THE DEVIL（Upright）";
						rnd_intro = "Temptation, Corruption, Betrayal, Break, Reliance";
					}else{
						rnd_name = "THE DEVIL（Reverse）";
						rnd_intro = "Release, reproduction, Let go of attachment, Release from binding";
					}
				}else if(rnd_num == 16){
					rnd_num = "XVI";
					if(position == 0){
						rnd_name = "THE TOWER（Upright）";
						rnd_intro = "Disaster, Misfortune, Accident, Break";
					}else{
						rnd_name = "THE TOWER（Reverse）";
						rnd_intro = "Disgrace, Tension, Continue anxiety";
					}
				}else if(rnd_num == 17){
					rnd_num = "XVII";
					if(position == 0){
						rnd_name = "THE STAR（Upright）";
						rnd_intro = "Intuition, Inspiration, Hope, Goal";
					}else{
						rnd_name = "THE STAR（Reverse）";
						rnd_intro = "Disappointment, Unreasonably ambitious, Lethargy, Discouragement";
					}
				}else if(rnd_num == 18){
					rnd_num = "XVIII";
					if(position == 0){
						rnd_name = "THE MOON（Upright）";
						rnd_intro = "Anxiety, Melancholy, Half-way, Stress";
					}else{
						rnd_name = "THE MOON（Reverse）";
						rnd_intro = "Break away, Clarity, Elimination of trauma, recovery";
					}
				}else if(rnd_num == 19){
					rnd_num = "XIX";
					if(position == 0){
						rnd_name = "THE SUN（Upright）";
						rnd_intro = "Innocence, Pleasure, Glory";
					}else{
						rnd_name = "THE SUN（Reverse）";
						rnd_intro = "Not good, Discouragement, Fall, Deterioration";
					}
				}else if(rnd_num == 20){
					rnd_num = "XX";
					if(position == 0){
						rnd_name = "JUDGEMENT（Upright）";
						rnd_intro = "Reborn, Blessing, reproduction, Recharenge";
					}else{
						rnd_name = "JUDGEMENT（Reverse）";
						rnd_intro = "Alert, Crime, Remove, Atonement for sin";
					}
				}else if(rnd_num == 21){
					rnd_num = "XXI";
					if(position == 0){
						rnd_name = "THE WORLD（Upright）";
						rnd_intro = "Complete, Utopia, Clear, Satisfaction";
					}else{
						rnd_name = "THE WORLD（Reverse）";
						rnd_intro = "Uncomplete, Inertia, Unsatisfactory, Stagnation";
					}
				}
				$('.major_card_num').text(rnd_num);
				$('.major_card_name').text(rnd_name);
				$('.major_card_intro').text(rnd_intro);
				/* $('.major_card_img').attr('src', rnd_img); */
				$('.major_card_area').css('display','block');
}

	function choiseMinor(){
				var rnd_num = Math.floor(Math.random() * (10));
				var suits = Math.floor(Math.random() * (4));
				var rnd_suits;
				var rnd_intro;
				var rnd_img;
				if(rnd_num == 0){
					if(suits == 0){
						rnd_suits = "Wands 1";
						rnd_intro = "Create power, Start point";
					}else if(suits == 1){
						rnd_suits = "Cups 1";
						rnd_intro = "Pleasure, Full";
					}else if(suits == 2){
						rnd_suits = "Sword 1";
						rnd_intro = "Win by power, big power by love and hatred";
					}else if(suits == 3){
						rnd_suits = "Coins 1";
						rnd_intro = "Perfect fullness, money";
					}
				}else if(rnd_num == 1){
					if(suits == 0){
						rnd_suits = "Wands 2";
						rnd_intro = "Property, Majesty, Owner";
					}else if(suits == 1){
						rnd_suits = "Cups 2";
						rnd_intro = "Love, Friendship, Match";
					}else if(suits == 2){
						rnd_suits = "Sword 2";
						rnd_intro = "Balance, Conditional harmony";
					}else if(suits == 3){
						rnd_suits = "Coins 2";
						rnd_intro = "News by document, Cheerfulness";
					}
				}else if(rnd_num == 2){
					if(suits == 0){
						rnd_suits = "Wands 3";
						rnd_intro = "Established power, Business cooperation";
					}else if(suits == 1){
						rnd_suits = "Cups 3";
						rnd_intro = "Happy, Fulfillment, Healing";
					}else if(suits == 2){
						rnd_suits = "Sword 3";
						rnd_intro = "Abolition, Severance, Sadness";
					}else if(suits == 3){
						rnd_suits = "Coins 3";
						rnd_intro = "Technic, Deal";
					}
				}else if(rnd_num == 3){
					if(suits == 0){
						rnd_suits = "Wands 4";
						rnd_intro = "Perfect work, Resting, Peace";
					}else if(suits == 1){
						rnd_suits = "Cups 4";
						rnd_intro = "Idle, Eating, Mixed pleasure";
					}else if(suits == 2){
						rnd_suits = "Sword 4";
						rnd_intro = "Hidden, Reverse, Tomb";
					}else if(suits == 3){
						rnd_suits = "Coins 4";
						rnd_intro = "Present, Tenasity, Guarantee of ownership";
					}
				}else if(rnd_num == 4){
					if(suits == 0){
						rnd_suits = "Wands 5";
						rnd_intro = "Hard race, Sports";
					}else if(suits == 1){
						rnd_suits = "Cups 5";
						rnd_intro = "Loss, Negative regacy";
					}else if(suits == 2){
						rnd_suits = "Sword 5";
						rnd_intro = "Abolition, Loss, Corruption";
					}else if(suits == 3){
						rnd_suits = "Coins 5";
						rnd_intro = "Material trouble";
					}
				}else if(rnd_num == 5){
					if(suits == 0){
						rnd_suits = "Wands 6";
						rnd_intro = "Winner, Reach big news";
					}else if(suits == 1){
						rnd_suits = "Cups 6";
						rnd_intro = "Happy, Pleasure, Reverse past";
					}else if(suits == 2){
						rnd_suits = "Sword 6";
						rnd_intro = "Doing your best, Best answer, Mediator";
					}else if(suits == 3){
						rnd_suits = "Coins 6";
						rnd_intro = "Merit, Family, Property";
					}
				}else if(rnd_num == 6){
					if(suits == 0){
						rnd_suits = "Wands 7";
						rnd_intro = "Disscussion, Negotiation, Courage";
					}else if(suits == 1){
						rnd_suits = "Cups 4";
						rnd_intro = "Small good things, No continue, Phantom";
					}else if(suits == 2){
						rnd_suits = "Sword 7";
						rnd_intro = "Restrainted power, Bad news";
					}else if(suits == 3){
						rnd_suits = "Coins 7";
						rnd_intro = "Prepare, Craftsmanship";
					}
				}else if(rnd_num == 7){
					if(suits == 0){
						rnd_suits = "Wands 8";
						rnd_intro = "Activity, Speed";
					}else if(suits == 1){
						rnd_suits = "Cups 8";
						rnd_intro = "Abandoned success, Humility";
					}else if(suits == 2){
						rnd_suits = "Sword 8";
						rnd_intro = "Disappointment, Disillusionment";
					}else if(suits == 3){
						rnd_suits = "Coins 8";
						rnd_intro = "Material wealth, Goal";
					}
				}else if(rnd_num == 8){
					if(suits == 0){
						rnd_suits = "Wands 9";
						rnd_intro = "Strength of restrainted situation";
					}else if(suits == 1){
						rnd_suits = "Cups 9";
						rnd_intro = "Material peace of mind";
					}else if(suits == 2){
						rnd_suits = "Sword 9";
						rnd_intro = "Sissappointment, Disillusionment";
					}else if(suits == 3){
						rnd_suits = "Coins 9";
						rnd_intro = "Material wealth, Goal";
					}
				}else if(rnd_num == 9){
					if(suits == 0){
						rnd_suits = "Wands 10";
						rnd_intro = "Restraint, Too much property";
					}else if(suits == 1){
						rnd_suits = "Cups 10";
						rnd_intro = "Full, Perfect Love and friendship";
					}else if(suits == 2){
						rnd_suits = "Sword 10";
						rnd_intro = "Devastation, Pain";
					}else if(suits == 3){
						rnd_suits = "Coins 10";
						rnd_intro = "Merit, Wealth, Family";
					}
				}else if(rnd_num == 10){
					if(suits == 0){
						rnd_suits = "Wands Page";
						rnd_intro = "Young man, Post, Diplomacy";
					}else if(suits == 1){
						rnd_suits = "Cups Page";
						rnd_intro = "Young study very hard, Contemplation";
					}else if(suits == 2){
						rnd_suits = "Sword Page";
						rnd_intro = "Surveillance, Alert, Spy";
					}else if(suits == 3){
						rnd_suits = "Coins Page";
						rnd_intro = "Study very hard, Students";
					}
				}else if(rnd_num == 11){
					if(suits == 0){
						rnd_suits = "Wands Knight";
						rnd_intro = "Start, Approachable, Young";
					}else if(suits == 1){
						rnd_suits = "Cups Knight";
						rnd_intro = "Goal, Developpment, Idea";
					}else if(suits == 2){
						rnd_suits = "Sword Knight";
						rnd_intro = "Courage, Anger";
					}else if(suits == 3){
						rnd_suits = "Coins Knight";
						rnd_intro = "Wealth, Usehul, Responsibility";
					}
				}else if(rnd_num == 12){
					if(suits == 0){
						rnd_suits = "Wands Queen";
						rnd_intro = "Country woman, Approachable, Respectable";
					}else if(suits == 1){
						rnd_suits = "Cups Queen";
						rnd_intro = "Fairness woman, Happy";
					}else if(suits == 2){
						rnd_suits = "Sword Queen";
						rnd_intro = "Chaste women, Widow, Loss";
					}else if(suits == 3){
						rnd_suits = "Coins Queen";
						rnd_intro = "Wealth, Safe, Generous";
					}
				}else if(rnd_num == 13){
					if(suits == 0){
						rnd_suits = "Wands King";
						rnd_intro = "Country man, Honestry";
					}else if(suits == 1){
						rnd_suits = "Cups King";
						rnd_intro = "Fairness man, Creative intelligence";
					}else if(suits == 2){
						rnd_suits = "Sword King";
						rnd_intro = "Justice, Order, Judge";
					}else if(suits == 3){
						rnd_suits = "Coins King";
						rnd_intro = "Business, Reality intelligence, Success";
					}
				}
				$('.minor_card_suits').text(rnd_suits);
				$('.minor_card_intro').text(rnd_intro);
				$('.minor_card_area').css('display','block');
}
