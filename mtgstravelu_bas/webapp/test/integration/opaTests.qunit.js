sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mtgstravelubas/test/integration/FirstJourney',
		'mtgstravelubas/test/integration/pages/TravelList',
		'mtgstravelubas/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mtgstravelubas') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);