/* eslint-disable react/prop-types */
import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material';
import { Box } from '@mui/material'



const data = [
    {
        "id": "japan",
        "color": "hsl(118, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 83
            },
            {
                "x": "helicopter",
                "y": 63
            },
            {
                "x": "boat",
                "y": 43
            },
            {
                "x": "train",
                "y": 234
            },
            {
                "x": "subway",
                "y": 298
            },
            {
                "x": "bus",
                "y": 133
            },
            {
                "x": "car",
                "y": 280
            },
            {
                "x": "moto",
                "y": 233
            },
            {
                "x": "bicycle",
                "y": 230
            },
            {
                "x": "horse",
                "y": 66
            },
        ]
    },
    {
        "id": "france",
        "color": "hsl(356, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 271
            },
            {
                "x": "helicopter",
                "y": 157
            },
            {
                "x": "boat",
                "y": 133
            },
            {
                "x": "train",
                "y": 121
            },
            {
                "x": "subway",
                "y": 65
            },
            {
                "x": "bus",
                "y": 128
            },
            {
                "x": "car",
                "y": 88
            },
            {
                "x": "moto",
                "y": 180
            },
            {
                "x": "bicycle",
                "y": 112
            },
            {
                "x": "horse",
                "y": 171
            },
            {
                "x": "skateboard",
                "y": 113
            },
            {
                "x": "others",
                "y": 186
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(97, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 294
            },
            {
                "x": "helicopter",
                "y": 88
            },
            {
                "x": "boat",
                "y": 267
            },
            {
                "x": "train",
                "y": 282
            },
            {
                "x": "subway",
                "y": 268
            },
            {
                "x": "bus",
                "y": 239
            },
            {
                "x": "car",
                "y": 82
            },
            {
                "x": "moto",
                "y": 141
            },
            {
                "x": "bicycle",
                "y": 176
            },
            {
                "x": "horse",
                "y": 43
            },
            {
                "x": "skateboard",
                "y": 81
            },
            {
                "x": "others",
                "y": 102
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(246, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 295
            },
            {
                "x": "helicopter",
                "y": 291
            },
            {
                "x": "boat",
                "y": 38
            },
            {
                "x": "train",
                "y": 215
            },
            {
                "x": "subway",
                "y": 123
            },
            {
                "x": "bus",
                "y": 208
            },
            {
                "x": "car",
                "y": 3
            },
            {
                "x": "moto",
                "y": 266
            },
            {
                "x": "bicycle",
                "y": 246
            },
            {
                "x": "horse",
                "y": 177
            },
            {
                "x": "skateboard",
                "y": 251
            },
            {
                "x": "others",
                "y": 88
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(97, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 184
            },
            {
                "x": "helicopter",
                "y": 176
            },
            {
                "x": "boat",
                "y": 159
            },
            {
                "x": "train",
                "y": 290
            },
            {
                "x": "subway",
                "y": 297
            },
            {
                "x": "bus",
                "y": 1
            },
            {
                "x": "car",
                "y": 152
            },
            {
                "x": "moto",
                "y": 259
            },
            {
                "x": "bicycle",
                "y": 211
            },
            {
                "x": "horse",
                "y": 175
            },
            {
                "x": "skateboard",
                "y": 109
            },
            {
                "x": "others",
                "y": 136
            }
        ]
    }
]

function LineChart({ isDahboard = false }) {
    const theme = useTheme();



    return (
        <Box sx={{ height: isDahboard ? "280px" : "75vh" }}>
            <ResponsiveLine
                data={data}
                curve='catmullRom'
                theme={{
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    },
                    "axis": {
                        "domain": {
                            "line": {
                                "stroke": theme.palette.divider,
                                "strokeWidth": 1
                            }
                        },
                        "legend": {
                            "text": {
                                "fontSize": 12,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            }
                        },
                        "ticks": {
                            "line": {
                                "stroke": theme.palette.divider,
                                "strokeWidth": 1
                            },
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.secondary,
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            }
                        }
                    },
                    "grid": {
                        "line": {
                            "stroke": theme.palette.text.secondary,
                            "strokeWidth": 0
                        }
                    },
                    "legends": {
                        "title": {
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            }
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        },
                        "ticks": {
                            "line": {},
                            "text": {
                                "fontSize": 10,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            }
                        }
                    },
                    "annotations": {
                        "text": {
                            "fontSize": 13,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "link": {
                            "stroke": "#000000",
                            "strokeWidth": 1,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "outline": {
                            "stroke": "#000000",
                            "strokeWidth": 2,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "symbol": {
                            "fill": "#000000",
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        }
                    },
                    "tooltip": {
                        "wrapper": {},
                        "container": {
                            "background": theme.palette.background.default,
                            "color": theme.palette.text.primary,
                            "fontSize": 12
                        },
                        "basic": {},
                        "chip": {},
                        "table": {},
                        "tableCell": {},
                        "tableCellValue": {}
                    }
                }}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDahboard ? null : "transportation",
                    legendOffset: 40,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDahboard ? null : "Count",
                    legendOffset: -45,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                colors={{ scheme: 'category10' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>

    )
}

export default LineChart