import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
        import('./features/dashboard/pages/dashboard/dashboard')
            .then(c => c.Dashboard),
    },
    {
        path: 'institutions',
        loadComponent: () =>
        import('./features/institutions/pages/institutions/institutions')
            .then(c => c.Institutions),
    },
    {
        path: 'institutions/:institutionId',
        loadComponent: () =>
        import('./features/institutions/pages/institution-details/institution-details')
            .then(c => c.InstitutionDetails),
    },
    {
        path: 'tours',
        loadComponent: () =>
        import('./features/tours/pages/tours/tours')
            .then(c => c.Tours),
    },
     {
        path: 'tours/:tourId',
        loadComponent: () =>
        import('./features/tours/pages/tour-details/tour-details')
            .then(c => c.TourDetails),
    },
    {
        path: 'payments',
        loadComponent: () =>
        import('./features/payments/pages/payments/payments')
            .then(c => c.Payments),
    },
     {
        path: 'profile/:userId',
        loadComponent: () =>
        import('./features/profile/pages/profile/profile')
            .then(c => c.Profile),
    },
    {
        path: 'contact',
        loadComponent: () =>
        import('./features/contact/pages/contact/contact')
            .then(c => c.Contact),
    },
     {
        path: 'about-us',
        loadComponent: () =>
        import('./features/about-us/pages/about-us/about-us')
            .then(c => c.AboutUs),
    }
];
