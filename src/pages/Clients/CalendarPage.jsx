import React, { useState } from 'react';
import TypeButton from '../../components/calendar/Type'; 
import CategoryButton from '../../components/calendar/Category'; 
import CTAButton from '../../components/calendar/Cta'; 
import UploadButton from '../../components/calendar/Creative'; 
import DynamicTable from '../../components/shared/DynamicTable';

const CalendarPage = () => {
    const [calendars, setCalendars] = useState([
        {
            id: 1,
            date: 'September 22, 2024 - Wednesday',
            postCount: '01',
            type: 'Carousel',
            category: 'Awareness',
            cta: 'Website',
            resource: 'Introduction to Art Gallery (Location)',
            tagline: 'Vibrant colors with enchanting stories! / Art beyond Imagination!',
            caption: 'Every piece tells a story, every brushstroke is a whisper, experience the magic of art with classical beauty at Nas Art Gallery!',
            hashtags: '#CaymanIslands #Art #ArtGallery #NASArt',
            creativityText: 'Every piece tells a story, every brushstroke is a whisper, experience the magic of art with classical beauty at Nas Art Gallery!',
            engHooks: 'Art that inspires.',
            creative: 'Upload',
            comments: 'Change font, picture and text.',
            collaboration: '@everything345',
            isContentApproved: false,
            isCreativeApproved: false,
            isClientApprovedContent: false,  
            isClientApprovedCreative: false, 
        },
        {
            id: 2,
            date: 'September 22, 2024 - Wednesday',
            postCount: '01',
            type: 'Carousel',
            category: 'Awareness',
            cta: 'Website',
            resource: 'Introduction to Art Gallery (Location)',
            tagline: 'Vibrant colors with enchanting stories! / Art beyond Imagination!',
            caption: 'Every piece tells a story, every brushstroke is a whisper, experience the magic of art with classical beauty at Nas Art Gallery!',
            hashtags: '#CaymanIslands #Art #ArtGallery #NASArt',
            creativityText: 'Every piece tells a story, every brushstroke is a whisper, experience the magic of art with classical beauty at Nas Art Gallery!',
            engHooks: 'Art that inspires.',
            creative: 'Upload',
            comments: 'Change font, picture and text.',
            collaboration: '@everything345',
            isContentApproved: false, 
            isCreativeApproved: false,
            isClientApprovedContent: false,  
            isClientApprovedCreative: false, 
        },
        {
            id: 3,
            date: 'September 22, 2024 - Wednesday',
            postCount: '01',
            type: 'Carousel',
            category: 'Awareness',
            cta: 'Website',
            resource: 'Introduction to Art Gallery (Location)',
            tagline: 'Vibrant colors with enchanting stories! / Art beyond Imagination!',
            caption: 'Every piece tells a story, every brushstroke is a whisper, experience the magic of art with classical beauty at Nas Art Gallery!',
            hashtags: '#CaymanIslands #Art #ArtGallery #NASArt',
            creativityText: 'Every piece tells a story, every brushstroke is a whisper, experience the magic of art with classical beauty at Nas Art Gallery!',
            engHooks: 'Art that inspires.',
            creative: 'Upload',
            comments: 'Change font, picture and text.',
            collaboration: '@everything345',
            isContentApproved: false, 
            isCreativeApproved: false,
            isClientApprovedContent: false,  
            isClientApprovedCreative: false, 
        },
    ]);

    // Handle type selection
    const handleTypeSelect = (id, selectedType) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, type: selectedType } : calendar
            )
        );
    };

    // Handle category selection
    const handleCategorySelect = (id, selectedCategory) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, category: selectedCategory } : calendar
            )
        );
    };

    // Handle CTA selection
    const handleCTASelect = (id, selectedCTA) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, cta: selectedCTA } : calendar
            )
        );
    };

    // Handle file upload
    const handleUpload = (id, fileName) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, creative: fileName } : calendar
            )
        );
    };

    // Handle content approval
    const handleContentApproval = (id) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, isContentApproved: true } : calendar
            )
        );
    };

    // Handle creative approval
    const handleCreativeApproval = (id) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, isCreativeApproved: true } : calendar
            )
        );
    };

    // Handle client content approval
    const handleClientApprovedContent = (id) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, isClientApprovedContent: true } : calendar)
        );
    };

    // Handle client creative approval
    const handleClientApprovedCreative = (id) => {
        setCalendars((prevCalendars) =>
            prevCalendars.map((calendar) =>
                calendar.id === id ? { ...calendar, isClientApprovedCreative: true } : calendar)
        );
    };

  // Define the columns for DynamicTable
  const columns = [
    { key: 'date', label: 'Date-Day', className: 'min-width-200' },
    { key: 'postCount', label: 'Post Count', className: 'min-width-200' },
    { key: 'type', label: 'Type', className: 'min-width-200' },
    { key: 'category', label: 'Category', className: 'min-width-200' },
    { key: 'cta', label: 'CTA', className: 'min-width-200' },
    { key: 'resource', label: 'Resource/Idea', className: 'min-width-200' },
    { key: 'tagline', label: 'Tagline', className: 'min-width-200' },
    { key: 'caption', label: 'Caption', className: 'min-width-200' },
    { key: 'hashtags', label: 'Hashtags', className: 'min-width-200' },
    { key: 'creativityText', label: 'Creative’s Text (If any)', className: 'min-width-200' },
    { key: 'engHooks', label: 'Eng-Hooks', className: 'min-width-200' },
    { key: 'creative', label: 'Creative', className: 'min-width-200' },
    { key: 'internalStatus', label: 'Internal Status', className: 'min-width-200' },
    { key: 'clientApproval', label: 'Client Approval', className: 'min-width-200' },
    { key: 'comments', label: 'Comments', className: 'min-width-200' },
    { key: 'collaboration', label: 'Collaboration', className: 'min-width-200' },
];

