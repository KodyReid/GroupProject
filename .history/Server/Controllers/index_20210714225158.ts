import express, { Request, Response, NextFunction } from 'express';

// Display Page Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about'  });
}

export function DisplayActiveTourneyPage(req: Request, res: Response, next: NextFunction): void
{
    res.render("index", { title: "Active Tournaments", page: "activetourney" });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services'  });
}
export function DisplayNewTourneyPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Create New A Tournament', page: 'newtourney'  });
}

export function DisplayViewTourneyPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'View Tournament', page: 'viewtourney'  });
}
// export function DisplayCompetitorsListPage(req: Request, res: Response, next: NextFunction): void
// {
//     res.render('index', {title: 'Competitors List', page: 'competitor-list'});
// }

