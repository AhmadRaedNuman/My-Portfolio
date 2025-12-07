
const ODOO_URL = process.env.REACT_APP_ODOO_URL || 'https://ahmadnuman-dev.odoo.com';
const ODOO_DB = process.env.REACT_APP_ODOO_DB || 'ahmadnuman-dev';

export class Odoo19API {
    constructor() {
        this.uid = null;
    }

    async authenticate(username, password) {
        try {
            const response = await fetch(`${ODOO_URL}/jsonrpc/2`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: "2.0",
                    method: "call",
                    params: {
                        service: "common",
                        method: "authenticate",
                        args: [ODOO_DB, username, password, {}]
                    },
                    id: 1
                })
            });

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error.data.message || 'Authentication failed');
            }
            
            this.uid = data.result;
            return data.result;
        } catch (error) {
            console.error('Authentication error:', error);
            throw error;
        }
    }

    async executeKw(model, method, args = [], kwargs = {}) {
        const response = await fetch(`${ODOO_URL}/jsonrpc/2`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "call",
                params: {
                    service: "object",
                    method: "execute_kw",
                    args: [
                        ODOO_DB,
                        this.uid,
                        'password',
                        model,
                        method,
                        args,
                        kwargs
                    ]
                },
                id: Math.floor(Math.random() * 1000)
            })
        });

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.data.message || 'API Error');
        }
        
        return data.result;
    }

    async getEmployeeData(employeeId = null) {
        try {
            if (!employeeId) {
                const userData = await this.executeKw(
                    'res.users',
                    'read',
                    [[this.uid], ['employee_id', 'name', 'email']]
                );
                
                if (userData && userData[0]?.employee_id) {
                    employeeId = userData[0].employee_id[0];
                } else {
                    // If no employee ID, return user data
                    return {
                        name: userData[0]?.name || '',
                        work_email: userData[0]?.email || '',
                        job_title: '',
                        work_location: ''
                    };
                }
            }

            // Get employee details
            const employeeData = await this.executeKw(
                'hr.employee',
                'read',
                [
                    [employeeId],
                    [
                        'name', 
                        'job_title', 
                        'work_email', 
                        'work_phone',
                        'work_location', 
                        'image_1920',
                        'department_id',
                        'parent_id',
                        'coach_id',
                        'linkedin_profile',
                        'github_profile'
                    ]
                ]
            );

            return employeeData ? employeeData[0] : null;
        } catch (error) {
            console.error('Error getting employee data:', error);
            return null;
        }
    }

    // Simple search method
    async searchRead(model, domain = [], fields = [], limit = 80) {
        return this.executeKw(model, 'search_read', [
            domain,
            fields,
            0, // offset
            limit
        ]);
    }
}

// Create and export instance
export const odoo19Api = new Odoo19API();