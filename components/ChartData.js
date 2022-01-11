import { React } from 'react';
import { Line } from 'react-chartjs-2';
import { Grid, Avatar, Box, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import DeleteIcon from '@mui/icons-material/Delete';
import SquareIcon from '@mui/icons-material/Square';
import Chart from 'chart.js/auto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

////////////////////////////////////////////////

// This data will be eventually replaced once the data structure has been determined.

const testData = {
   liveData: [22431, 22467, 22589, 22603, 22656, 22710, 22732],
   predictionData: [22770, 22803, 22824],
};

const testLabels = [
   ...Array(testData.liveData.length + testData.predictionData.length).keys(),
];

////////////////////////////////////////////////

const ChartData = () => {
   const { liveData, predictionData } = testData;

   const live = (ctx, value) => {
      return ctx.p0DataIndex < testData.liveData.length - 1 ? value : undefined;
   };
   const predicted = (ctx, value) => {
      return ctx.p0DataIndex >= testData.liveData.length - 1
         ? value
         : undefined;
   };

   const subscriberData = {
      labels: testLabels,
      datasets: [
         {
            label: ChartData.Constants.LABEL,
            data: liveData.concat(predictionData),
            borderColor: ChartData.Constants.COLOUR_PRI,
            backgroundColor: ChartData.Constants.COLOUR_PRI_OPAQUE,
            pointBorderColor: ChartData.Constants.POINT_BORDER,
            pointBackgroundColor: ChartData.Constants.POINT_FILL,
            fill: true,
            tension: 0.3,
            segment: {
               borderColor: (ctx) =>
                  live(ctx, ChartData.Constants.COLOUR_PRI) ||
                  predicted(ctx, ChartData.Constants.COLOUR_SEC),
               backgroundColor: (ctx) =>
                  live(ctx, ChartData.Constants.COLOUR_PRI_OPAQUE) ||
                  predicted(ctx, ChartData.Constants.COLOUR_SEC_OPAQUE),
            },
         },
      ],
   };

   return (
      <>
         <Box>
            <Grid container direction="column" spacing={2}>
               <Grid item>
                  <Box
                     sx={{
                        display: 'flex',
                     }}
                  >
                     <Avatar sx={{ width: 100, height: 100, mr: 6 }}></Avatar>
                     <Grid container direction="column" justifyContent="center">
                        <Grid item>
                           <Box
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 alignItems: 'center',
                              }}
                           >
                              <Typography
                                 sx={{ mr: 1 }}
                                 variant="h5"
                                 component="h1"
                              >
                                 Channel Name
                              </Typography>
                              <DeleteIcon></DeleteIcon>
                           </Box>
                        </Grid>
                        <Grid item>
                           <Box
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                              }}
                           >
                              <Box
                                 sx={{ display: 'flex', flexDirection: 'row' }}
                              >
                                 <Typography variant="h3" component="body">
                                    {subscriberData &&
                                       subscriberData.datasets[0]['data'][
                                          liveData.length - 1
                                       ]}
                                 </Typography>
                                 {/* The following typography component simply displays the delta */}
                                 <Typography>
                                    {subscriberData &&
                                    subscriberData.datasets[0]['data'][
                                       liveData.length
                                    ] ? (
                                       subscriberData.datasets[0]['data'][
                                          liveData.length - 1
                                       ] <
                                       subscriberData.datasets[0]['data'][
                                          liveData.length
                                       ] ? (
                                          <Typography
                                             color={
                                                ChartData.Constants.COLOUR_GREEN
                                             }
                                             fontWeight={'bold'}
                                          >
                                             +
                                             {Math.abs(
                                                subscriberData.datasets[0][
                                                   'data'
                                                ][liveData.length - 1] -
                                                   subscriberData.datasets[0][
                                                      'data'
                                                   ][liveData.length]
                                             )}
                                          </Typography>
                                       ) : subscriberData.datasets[0]['data'][
                                            liveData.length - 1
                                         ] ==
                                         subscriberData.datasets[0]['data'][
                                            liveData.length
                                         ] ? (
                                          <Typography fontWeight={'bold'}>
                                             +0
                                          </Typography>
                                       ) : (
                                          <Typography
                                             color={
                                                ChartData.Constants.COLOUR_RED
                                             }
                                             fontWeight={'bold'}
                                          >
                                             -
                                             {Math.abs(
                                                subscriberData.datasets[0][
                                                   'data'
                                                ][liveData.length - 1] -
                                                   subscriberData.datasets[0][
                                                      'data'
                                                   ][liveData.length]
                                             )}
                                          </Typography>
                                       )
                                    ) : (
                                       ''
                                    )}
                                 </Typography>
                                 <Box sx={{ ml: 2, mr: 2 }}>
                                    <TrendingFlatIcon fontSize="large"></TrendingFlatIcon>
                                 </Box>
                                 <Typography variant="h3" component="body">
                                    {subscriberData.datasets[0]['data'][
                                       liveData.length
                                    ]
                                       ? subscriberData.datasets[0]['data'][
                                            liveData.length
                                         ]
                                       : 'Tracking...'}
                                 </Typography>
                              </Box>
                              <Box
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                 }}
                              >
                                 <SquareIcon
                                    fontSize="large"
                                    sx={{
                                       m: 2,
                                       fill: ChartData.Constants.COLOUR_PRI,
                                    }}
                                 ></SquareIcon>
                                 <Typography variant="h6" component="subtitle1">
                                    Current Subscribers
                                 </Typography>
                                 <SquareIcon
                                    fontSize="large"
                                    sx={{
                                       m: 2,
                                       fill: ChartData.Constants.COLOUR_SEC,
                                    }}
                                 ></SquareIcon>
                                 <Typography variant="h6" component="subtitle1">
                                    Predicted Subscribers
                                 </Typography>
                              </Box>
                           </Box>
                        </Grid>
                     </Grid>
                  </Box>
               </Grid>
               <Grid item>
                  <Line
                     type="line"
                     data={subscriberData}
                     options={{
                        plugins: {
                           legend: {
                              display: false,
                           },
                        },
                     }}
                  />
               </Grid>
            </Grid>
         </Box>
      </>
   );
};

ChartData.Constants = {
   LABEL: 'Subscriber Data',
   COLOUR_PRI: 'rgb(9, 165, 189, 1)',
   COLOUR_PRI_OPAQUE: 'rgb(9, 165, 189, 0.4)',
   COLOUR_SEC: 'rgb(239, 165, 189, 1)',
   COLOUR_SEC_OPAQUE: 'rgb(239, 165, 189, 0.4)',
   COLOUR_GREEN: '#5CAC6D',
   COLOUR_RED: '#b71c1c',
   POINT_BORDER: 'grey',
   POINT_FILL: 'white',
};

export default ChartData;
