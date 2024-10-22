import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClientForm from "../../components/Form/ClientForm";
// import { convertToSnakeCase } from "../../utils/generalUtils";

const BusinessDetails = () => {
    const { clientId } = useParams(); // Client ID from URL params
    const [clientData, setClientData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // Mock fetching client data from localStorage or in-memory data
    useEffect(() => {
        const fetchClientData = async () => {
            try {
                // Simulate fetching data
                const storedData = localStorage.getItem(`client_${clientId}`);
                if (storedData) {
                    setClientData(JSON.parse(storedData));
                } else {
                    // Set default mock data if no data exists
                    setClientData({
                        business_name: "Good Guys Wash Shack",
                        business_details: "Car Wash Service",
                        business_address: "34 Huldah Ave. George Town",
                        business_whatsapp_number: "(345) 938-0666",
                        business_email_address: "info@goodguyswashshack.com",
                        target_region: "Cayman Islands",
                        business_offerings: "services",
                        listdown: "",
                        business_website: "https://goodguyswashshack.com",
                        contact_person: "Lachlan Hewitt",
                        brand_key_points: "",
                        brand_guidelines_link: "https://drive.google.com",
                        goals_objectives: "",
                        brand_guidelines_notes: "",
                        ugc_drive_link: "https://drive.google.com",
                        additional_notes: "",
                    });
                }
            } catch (error) {
                setIsError(true);
                console.error("Error fetching client data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchClientData();
    }, [clientId]);

    // Mock updating client data by storing it in localStorage
    const handleSubmit = async (values) => {
        const snakeCaseValues = convertToSnakeCase(values);
        try {
            // Simulate saving data to localStorage
            localStorage.setItem(`client_${clientId}`, JSON.stringify(snakeCaseValues));
            alert("Client updated successfully!");
        } catch (err) {
            console.error("Failed to update client:", err);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: Failed to load client data.</div>;
    }

    const initialValues = {
        businessName: clientData.business_name || "",
        businessDetails: clientData.business_details || "",
        businessAddress: clientData.business_address || "",
        businessWhatsappNumber: clientData.business_whatsapp_number || "",
        businessEmailAddress: clientData.business_email_address || "",
        targetRegion: clientData.target_region || "",
        businessOfferings: clientData.business_offerings || "",
        listdown: clientData.listdown || "",
        businessWebsite: clientData.business_website || "",
        contactPerson: clientData.contact_person || "",
        brandKeyPoints: clientData.brand_key_points || "",
        brandGuidelinesLink: clientData.brand_guidelines_link || "",
        goalsObjectives: clientData.goals_objectives || "",
        brandGuidelinesNotes: clientData.brand_guidelines_notes || "",
        ugcDriveLink: clientData.ugc_drive_link || "",
        additionalNotes: clientData.additional_notes || "",
    };

    return (
        <div className="section">
            <ClientForm initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
    );
};

export default BusinessDetails;
