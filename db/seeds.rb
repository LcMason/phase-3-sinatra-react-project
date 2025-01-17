puts "🌱 Seeding spices..."

# Seed your database here

gangster_film_1 = GangsterFilm.create(title: "Sugar Hill, 1993", genre: "Crime/Drama", director: "Leon Ichaso", description: "A drug dealer tries to get out of the life and start anew with his girlfriend, but the transition is tragically difficult.")
gangster_film_2 = GangsterFilm.create(title: "Belly, 1998", genre: "Crime/Drama", director: "Hype Williams", description: "Two young friends involved in organized crime and drug dealing find that their priorities differ")
gangster_film_3 = GangsterFilm.create(title: "The Departed, 2006", genre: "Crime/Drama", director: "Martin Scorsese", description: "two men trying to live public lives that are the radical opposites of their inner realities. Their attempts threaten to destroy them, either by implosion or fatal betrayal. The telling of their stories involves a moral labyrinth, in which good and evil wear each other's masks.")
gangster_film_4 = GangsterFilm.create(title: "A Bronx Tale, 1993", genre: "Crime/Drama", director: "Robert De Niro", description: "Set in the Bronx during the tumultuous 1960s, an adolescent boy is torn between his honest, working-class father and a violent yet charismatic crime boss.")
gangster_film_5 = GangsterFilm.create(title: "Mennace II Society, 1993", genre: "Crime/Drama", director: "Allen Hughes and ALbert Hughes", description: "After growing up in the gang lifestyle of the Los Angeles projects, 18-year-old Caine Lawson (Tyrin Turner) wants a way out. Everyone around him, including his unpredictable friend O-Dog (Larenz Tate), is trapped in their lives of crime and violence.")
gangster_film_6 = GangsterFilm.create(title: "American Gangster, 2007", genre: "Crime/Drama", director: "Ridley Scott", description: "Following the death of his employer and mentor, Bumpy Johnson, Frank Lucas establishes himself as the number one importer of heroin in the Harlem district of Manhattan.")
gangster_film_7 = GangsterFilm.create(title: "Scarface, 1983", genre: "Crime/Drama", director: "Brian De Palma", description: "Cuban refugee Tony Montana (Al Pacino), who arrives penniless in Miami during the Mariel boatlift and becomes a powerful and extremely homicidal drug lord")
gangster_film_8 = GangsterFilm.create(title: "New Jack City, 1991", genre: "Action/Crime", director: "Martin Van Peebles", description: "A modern-day crime epic focusing on the efforts of two unorthodox police officers to bring down a drug gang at the height of New York City's crack cocaine epidemic.")
gangster_film_9 = GangsterFilm.create(title: "Casino, 1995", genre: "Crime/Drama", director: "Martin Scorsese", description: "A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.")
gangster_film_10 = GangsterFilm.create(title: "Reservoir Dogs, 1992", genre: "Crime/Drama", director: "Quentin Tarentino", description: "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.")
gangster_film_11 = GangsterFilm.create(title: "Bonnie and Clyde, 1967", genre: "Crime/Drama", director: "Arthur Penn", description: "Bonnie Parker is bored with life and wants a change. She gets her chance when she meets a charming young drifter by the name of Clyde Barrow. Clyde has dreams of a life of crime that will free him from the hardships of the Depression. The two fall in love and begin a crime spree that extends from Oklahoma to Texas.")
gangster_film_12 = GangsterFilm.create(title: "Donnie Brasco, 1997", genre: "Crime/Drama", director: "Mike Newell", description: "The film is loosely based on the true story of Pistone (Depp), an FBI undercover agent who infiltrated the Bonanno crime family in New York City during the 1970s, under the alias Donnie Brasco, a jewel thief from Vero Beach, Florida.")
gangster_film_13 = GangsterFilm.create(title: "Carlito's Way, 1993", genre: "Crime/Drama", director: "Brian De Palma", description: "a Nuyorican criminal who vows to go straight and to retire in paradise. However, his criminal past proves difficult to escape, and he unwittingly ends up being dragged into the same activities that got him imprisoned in the first place.")
gangster_film_14 = GangsterFilm.create(title: "City of God, 2002", genre: "Crime/Drama", director: "Kátia Lund and Fernando Meirelles", description: "In the poverty-stricken favelas of Rio de Janeiro in the 1970s, two young men choose different paths. Rocket (Phellipe Haagensen) is a budding photographer who documents the increasing drug-related violence of his neighborhood. José Zé Pequeno (Douglas Silva) is an ambitious drug dealer who uses Rocket and his photos as a way to increase his fame as a turf war erupts with his rival, Knockout Ned (Leandro Firmino da Hora). ")
gangster_film_15 = GangsterFilm.create(title: "Goodfellas, 1990", genre: "Crime/Drama", director: "Martin Scorsese", description: "The lowly, blue-collar side of New York's Italian mafia is explored in this crime biopic of wiseguy Henry Hill. As he makes his way from strapping young petty criminal, to big-time thief, to middle-aged cocaine addict and dealer, the film explores in detail the rules and traditions of organized crime.")
gangster_film_16 = GangsterFilm.create(title: "The Godfather, 1972", genre: "Crime/Drama", director: "Francis Ford Coppola", description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son")
gangster_film_17 = GangsterFilm.create(title: "The Godfather Part II, 1974", genre: "Crime/Drama", director: "Francis Ford Coppola", description: "Michael Corleone (Al Pacino), the new Don of the Corleone family, protecting the family business in the aftermath of an attempt on his life")


Review.create(comment: "one of the most thought provking films about drugs released in the early nineties", gangster_film_id: 1)
Review.create(comment: "The plot is fast paced and intricate with twists, turns, ups and downs.", gangster_film_id: 2)
Review.create(comment: "A story of trust and betrayals involving every genre of people there is. No one can be trusted", gangster_film_id: 3)
Review.create(comment: "De Niro masterfully depicts the varying and troublesome events that the Bronx offers, contrasting the lifestyles of violent gangsters to the loving and hardworking ones of its honest fathers.", gangster_film_id: 4)
Review.create(comment: "portrays urban hood life in Watts, California during the early 1990's perfectly and outstandingly.", gangster_film_id: 5)
Review.create(comment: "a great no-pretence, gritty, almost old-fashioned film noir gangster movie", gangster_film_id: 6)
Review.create(comment: "Despite Being filled with misogyny and stereotypes, Scarface still captivates those fascinated by outlaws and the American Dream", gangster_film_id: 7)
Review.create(comment: "Am I my brothers keeper? This movie oozes early 90's street culture", gangster_film_id: 8)
Review.create(comment: "a brilliant cinematic masterpiece", gangster_film_id: 9)
Review.create(comment: "nonlinear storytelling to graphic violence to dynamite soundtrack choices", gangster_film_id: 10)
Review.create(comment: "They're young, they're in love, they rob banks.", gangster_film_id: 11)
Review.create(comment: "An absorbing, well made gangster movie", gangster_film_id: 12)
Review.create(comment: "Carlito's Way is a slow and engrossing character driven crime drama that will keep you watching even though you know the fate of the main character", gangster_film_id: 13)
Review.create(comment: "churns with furious energy as it plunges into the story of the slum gangs of Rio de Janeiro", gangster_film_id: 14)
Review.create(comment: "epic journey of crime, drugs, friendship, violence and betrayal", gangster_film_id: 15)
Review.create(comment: "groundbreaking and brilliantly made film", gangster_film_id: 16)
Review.create(comment: "The original was a wonderful film, but the sequel presents more of a challenge", gangster_film_id: 17)



puts "✅ Done seeding!"