// Render functions for custom column content
const renderColumnContent = {
    type: (row) => (
        <TypeButton
            selectedType={row.type}
            onSelectType={(selectedType) => handleTypeSelect(row.id, selectedType)}
        />
    ),
    category: (row) => (
        <CategoryButton
            selectedCategory={row.category}
            onSelectCategory={(selectedCategory) => handleCategorySelect(row.id, selectedCategory)}
        />
    ),
    cta: (row) => (
        <CTAButton
            selectedCTA={row.cta}
            onSelectCTA={(selectedCTA) => handleCTASelect(row.id, selectedCTA)}
        />
    ),
    creative: (row) => (
        <UploadButton
            onUpload={(fileName) => handleUpload(row.id, fileName)}
        />
    ),
    internalStatus: (row) => (
        <>
            <button
                className={row.isContentApproved ? 'button-secondary mb-1' : 'button-secondary-light mb-1'}
                onClick={() => handleContentApproval(row.id)}
                disabled={row.isContentApproved}
            >
                {row.isContentApproved ? 'Content Approved' : 'Content Approval'}
            </button>
            <button
                className={row.isCreativeApproved ? 'button-secondary' : 'button-secondary-light'}
                onClick={() => handleCreativeApproval(row.id)}
                disabled={row.isCreativeApproved}
            >
                {row.isCreativeApproved ? 'Creative Approved' : 'Creative Approval'}
            </button>
        </>
    ),
    clientApproval: (row) => (
        <>
            <button
                className={row.isClientApprovedContent ? 'button-secondary mb-1' : 'button-secondary-light mb-1'}
                onClick={() => handleClientApprovedContent(row.id)}
                disabled={row.isClientApprovedContent}
            >
                {row.isClientApprovedContent ? 'Content Approved' : 'Content Approval'}
            </button>
            <button
                className={row.isClientApprovedCreative ? 'button-secondary' : 'button-secondary-light'}
                onClick={() => handleClientApprovedCreative(row.id)}
                disabled={row.isClientApprovedCreative}
            >
                {row.isClientApprovedCreative ? 'Creative Approved' : 'Creative Approval'}
            </button>
        </>
    ),
};

return (
    <div className="section">
        <div className='max-height'>
            <DynamicTable
                columns={columns}
                data={calendars}
                renderColumnContent={renderColumnContent}
            />
        </div>
    </div>
);
};

export default CalendarPage;