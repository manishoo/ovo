/*
 * meal-plan-sample.ts
 * Copyright: Ouranos Studio 2019
 */

function generateMeals(date: string) {
	const meals = [{ name: 'Breakfast', time: '09:00' }, { name: 'AM Snack', time: '10:00' }, {
		name: 'Lunch',
		time: '14:00'
	}, { name: 'Dinner', time: '21:00' }, { name: 'Late Night Snack', time: '23:00' }]

	const dayMeals: any[] = []
	meals.reverse().forEach((meal: { name: string, time: string }) => {
		const d = new Date(date)
		d.setHours(+meal.time.split(':')[0])
		d.setMinutes(+meal.time.split(':')[1])
		dayMeals.push({
			id: String(Math.random()),
			type: 'meal',
			date: d.toISOString(),
			time: meal.time,
			relativeSize: 0,
			meal: {
				id: String(Math.random()),
				name: meal.name,
				availableTime: 15,
				cook: true,
				foods: [
					{
						food: {
							id: String(Math.random()),
							name: 'Carrot juice', // carrot juice
							image: {
								url: 'https://www.liveeatlearn.com/wp-content/uploads/2015/08/DSC_9624crop.jpg'
							},
						},
						eaters: [
							{
								user: {
									id: '2',
									avatar: {
										url: 'https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg',
									},
									color: '#21A9E2',
								},
								amount: 1,
								unit: 'cup',
							},
							{
								user: {
									id: '1',
									avatar: {
										url: 'https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg',
									},
									color: '#D33131',
								},
								amount: 1,
								unit: 'cup',
							}
						],
					},
					{
						food: {
							id: String(Math.random()),
							name: 'Carrot juice', // carrot juice
							image: {
								url: 'https://www.liveeatlearn.com/wp-content/uploads/2015/08/DSC_9624crop.jpg'
							},
						},
						eaters: [
							{
								user: {
									id: '2',
									avatar: {
										url: 'https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg',
									},
									color: '#21A9E2',
								},
								amount: 1,
								unit: 'cup',
							},
							{
								user: {
									id: '1',
									avatar: {
										url: 'https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg',
									},
									color: '#D33131',
								},
								amount: 1,
								unit: 'cup',
							}
						],
					},
					{
						food: {
							id: String(Math.random()),
							name: 'Carrot juice', // carrot juice
							image: {
								url: 'https://www.liveeatlearn.com/wp-content/uploads/2015/08/DSC_9624crop.jpg'
							},
						},
						eaters: [
							{
								user: {
									id: '2',
									avatar: {
										url: 'https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg',
									},
									color: '#21A9E2',
								},
								amount: 1,
								unit: 'cup',
							},
							{
								user: {
									id: '1',
									avatar: {
										url: 'https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg',
									},
									color: '#D33131',
								},
								amount: 1,
								unit: 'cup',
							}
						],
					},
				],
				recipes: [
					{
						recipe: {
							id: String(Math.random()),
							coverImage: {
								url: 'https://images.media-allrecipes.com/userphotos/300x300/4572704.jpg',
							},
							title: 'Chicken Parmesan',
							reviews: [],
							likes: 800,
							ingredients: [],
							instructions: [],
							yield: 4,
							author: {
								//Ref<User>
							},
							notes: [],
							description: 'string',
							// courses: [],
							// cuisine: string,
							calories: 370,
							timing: {
								prepTime: 10,
								cookTime: 10,
								totalTime: 20,
							},
							// origin: RecipeOrigin,
							tags: [],
							images: [],
							// video: Video,
						},
						eaters: [
							{
								user: {
									id: '1',
									avatar: {
										url: 'https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg',
									},
									color: '#D33131',
								},
								proportion: '2/3',
							}
						]
					},
				],
			}
		})
	})

	return dayMeals
}

// export const generateMealPlan = () => ({
// 	id: Math.random(),
// 	name: 'Default',
// 	saturday: {
// 		meals: generateMeals(),
// 	},
// 	sunday: {
// 		meals: generateMeals()
// 	},
// 	monday: {
// 		meals: generateMeals()
// 	},
// 	tuesday: {
// 		meals: generateMeals()
// 	},
// 	wednesday: {
// 		meals: generateMeals()
// 	},
// 	thursday: {
// 		meals: generateMeals()
// 	},
// 	friday: {
// 		meals: generateMeals()
// 	},
// })

export const generatePath = () => {
	const events: any[] = []

	for (let i = -5; i < 10; i++) {
		const d = new Date()
		d.setDate(d.getDate() - i)
		events.push(...generateMeals(d.toISOString()))
	}

	return events
}