const documentation = {
	openapi: "3.0.1",
	info: {
		version: "1.0.7",
		title: "Search",
		description: "Search API for Getir Assesment",
		license: {
			name: "Apache 2.0",
			url: "https://www.apache.org/licenses/LICENSE-2.0.html",
		},
	},
	servers: [
		{
			url: "https://muzeyr-assigment.herokuapp.com/",
			description: "Production server",
		},
		{
			url: "http://localhost:3000/",
			description: "Local server",
		},
	],
	paths: {
		"/api/search": {
			post: {
				tags: ["Search operations"],
				operationId: "search",
				requestBody: {
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/request",
							},
						},
					},
					required: true,
				},
				responses: {},
			},
		},
	},
	components: {
		schemas: {
			startDate: {
				type: "string",
				description: "startDate format YYYY-MM-DD",
				example: "2016-01-26",
			},
			endDate: {
				type: "string",
				description: "endDate format YYYY-MM-DD",
				example: "2018-02-02",
			},
			minCount: {
				type: "integer",
				description: "Min Count Value",
				example: 2700,
			},
			maxCount: {
				type: "integer",
				description: "Max Count Value",
				example: 3000,
			},
			request: {
				type: "object",
				properties: {
					startDate: {
						$ref: "#/components/schemas/startDate",
					},
					endDate: {
						$ref: "#/components/schemas/endDate",
					},
					minCount: {
						$ref: "#/components/schemas/minCount",
					},
					maxCount: {
						$ref: "#/components/schemas/maxCount",
					},
				},
			},
		},
	},
};
  
export default documentation;
  