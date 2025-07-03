import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Settings, 
  Home, 
  Building, 
  Users, 
  Calculator, 
  Heart, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Palette,
  Shield,
  Save,
  Eye,
  Edit,
  Trash2,
  Plus,
  Upload,
  Download,
  UserCheck,
  TrendingUp,
  MessageSquare,
  FileText,
  HelpCircle,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Filter,
  Search,
  MoreVertical
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Admin = () => {
  const [siteSettings, setSiteSettings] = useState({
    siteName: "EleganceEstate",
    tagline: "Where elegance meets excellence in real estate",
    contactEmail: "info@eleganceestate.com",
    contactPhone: "+1 (555) 123-4567",
    address: "123 Luxury Ave, Premium District",
    maintenanceMode: false,
    allowRegistration: true
  });

  const [properties, setProperties] = useState([
    { 
      id: 1, 
      title: "Luxury Penthouse", 
      location: "Manhattan, NY", 
      price: "$2,500,000", 
      status: "active",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2500,
      views: 245,
      leads: 12,
      agent: "Sarah Johnson"
    },
    { 
      id: 2, 
      title: "Modern Villa", 
      location: "Beverly Hills, CA", 
      price: "$1,800,000", 
      status: "active",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      views: 189,
      leads: 8,
      agent: "Mike Chen"
    },
    { 
      id: 3, 
      title: "Waterfront Condo", 
      location: "Miami, FL", 
      price: "$950,000", 
      status: "inactive",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      views: 156,
      leads: 5,
      agent: "Emily Davis"
    }
  ]);

  const [agents, setAgents] = useState([
    { 
      id: 1, 
      name: "Sarah Johnson", 
      email: "sarah@eleganceestate.com", 
      phone: "+1 (555) 101-2345",
      status: "approved", 
      joinDate: "2024-01-15",
      propertiesSold: 23,
      totalSales: "$15.2M",
      rating: 4.8,
      leadsAssigned: 45,
      activeListings: 12
    },
    { 
      id: 2, 
      name: "Mike Chen", 
      email: "mike@eleganceestate.com", 
      phone: "+1 (555) 201-3456",
      status: "approved", 
      joinDate: "2024-02-20",
      propertiesSold: 18,
      totalSales: "$12.8M",
      rating: 4.6,
      leadsAssigned: 38,
      activeListings: 8
    },
    { 
      id: 3, 
      name: "Emily Davis", 
      email: "emily@eleganceestate.com", 
      phone: "+1 (555) 301-4567",
      status: "pending", 
      joinDate: "2024-03-10",
      propertiesSold: 0,
      totalSales: "$0",
      rating: 0,
      leadsAssigned: 0,
      activeListings: 3
    }
  ]);

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      property: "Luxury Penthouse",
      status: "new",
      priority: "high",
      source: "website",
      assignedAgent: "Sarah Johnson",
      createdDate: "2024-01-20",
      lastContact: "2024-01-20",
      notes: "Interested in penthouse properties"
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+1 (555) 234-5678",
      property: "Modern Villa",
      status: "contacted",
      priority: "medium",
      source: "referral",
      assignedAgent: "Mike Chen",
      createdDate: "2024-01-18",
      lastContact: "2024-01-21",
      notes: "Looking for family home with garden"
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@example.com",
      phone: "+1 (555) 345-6789",
      property: "Waterfront Condo",
      status: "qualified",
      priority: "high",
      source: "social media",
      assignedAgent: "Emily Davis",
      createdDate: "2024-01-15",
      lastContact: "2024-01-22",
      notes: "Pre-approved for mortgage, ready to buy"
    }
  ]);

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Top 10 Luxury Neighborhoods in 2024",
      status: "published",
      author: "Admin",
      publishDate: "2024-01-15",
      views: 1245,
      category: "Market Trends"
    },
    {
      id: 2,
      title: "Home Buying Guide for First-Time Buyers",
      status: "draft",
      author: "Admin",
      publishDate: null,
      views: 0,
      category: "Guides"
    }
  ]);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a viewing by clicking the 'Book Visit' button on any property page.",
      category: "General",
      status: "published"
    },
    {
      id: 2,
      question: "What documents do I need for mortgage application?",
      answer: "You'll need proof of income, bank statements, and identification documents.",
      category: "Financing",
      status: "published"
    }
  ]);

  const handleSaveSettings = () => {
    console.log("Saving settings:", siteSettings);
    alert("Settings saved successfully!");
  };

  const handleDeleteItem = (type: string, id: number) => {
    if (confirm(`Are you sure you want to delete this ${type}?`)) {
      if (type === 'property') {
        setProperties(properties.filter(p => p.id !== id));
      } else if (type === 'agent') {
        setAgents(agents.filter(a => a.id !== id));
      } else if (type === 'lead') {
        setLeads(leads.filter(l => l.id !== id));
      } else if (type === 'blog') {
        setBlogPosts(blogPosts.filter(b => b.id !== id));
      } else if (type === 'faq') {
        setFaqs(faqs.filter(f => f.id !== id));
      }
      alert(`${type} deleted successfully!`);
    }
  };

  const handleApproveAgent = (id: number) => {
    setAgents(agents.map(agent => 
      agent.id === id ? { ...agent, status: 'approved' } : agent
    ));
    alert("Agent approved successfully!");
  };

  const handleAssignLead = (leadId: number, agentName: string) => {
    setLeads(leads.map(lead => 
      lead.id === leadId ? { ...lead, assignedAgent: agentName } : lead
    ));
    alert("Lead assigned successfully!");
  };

  const quickStats = [
    { label: "Total Properties", value: "156", icon: Building, color: "text-blue-500" },
    { label: "Active Agents", value: "12", icon: Users, color: "text-green-500" },
    { label: "New Leads", value: "89", icon: MessageSquare, color: "text-purple-500" },
    { label: "Monthly Views", value: "12.5K", icon: Eye, color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-luxury-dark">
      {/* Professional Admin Header */}
      <div className="bg-luxury-light border-b border-luxury-neutral">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-luxury-dark" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-luxury-text">EleganceEstate Admin</h1>
                <p className="text-luxury-text-muted text-sm">Professional Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                <Shield className="h-4 w-4 mr-1" />
                Administrator
              </Badge>
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                View Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-luxury-light border-luxury-neutral">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-luxury-text-muted text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-luxury-text">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Admin Tabs */}
        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-luxury-light">
            <TabsTrigger value="properties" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Properties
            </TabsTrigger>
            <TabsTrigger value="agents" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="leads" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Leads CRM
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Properties Management Tab */}
          <TabsContent value="properties" className="space-y-6">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-luxury-text flex items-center">
                  <Building className="h-5 w-5 mr-2 text-luxury-gold" />
                  Property Management
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Bulk Import CSV
                  </Button>
                  <Button variant="luxury" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Property
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search properties..." className="pl-10" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-luxury-text">Property</TableHead>
                      <TableHead className="text-luxury-text">Location</TableHead>
                      <TableHead className="text-luxury-text">Price</TableHead>
                      <TableHead className="text-luxury-text">Details</TableHead>
                      <TableHead className="text-luxury-text">Performance</TableHead>
                      <TableHead className="text-luxury-text">Agent</TableHead>
                      <TableHead className="text-luxury-text">Status</TableHead>
                      <TableHead className="text-luxury-text">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {properties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell className="text-luxury-text font-medium">{property.title}</TableCell>
                        <TableCell className="text-luxury-text-muted">{property.location}</TableCell>
                        <TableCell className="text-luxury-gold font-bold">{property.price}</TableCell>
                        <TableCell className="text-luxury-text-muted">
                          {property.bedrooms}BR / {property.bathrooms}BA / {property.sqft}sqft
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm text-luxury-text">{property.views} views</div>
                            <div className="text-sm text-luxury-text">{property.leads} leads</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-luxury-text-muted">{property.agent}</TableCell>
                        <TableCell>
                          <Badge variant={property.status === 'active' ? 'default' : 'secondary'}>
                            {property.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleDeleteItem('property', property.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Agents Management Tab */}
          <TabsContent value="agents" className="space-y-6">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-luxury-text flex items-center">
                  <Users className="h-5 w-5 mr-2 text-luxury-gold" />
                  Agent Management
                </CardTitle>
                <Button variant="luxury" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Agent
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-luxury-text">Agent</TableHead>
                      <TableHead className="text-luxury-text">Contact</TableHead>
                      <TableHead className="text-luxury-text">Performance</TableHead>
                      <TableHead className="text-luxury-text">Stats</TableHead>
                      <TableHead className="text-luxury-text">Status</TableHead>
                      <TableHead className="text-luxury-text">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {agents.map((agent) => (
                      <TableRow key={agent.id}>
                        <TableCell>
                          <div>
                            <div className="text-luxury-text font-medium">{agent.name}</div>
                            <div className="text-sm text-luxury-text-muted">Joined: {agent.joinDate}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm text-luxury-text">{agent.email}</div>
                            <div className="text-sm text-luxury-text-muted">{agent.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm text-luxury-text">{agent.propertiesSold} sales</div>
                            <div className="text-sm text-luxury-gold font-medium">{agent.totalSales}</div>
                            <div className="flex items-center">
                              <span className="text-sm text-luxury-text mr-1">★ {agent.rating}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm text-luxury-text">{agent.leadsAssigned} leads</div>
                            <div className="text-sm text-luxury-text">{agent.activeListings} listings</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={agent.status === 'approved' ? 'default' : 'secondary'}>
                            {agent.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {agent.status === 'pending' && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleApproveAgent(agent.id)}
                              >
                                <UserCheck className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                            )}
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleDeleteItem('agent', agent.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leads CRM Tab */}
          <TabsContent value="leads" className="space-y-6">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-luxury-text flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-luxury-gold" />
                  Leads CRM
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="luxury" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Lead
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search leads..." className="pl-10" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-luxury-text">Contact</TableHead>
                      <TableHead className="text-luxury-text">Property Interest</TableHead>
                      <TableHead className="text-luxury-text">Status</TableHead>
                      <TableHead className="text-luxury-text">Priority</TableHead>
                      <TableHead className="text-luxury-text">Assigned Agent</TableHead>
                      <TableHead className="text-luxury-text">Last Contact</TableHead>
                      <TableHead className="text-luxury-text">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div>
                            <div className="text-luxury-text font-medium">{lead.name}</div>
                            <div className="text-sm text-luxury-text-muted">{lead.email}</div>
                            <div className="text-sm text-luxury-text-muted">{lead.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-luxury-text">{lead.property}</TableCell>
                        <TableCell>
                          <Badge variant={
                            lead.status === 'new' ? 'secondary' : 
                            lead.status === 'contacted' ? 'outline' : 'default'
                          }>
                            {lead.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={lead.priority === 'high' ? 'destructive' : 'outline'}>
                            {lead.priority}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-luxury-text">{lead.assignedAgent}</TableCell>
                        <TableCell className="text-luxury-text-muted">{lead.lastContact}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Assign Lead</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label>Assign to Agent</Label>
                                    <select 
                                      className="w-full mt-1 p-2 border rounded"
                                      onChange={(e) => handleAssignLead(lead.id, e.target.value)}
                                    >
                                      {agents.filter(a => a.status === 'approved').map(agent => (
                                        <option key={agent.id} value={agent.name}>
                                          {agent.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleDeleteItem('lead', lead.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-luxury-text">Total Property Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-luxury-gold">45,231</div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12.5% from last month
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-luxury-text">Lead Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-luxury-gold">3.8%</div>
                  <div className="flex items-center text-sm text-green-600">
                    <Target className="h-4 w-4 mr-1" />
                    +0.5% from last month
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-luxury-text">Avg. Days on Market</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-luxury-gold">28</div>
                  <div className="flex items-center text-sm text-red-600">
                    <Activity className="h-4 w-4 mr-1" />
                    +3 days from last month
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-luxury-text">Revenue This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-luxury-gold">$2.4M</div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +18.2% from last month
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader>
                  <CardTitle className="text-luxury-text">Top Performing Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {properties.slice(0, 3).map((property) => (
                      <div key={property.id} className="flex items-center justify-between">
                        <div>
                          <div className="text-luxury-text font-medium">{property.title}</div>
                          <div className="text-sm text-luxury-text-muted">{property.location}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-luxury-gold font-bold">{property.views} views</div>
                          <div className="text-sm text-luxury-text">{property.leads} leads</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader>
                  <CardTitle className="text-luxury-text">Agent Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {agents.filter(a => a.status === 'approved').map((agent) => (
                      <div key={agent.id} className="flex items-center justify-between">
                        <div>
                          <div className="text-luxury-text font-medium">{agent.name}</div>
                          <div className="text-sm text-luxury-text-muted">★ {agent.rating} rating</div>
                        </div>
                        <div className="text-right">
                          <div className="text-luxury-gold font-bold">{agent.totalSales}</div>
                          <div className="text-sm text-luxury-text">{agent.propertiesSold} sales</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Blog Posts */}
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-luxury-text flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-luxury-gold" />
                    Blog Posts
                  </CardTitle>
                  <Button variant="luxury" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="text-luxury-text font-medium">{post.title}</div>
                          <div className="text-sm text-luxury-text-muted">
                            {post.category} • {post.publishDate || 'Draft'} • {post.views} views
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                            {post.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDeleteItem('blog', post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card className="bg-luxury-light border-luxury-neutral">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-luxury-text flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-luxury-gold" />
                    FAQs
                  </CardTitle>
                  <Button variant="luxury" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New FAQ
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-luxury-text font-medium">{faq.question}</div>
                          <div className="flex gap-2">
                            <Badge variant="outline">{faq.category}</Badge>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDeleteItem('faq', faq.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-luxury-text-muted">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader>
                <CardTitle className="text-luxury-text flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-luxury-gold" />
                  Site Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteName" className="text-luxury-text">Site Name</Label>
                    <Input
                      id="siteName"
                      value={siteSettings.siteName}
                      onChange={(e) => setSiteSettings({...siteSettings, siteName: e.target.value})}
                      className="bg-luxury-dark border-luxury-neutral"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tagline" className="text-luxury-text">Tagline</Label>
                    <Input
                      id="tagline"
                      value={siteSettings.tagline}
                      onChange={(e) => setSiteSettings({...siteSettings, tagline: e.target.value})}
                      className="bg-luxury-dark border-luxury-neutral"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail" className="text-luxury-text">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={siteSettings.contactEmail}
                      onChange={(e) => setSiteSettings({...siteSettings, contactEmail: e.target.value})}
                      className="bg-luxury-dark border-luxury-neutral"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone" className="text-luxury-text">Contact Phone</Label>
                    <Input
                      id="contactPhone"
                      value={siteSettings.contactPhone}
                      onChange={(e) => setSiteSettings({...siteSettings, contactPhone: e.target.value})}
                      className="bg-luxury-dark border-luxury-neutral"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-luxury-text">Address</Label>
                  <Textarea
                    id="address"
                    value={siteSettings.address}
                    onChange={(e) => setSiteSettings({...siteSettings, address: e.target.value})}
                    className="bg-luxury-dark border-luxury-neutral"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-luxury-text">Maintenance Mode</Label>
                      <p className="text-sm text-luxury-text-muted">Enable to show maintenance page to visitors</p>
                    </div>
                    <Switch
                      checked={siteSettings.maintenanceMode}
                      onCheckedChange={(checked) => setSiteSettings({...siteSettings, maintenanceMode: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-luxury-text">Allow Registration</Label>
                      <p className="text-sm text-luxury-text-muted">Allow new users to register</p>
                    </div>
                    <Switch
                      checked={siteSettings.allowRegistration}
                      onCheckedChange={(checked) => setSiteSettings({...siteSettings, allowRegistration: checked})}
                    />
                  </div>
                </div>

                <Button onClick={handleSaveSettings} variant="luxury" className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
