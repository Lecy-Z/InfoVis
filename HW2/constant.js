const data =
{
    name: '经济带',
	size: 100,
    children:
    [
        {
            name: '浙江',
			size: 10,
            children:
            [
                {
                    name: '杭州',
                    size: 8,
                    children:
                    [
                        {
                            name: '西湖',
                            size: 3
                        },
                        {
                            name: '滨江',
                            size: 5
                        }
                    ]
                },
                {
                    name: '嘉兴',
                    size: 2
                }
            ]                  
        },
		{
            name: '上海',
            size: 10
		},
		{
            name: '江苏',
			size: 10,
            children:
            [
				{
                    name: '南京',
                    size: 8
				},
                {
                    name: '苏州',
					size: 2,
                }
            ]
        },
		{
            name: '珠三角',
            size: 20
		},
		{
            name: '东北',
            size: 10
		},
		{
            name: '京津冀',
            size: 40,
		},
    ]
};

const color = 
[
    "0, 68, 27, 1",
    "0, 109, 44, 1",
    "35, 139, 69, 1",
    "65, 174, 118, 1",
    "102, 194, 164, 1",
    "153, 216, 201, 1"
];
const colorWhite = "247, 252, 253, 0"